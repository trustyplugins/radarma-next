"use client";
import React from 'react'
import Link from "next/link";

const ServiceCities = () => {
  return (
    <>
  {/* Links Section */}
  <section className="section info-section">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="accordion accordion-links">
            <div
              className="accordion-item wow fadeInUp bg-transparent"
              data-wow-delay="0.2s"
            >
              <h2 className="accordion-header">
                <button
                  className="accordion-button bg-transparent px-0"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#professional"
                  aria-expanded="false"
                >
                  Our Professions Near You
                </button>
              </h2>
              <div
                id="professional"
                className="accordion-collapse collapse show"
              >
                <div className="accordion-body border-0 px-0">
                  <div className="row row-cols-xl-6 row-cols-md-4 row-cols-sm-2 row-cols-1">
                    <div className="col">
                      <div className="main-links">
                        <Link href="#">Appliance Repair</Link>
                        <Link href="#">Flooring</Link>
                        <Link href="#">Garage Doors</Link>
                        <Link href="#">Fencing</Link>
                      </div>
                    </div>
                    <div className="col">
                      <div className="main-links">
                        <Link href="#">Carpet Cleaning</Link>
                        <Link href="#">Driveways</Link>
                        <Link href="#">Gutter Cleaning</Link>
                        <Link href="#">Land Surveying</Link>
                      </div>
                    </div>
                    <div className="col">
                      <div className="main-links">
                        <Link href="#">Contractors</Link>
                        <Link href="#">Exterior Painting</Link>
                        <Link href="#">Gutter Repair</Link>
                        <Link href="#">Landscaping</Link>
                      </div>
                    </div>
                    <div className="col">
                      <div className="main-links">
                        <Link href="#">Drywall </Link>
                        <Link href="#">Plumbing</Link>
                        <Link href="#">Home Builders</Link>
                        <Link href="#">Lawn &amp; Yard Work</Link>
                      </div>
                    </div>
                    <div className="col">
                      <div className="main-links">
                        <Link href="#">
                          Electrical &amp; Services
                        </Link>
                        <Link href="#">Remodeling</Link>
                        <Link href="#">Home Builders</Link>
                        <Link href="#">Sprinkler Systems</Link>
                      </div>
                    </div>
                    <div className="col">
                      <div className="main-links">
                        <Link href="#">House Cleaning</Link>
                        <Link href="#">Interior Painting</Link>
                        <Link href="#">Roofing</Link>
                        <Link href="#">More Services</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="accordion-item mb-0 wow fadeInUp bg-transparent"
              data-wow-delay="0.2s"
            >
              <h2 className="accordion-header">
                <button
                  className="accordion-button bg-transparent px-0"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#city"
                  aria-expanded="false"
                >
                  Popular Cities
                </button>
              </h2>
              <div id="city" className="accordion-collapse collapse show">
                <div className="accordion-body border-0 px-0">
                  <div className="row row-cols-xl-6 row-cols-md-4 row-cols-sm-2 row-cols-1">
                    <div className="col">
                      <div className="main-links">
                        <Link href="#">Detroit</Link>
                        <Link href="#">Greensboro</Link>
                        <Link href="#">Kansas City</Link>
                        <Link href="#">Memphis</Link>
                      </div>
                    </div>
                    <div className="col">
                      <div className="main-links">
                        <Link href="#">El Paso</Link>
                        <Link href="#">Harrisburg</Link>
                        <Link href="#">Las Vegas</Link>
                        <Link href="#">Miami</Link>
                      </div>
                    </div>
                    <div className="col">
                      <div className="main-links">
                        <Link href="#">Fort Lauderdale</Link>
                        <Link href="#">Hartford</Link>
                        <Link href="#">Long Beach</Link>
                        <Link href="#">Milwaukee</Link>
                      </div>
                    </div>
                    <div className="col">
                      <div className="main-links">
                        <Link href="#">Fort Worth </Link>
                        <Link href="#">Houston</Link>
                        <Link href="#">Los Angeles</Link>
                        <Link href="#">Minneapolis</Link>
                      </div>
                    </div>
                    <div className="col">
                      <div className="main-links">
                        <Link href="#">Fresno</Link>
                        <Link href="#">Indianapolis</Link>
                        <Link href="#">Louisville</Link>
                        <Link href="#">Modesto</Link>
                      </div>
                    </div>
                    <div className="col">
                      <div className="main-links">
                        <Link href="#">Grand Rapids</Link>
                        <Link href="#">Jacksonville</Link>
                        <Link href="#">Madison</Link>
                        <Link href="#">Nashville</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* /Links Section */}
</>
  )
}

export default ServiceCities