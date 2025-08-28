// app/[city]/[category]/page.tsx
import { supabase } from "@/lib/supabaseServer";
import HomeHeader from "@/app/components/header/home-header";
import NewFooter from "@/app/components/footer/newFooter";
import BreadCrumb from "@/app/components/common/breadcrumb/breadCrumb";

export default async function CityCategoryPage({
  params,
}: {
  params: { city: string; category: string };
}) {
  const { city, category } = params;

  // Fetch city
  const { data: cityData } = await supabase
    .from("cities")
    .select("id, category, category_slug")
    .eq("category_slug", city)
    .single();

  if (!cityData) return <div>City not found</div>;

  // Fetch category
  const { data: categoryData } = await supabase
    .from("main_categories")
    .select("id, category, category_slug")
    .eq("category_slug", category)
    .single();

  if (!categoryData) return <div>Category not found</div>;

  // Fetch listings
  const { data: listings, error } = await supabase
    .from("listings")
    .select("id, title, slug, gallery_urls, price")
    .contains("city_id", [cityData.id])
    .contains("main_category_ids", [categoryData.id]);

  if (error) console.error(error.message);

  return (
    <>
      <HomeHeader type={1} />
      <BreadCrumb
        title={`${categoryData.category} in ${cityData.category}`}
        item1={cityData.category}
        item2={categoryData.category}
      />

      <section className="section category-section">
        <div className="container">
          <h2 className="mb-4">
            {categoryData.category} in {cityData.category}
          </h2>

          <div className="row">
            {listings && listings.length > 0 ? (
              listings.map((listing) => (
                <div key={listing.id} className="col-md-4 mb-4">
                  <div className="card h-100">
                    {listing.gallery_urls?.[0] && (
                      <img
                        src={listing.gallery_urls[0]}
                        alt={listing.title}
                        className="card-img-top"
                      />
                    )}
                    <div className="card-body">
                      <h5 className="card-title">{listing.title}</h5>
                      {listing.price && <p className="card-text">₹{listing.price}</p>}
                      <a href={`/listing/${listing.slug}`} className="btn btn-primary">
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No listings found in this category for {cityData.category}.</p>
            )}
          </div>
        </div>
      </section>

      <NewFooter />
    </>
  );
}
