// app/[city]/[slug]/page.tsx
import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabaseServer";
import HomeHeader from "@/app/components/header/home-header";
import NewFooter from "@/app/components/footer/newFooter";
import BreadCrumb from "@/app/components/common/breadcrumb/breadCrumb";

type Params = { city: string; slug: string };

export default async function CitySlugPage({ params, }
    :{
        params: Promise<Params>;
    }
) {
    const { city, slug } = await params;
    // 1) find city
    const { data: cityData } = await supabase
        .from("cities")
        .select("id, category, category_slug")
        .eq("category_slug", city)
        .single();

    if (!cityData) notFound();

    // 2) try category first (if slug matches a main category)
    const { data: categoryData } = await supabase
        .from("main_categories")
        .select("id, category, category_slug")
        .eq("category_slug", slug)
        .maybeSingle();
    //console.log(categoryData);
    if (categoryData) {
        // render category listing grid
        const { data: listings, error } = await supabase
            .from("listings")
            .select("id, title, slug, gallery_urls, price")
            .contains("city_id", [cityData.id])               // if city_id is int[] column
            .contains("main_category_ids", [categoryData.id]); // if main_category_ids is int[] column

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
                            {listings?.length ? (
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
                                                {listing.price && (
                                                    <p className="card-text">₹{listing.price}</p>
                                                )}
                                                <a
                                                    href={`/${city}/${listing.slug}`}
                                                    className="btn btn-primary"
                                                >
                                                    View Details
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p>
                                    No listings found in this category for {cityData.category}.
                                </p>
                            )}
                        </div>
                    </div>
                </section>
                <NewFooter />
            </>
        );
    }

    // 3) otherwise, treat slug as a listing slug
    const { data: listingData } = await supabase
        .from("listings")
        .select("id, title, slug, gallery_urls, price, description")
        .eq("slug", slug)
        .contains("city_id", [cityData.id]) // if city_id is int[] column
        .maybeSingle();

 
    if (listingData) {
        return (
            <>
                <HomeHeader type={1} />
                <main className="container py-4">
                    <h1>{listingData.title}</h1>
                    {listingData.price && <p>₹{listingData.price}</p>}
                    {listingData.gallery_urls?.[0] && (
                        <img
                            src={listingData.gallery_urls[0]}
                            alt={listingData.title}
                            style={{ maxWidth: "100%", height: "auto" }}
                        />
                    )}
                    {listingData.description && <p className="mt-3">{listingData.description}</p>}
                </main>
                <NewFooter />
            </>
        );
    }

     // 2) try category first (if slug matches a main category)
    const { data: tagData } = await supabase
    .from("tags")
    .select("id, category, category_slug")
    .eq("category_slug", slug)
    .maybeSingle();
//console.log(categoryData);
if (tagData) {
    // render category listing grid
    const { data: listings, error } = await supabase
        .from("listings")
        .select("id, title, slug, gallery_urls, price")
        .contains("city_id", [cityData.id])               // if city_id is int[] column
        .contains("tag_ids", [tagData.id]); // if main_category_ids is int[] column

    if (error) console.error(error.message);

    return (
        <>
            <HomeHeader type={1} />
            <BreadCrumb
                title={`${tagData.category} in ${cityData.category}`}
                item1={cityData.category}
                item2={tagData.category}
            />
            <section className="section category-section">
                <div className="container">
                    <h2 className="mb-4">
                        {tagData.category} in {cityData.category}
                    </h2>
                    <div className="row">
                        {listings?.length ? (
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
                                            {listing.price && (
                                                <p className="card-text">₹{listing.price}</p>
                                            )}
                                            <a
                                                href={`/${city}/${listing.slug}`}
                                                className="btn btn-primary"
                                            >
                                                View Details
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>
                                No listings found in this tag for {cityData.category}.
                            </p>
                        )}
                    </div>
                </div>
            </section>
            <NewFooter />
        </>
    );
}
    if (!listingData && !tagData) notFound();

}
