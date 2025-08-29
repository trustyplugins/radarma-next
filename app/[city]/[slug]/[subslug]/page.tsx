// app/[city]/[slug]/[subslug]/page.tsx
import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabaseServer";
import HomeHeader from "@/app/components/header/home-header";
import NewFooter from "@/app/components/footer/newFooter";
import BreadCrumb from "@/app/components/common/breadcrumb/breadCrumb";

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const dynamicParams = true;

type Params = { city: string; slug: string; subslug: string };

export default async function CitySlugSubslugPage(
  { params }: { params: Promise<Params> }
) {
  const { city, slug, subslug } = await params;

  // 1) City
  const { data: cityData, error: cityErr } = await supabase
    .from("cities")
    .select("id, category, category_slug")
    .eq("category_slug", city)
    .single();
  if (cityErr) console.error(cityErr?.message);
  if (!cityData) notFound();

  // ---------- A) Try MAIN CATEGORY + SUBCATEGORY ----------
  const { data: categoryData, error: catErr } = await supabase
    .from("main_categories")
    .select("id, category, category_slug")
    .eq("category_slug", slug)
    .maybeSingle();
  if (catErr) console.error(catErr?.message);

  if (categoryData) {
    // sub_categories table assumed: id, category, category_slug, main_category_id
    const { data: subcatData, error: subcatErr } = await supabase
      .from("sub_categories")
      .select("id, category, category_slug, parent_id")
      .eq("category_slug", subslug)
      .eq("parent_id", categoryData.id)
      .maybeSingle();
    if (subcatErr) console.error(subcatErr?.message);

    if (subcatData) {
      // listings filter: adjust contains/eq based on your schema (array vs scalar)
      const { data: listings, error: listErr } = await supabase
        .from("listings")
        .select("id, title, slug, gallery_urls, price")
        .contains("city_id", [cityData.id])                  // use .eq("city_id", cityData.id) if scalar
        .contains("main_category_ids", [categoryData.id])    // use .eq(...) if scalar
        .contains("sub_category_ids", [subcatData.id]);      // use .eq(...) if scalar
      if (listErr) console.error(listErr?.message);

      return (
        <>
          <HomeHeader type={1} />
          <BreadCrumb
            title={`${subcatData.category} in ${cityData.category}`}
            item1={cityData.category}
            item2={categoryData.category}
          />
          <section className="section category-section">
            <div className="container">
              <h2 className="mb-4">
                {subcatData.category} in {cityData.category}
              </h2>
              <div className="row">
                {listings?.length ? listings.map((l) => (
                  <div key={l.id} className="col-md-4 mb-4">
                    <div className="card h-100">
                      {l.gallery_urls?.[0] && (
                        <img src={l.gallery_urls[0]} alt={l.title} className="card-img-top" />
                      )}
                      <div className="card-body">
                        <h5 className="card-title">{l.title}</h5>
                        {!!l.price && <p className="card-text">₹{l.price}</p>}
                        <a href={`/${city}/${l.slug}`} className="btn btn-primary">View Details</a>
                      </div>
                    </div>
                  </div>
                )) : <p>No listings found in this subcategory for {cityData.category}.</p>}
              </div>
            </div>
          </section>
          <NewFooter />
        </>
      );
    }
  }

  // ---------- B) Try TAG + SUBTAG ----------
  const { data: tagData, error: tagErr } = await supabase
    .from("tags")
    .select("id, category, category_slug")
    .eq("category_slug", slug)
    .maybeSingle();
  if (tagErr) console.error(tagErr?.message);

  if (tagData) {
    // sub_tags table assumed: id, category, category_slug, tag_id
    const { data: subtagData, error: subtagErr } = await supabase
      .from("sub_tags")
      .select("id, category, category_slug, parent_id")
      .eq("category_slug", subslug)
      .eq("parent_id", tagData.id)
      .maybeSingle();
    if (subtagErr) console.error(subtagErr?.message);

    if (subtagData) {
      // listings filter: change to .eq(...) if scalar columns
      const { data: listings, error: listErr } = await supabase
        .from("listings")
        .select("id, title, slug, gallery_urls, price")
        .contains("city_id", [cityData.id])                // or .eq("city_id", cityData.id)
        .contains("sub_tag_ids", [subtagData.id]);         // or .eq("sub_tag_ids", subtagData.id) if scalar
      if (listErr) console.error(listErr?.message);

      return (
        <>
          <HomeHeader type={1} />
          <BreadCrumb
            title={`${subtagData.category} in ${cityData.category}`}
            item1={cityData.category}
            item2={tagData.category}
          />
          <section className="section category-section">
            <div className="container">
              <h2 className="mb-4">
                {subtagData.category} in {cityData.category}
              </h2>
              <div className="row">
                {listings?.length ? listings.map((l) => (
                  <div key={l.id} className="col-md-4 mb-4">
                    <div className="card h-100">
                      {l.gallery_urls?.[0] && (
                        <img src={l.gallery_urls[0]} alt={l.title} className="card-img-top" />
                      )}
                      <div className="card-body">
                        <h5 className="card-title">{l.title}</h5>
                        {!!l.price && <p className="card-text">₹{l.price}</p>}
                        <a href={`/${city}/${l.slug}`} className="btn btn-primary">View Details</a>
                      </div>
                    </div>
                  </div>
                )) : <p>No listings found for this subtag in {cityData.category}.</p>}
              </div>
            </div>
          </section>
          <NewFooter />
        </>
      );
    }
  }

  notFound();
}
