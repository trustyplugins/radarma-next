"use client";

import React from "react";
import Link from "next/link";
import ImageWithBasePath from "./components/core/img/ImageWithBasePath";

// Move these components into something like: app/(site)/_components/ or app/components/
// Then update the imports below to match where you place them:

import BecomeProvider from "@/app/components/common/modals/provider-modal";
import FeatureSection from "@/app/components/home/feature-section";
import PopularSection from "@/app/components/home/popular-section";
import WorkSection from "@/app/components/home/workSection";
import PreferredSection from "@/app/components/home/preferredSection";
import ProviderSection from "@/app/components/home/provider-section";
import RateServiceSection from "@/app/components/home/rateServiceSection";
import CustomerSection from "@/app/components/home/customerSection";
import BlogAndJoinus from "@/app/components/home/blogAndJoinus";
import BussinessWithUs from "@/app/components/home/bussinessWithUs";
import ServiceCities from "@/app/components/home/serviceCities";
import HomeHeader from "@/app/components/header/home-header";
import NewFooter from "@/app/components/footer/newFooter";
import AuthModals from "@/app/components/home/authModals";

// QUICK ROUTE MAP (replace with real routes or central config later)
const routes = {
  search: "/search",
  categories: "/categories",
};

export default function HomePage() {
  return (
    <>
      <HomeHeader type={1} />

      {/* Hero Section */}
      <section className="hero-section" id="home">
        <div className="hero-content position-relative overflow-hidden">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div
                  className="wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay=".25s"
                >
                  <h1 className="mb-2">
                    Connect with Nearby Top-rated{" "}
                    <span className="typed" data-type-text="Carpenters">
                      Professionals
                    </span>
                  </h1>
                  <p className="mb-3 sub-title">
                    We can connect you to the right Service, first time and every time.
                  </p>

                  <div className="banner-form bg-white border mb-3">
                    <form action="#">
                      <div className="d-md-flex align-items-center">
                        <div className="input-group mb-2">
                          <span className="input-group-text px-1">
                            <i className="ti ti-search" />
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search for Service"
                          />
                        </div>

                        <div className="input-group mb-2">
                          <span className="input-group-text px-1">
                            <i className="ti ti-map-pin" />
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Location"
                          />
                        </div>

                        <div className="mb-2">
                          <Link
                            href={routes.search}
                            className="btn btn-linear-primary d-inline-flex align-items-center w-100"
                          >
                            <i className="feather icon-search me-2" />
                            Search
                          </Link>
                        </div>
                      </div>
                    </form>

                    <ImageWithBasePath
                      src="assets/img/bg/bg-06.svg"
                      alt="bg"
                      className="shape-06 round-animate"
                      width={800}
                      height={600}
                    />
                  </div>

                  <div className="d-flex align-items-center flex-wrap">
                    <h6 className="mb-2 me-2 fw-medium">Popular Searches</h6>

                    <Link
                      href={routes.search}
                      className="badge badge-dark-transparent fs-14 fw-normal mb-2 me-2"
                    >
                      Plumber
                    </Link>
                    <Link
                      href={routes.search}
                      className="badge badge-dark-transparent fs-14 fw-normal mb-2 me-2"
                    >
                      Interior
                    </Link>
                    <Link
                      href={routes.search}
                      className="badge badge-dark-transparent fs-14 fw-normal mb-2 me-2"
                    >
                      Nail Technicians
                    </Link>
                  </div>

                  <div className="d-flex align-items-center flex-wrap banner-info">
                    <div className="d-flex align-items-center me-4 mt-4">
                      <ImageWithBasePath src="assets/img/icons/success-01.svg" alt="icon" width={40} height={40} />
                      <div className="ms-2">
                        <h6>215,292 +</h6>
                        <p>Verified Providers</p>
                      </div>
                    </div>

                    <div className="d-flex align-items-center me-4 mt-4">
                      <ImageWithBasePath src="assets/img/icons/success-02.svg" alt="icon" width={40} height={40} />
                      <div className="ms-2">
                        <h6>90,000+</h6>
                        <p>Services Completed</p>
                      </div>
                    </div>

                    <div className="d-flex align-items-center me-4 mt-4">
                      <ImageWithBasePath src="assets/img/icons/success-03.svg" alt="icon" width={40} height={40} />
                      <div className="ms-2">
                        <h6>2,390,968</h6>
                        <p>Reviews Globally</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="banner-img wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".25s"
              >
                <ImageWithBasePath
                  src="assets/img/banner.png"
                  alt="banner"
                  className="img-fluid animation-float"
                  width={900}
                  height={700}
                 // priority
                />
              </div>
            </div>
          </div>

          <div className="hero-image">
            <div className="d-inline-flex bg-white p-2 rounded align-items-center shape-01 floating-x">
              <span className="avatar avatar-md bg-warning rounded-circle me-2">
                <i className="ti ti-star-filled" />
              </span>
              <span>
                4.9 / 5<small className="d-block">(255 reviews)</small>
              </span>
              <i className="border-edge" />
            </div>

            <div className="d-inline-flex bg-white p-2 rounded align-items-center shape-02 floating-x">
              <span className="me-2">
                <ImageWithBasePath src="assets/img/icons/tick-banner.svg" alt="tick" width={24} height={24} />
              </span>
              <p className="fs-12 text-dark mb-0">300 Booking Completed</p>
              <i className="border-edge" />
            </div>

            <ImageWithBasePath src="assets/img/bg/bg-03.svg" alt="shape" className="shape-03" width={400} height={400} />
            <ImageWithBasePath src="assets/img/bg/bg-04.svg" alt="shape" className="shape-04" width={400} height={400} />
            <ImageWithBasePath src="assets/img/bg/bg-05.svg" alt="shape" className="shape-05" width={400} height={400} />
          </div>
        </div>
      </section>
      {/* /Hero Section */}

      {/* Category Section */}
      <section className="section category-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center wow fadeInUp" data-wow-delay="0.2s">
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

          {/* Reuse your category cards exactly as before; only Links changed */}
          <div className="row g-4 row-cols-xxl-6 row-cols-xl-6 row-cols-md-4 row-cols-sm-2 row-cols-1 justify-content-center">
            {/* Example card; keep the rest as-is */}
            <div className="col d-flex">
              <div className="category-item text-center flex-fill wow fadeInUp" data-wow-delay="0.2s">
                <div className="mx-auto mb-3">
                  <ImageWithBasePath src="assets/img/icons/category-01.svg" className="img-fluid" alt="Construction" width={64} height={64} />
                </div>
                <h6 className="fs-14 mb-1">Construction</h6>
                <p className="fs-14 mb-0">9874 Listings</p>
                <Link href={routes.categories} className="link-primary text-decoration-underline fs-14">
                  View All
                </Link>
              </div>
            </div>
            <div className="col d-flex">
              <div className="category-item text-center flex-fill wow fadeInUp" data-wow-delay="0.2s">
                <div className="mx-auto mb-3">
                  <ImageWithBasePath src="assets/img/icons/category-01.svg" className="img-fluid" alt="Construction" width={64} height={64} />
                </div>
                <h6 className="fs-14 mb-1">Construction</h6>
                <p className="fs-14 mb-0">9874 Listings</p>
                <Link href={routes.categories} className="link-primary text-decoration-underline fs-14">
                  View All
                </Link>
              </div>
            </div>
            <div className="col d-flex">
              <div className="category-item text-center flex-fill wow fadeInUp" data-wow-delay="0.2s">
                <div className="mx-auto mb-3">
                  <ImageWithBasePath src="assets/img/icons/category-01.svg" className="img-fluid" alt="Construction" width={64} height={64} />
                </div>
                <h6 className="fs-14 mb-1">Construction</h6>
                <p className="fs-14 mb-0">9874 Listings</p>
                <Link href={routes.categories} className="link-primary text-decoration-underline fs-14">
                  View All
                </Link>
              </div>
            </div>
            <div className="col d-flex">
              <div className="category-item text-center flex-fill wow fadeInUp" data-wow-delay="0.2s">
                <div className="mx-auto mb-3">
                  <ImageWithBasePath src="assets/img/icons/category-01.svg" className="img-fluid" alt="Construction" width={64} height={64} />
                </div>
                <h6 className="fs-14 mb-1">Construction</h6>
                <p className="fs-14 mb-0">9874 Listings</p>
                <Link href={routes.categories} className="link-primary text-decoration-underline fs-14">
                  View All
                </Link>
              </div>
            </div>
            <div className="col d-flex">
              <div className="category-item text-center flex-fill wow fadeInUp" data-wow-delay="0.2s">
                <div className="mx-auto mb-3">
                  <ImageWithBasePath src="assets/img/icons/category-01.svg" className="img-fluid" alt="Construction" width={64} height={64} />
                </div>
                <h6 className="fs-14 mb-1">Construction</h6>
                <p className="fs-14 mb-0">9874 Listings</p>
                <Link href={routes.categories} className="link-primary text-decoration-underline fs-14">
                  View All
                </Link>
              </div>
            </div>

            {/* ...paste the rest of your category cards with Link href=... and ImageWithBasePath src="/assets/..." */}
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="text-center view-all wow fadeInUp" data-wow-delay="0.2s">
                <Link href={routes.categories} className="btn btn-dark">
                  View All <i className="ti ti-arrow-right ms-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Category Section */}

      <FeatureSection />
      <PopularSection />
      <WorkSection />
      <PreferredSection />
      <ProviderSection />
      <RateServiceSection />
      <CustomerSection />
      <BlogAndJoinus />
      <BussinessWithUs />
      <ServiceCities />
      <NewFooter />

      <AuthModals />
      <BecomeProvider />
    </>
  );
}
