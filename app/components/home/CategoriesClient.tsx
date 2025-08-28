"use client";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import type { RootState } from "@/app/components/core/data/redux/store"; // ✅ type-only import

type Category = {
  id: number;
  category: string;
  category_slug: string;
  image_url?: string;
  listings_count: number;
};

export default function CategoriesClient({ categories }: { categories: Category[] }) {
  // Adjust to your actual state shape. If city is a string slice, this returns the slug directly.
  // If it's an object, pick the slug (fallback to empty string to avoid bad hrefs).
  const city = useSelector((s: RootState) =>
    typeof s.city === "string" ? s.city : s.city?.slug ?? ""
  );

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-lg-6 text-center">
          <div className="section-header text-center">
            <h2 className="mb-1">
              Explore our <span className="text-linear-primary">Categories</span>
            </h2>
            <p className="sub-title">
              Service categories help organize and structure the offerings on a marketplace, making it easier for users to find what they need.
            </p>
          </div>
        </div>
      </div>

      <div className="row g-4 row-cols-xxl-6 row-cols-xl-6 row-cols-md-4 row-cols-sm-2 row-cols-1 justify-content-center">
        {categories.map((cat) => (
          <div key={cat.id} className="col d-flex">
            <div className="category-item text-center flex-fill">
              <div className="mx-auto mb-3">
                <Image
                  src={cat.image_url || "/assets/img/icons/category-01.svg"}
                  alt={cat.category}
                  width={64}
                  height={64}
                  className="img-fluid"
                />
              </div>
              <h6 className="fs-14 mb-1">{cat.category}</h6>
              <p className="fs-14 mb-0">{cat.listings_count} Listings</p>
              <Link
                href={`/${city}/${cat.category_slug}`}
                className="link-primary text-decoration-underline fs-14"
              >
                View All
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="row">
        <div className="col-md-12">
          <div className="text-center view-all">
            <Link href="/categories" className="btn btn-dark">
              View All <i className="ti ti-arrow-right ms-2" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
