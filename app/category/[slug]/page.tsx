// app/category/[slug]/page.tsx
import { supabase } from "@/lib/supabaseServer";
import HomeHeader from "@/app/components/header/home-header";
import NewFooter from "@/app/components/footer/newFooter";
import BreadCrumb from "@/app/components/common/breadcrumb/breadCrumb";

interface Props {
  params: { slug: string };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = params;

  // Get category info
  const { data: category, error: catError } = await supabase
    .from("main_categories")
    .select("id, category, category_slug, image_url")
    .eq("category_slug", slug)
    .single();

  if (catError || !category) {
    return <div className="container">Category not found</div>;
  }

  // Get listings under this category (since listings.main_category_ids is an array)
  const { data: listings, error: listError } = await supabase
    .from("listings")
    .select("id, title, slug, gallery_urls, price")
    .contains("main_category_ids", [category.id]); // 👈 check array contains category.id

  if (listError) {
    console.error(listError.message);
  }

  return (
    <>
      <HomeHeader type={1} />
      <BreadCrumb title={category.category} item1="Categories" item2={category.category} />

      <section className="section category-section">
        <div className="container">
          <h2 className="mb-4">{category.category}</h2>

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
                      {listing.price && <p className="card-text">${listing.price}</p>}
                      <a href={`/listing/${listing.slug}`} className="btn btn-primary">
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No listings found for this category.</p>
            )}
          </div>
        </div>
      </section>

      <NewFooter />
    </>
  );
}
