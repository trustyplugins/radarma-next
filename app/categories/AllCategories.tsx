"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
type Category = {
    id: number;
    category: string;
    category_slug: string;
    image_url?: string;
    listings_count: number;
};




export default function AllCategories({ categories }: { categories: Category[] }) {
    const [city, setCity] = useState("chandigarh");

    useEffect(() => {
      const savedCity = localStorage.getItem("user_city");
      if (savedCity) setCity(savedCity);
    }, []);
    return (
        <>
            <div className="page-wrapper">
                <div className="content">
                    <div className="container">

                        <div className="row justify-content-center align-items-center">
                            {categories.map((cat) => (
                                <div key={cat.id} className="col-lg-3 col-md-6">
                                    <div className="category card wow fadeInUp" data-wow-delay="0.3s">
                                        <Link href={`/${city}/${cat.category_slug}`} >
                                        <div className="card-body">
                                            <div className="feature-icon d-flex justify-content-center align-items-center mb-2">
                                                <span className="rounded-pill d-flex justify-content-center align-items-center p-3">
                                                    <Image
                                                        src={cat.image_url || "/assets/img/icons/category-01.svg"}
                                                        alt={cat.category}
                                                        width={64}
                                                        height={64}
                                                        className="img-fluid"
                                                    />
                                                </span>
                                            </div>
                                            <h5 className="text-center">{cat.category}</h5>
                                            <div className="overlay">
                                                {/* <Image width={64} height={64} className="img-fluid" alt="img" src="/assets/img/services/service-26.jpg" /> */}
                                            </div>
                                        </div>
                                        </Link>
                                    </div>
                                    
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div >
        </>
    );
}
