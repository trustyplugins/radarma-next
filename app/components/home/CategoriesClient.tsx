"use client";
import Link from "next/link";
import Image from "next/image";

type Category = {
  id: number;
  category: string;
  category_slug: string;
  image_url?: string;
  listings_count: number;
};

export default function CategoriesClient({ categories }: { categories: Category[] }) {
  return (
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
              href={`/categories/${cat.category_slug}`}
              className="link-primary text-decoration-underline fs-14"
            >
              View All
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
