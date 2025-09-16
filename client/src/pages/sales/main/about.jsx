import React, { useState } from "react";
import { GiCow   } from "react-icons/gi";
import {
  FaPaintBrush,
  FaCode,
  FaHospital ,
  FaTruckMoving ,
  FaBullhorn,
  FaShoppingCart,
  FaUsers,
  FaHeadset,
  FaGlobe,
  FaIndustry,
  FaShieldAlt,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import MapComponent from "./MapComponent";
import "../../../index.css";
const accordionData = [
  {
    title: "Best Quality Seals",
    content: "We provide high quality seals meeting international standards.",
  },
  {
    title: "ISO 9001-2015 Quality Control System",
    content: "All our products are certified under ISO 9001-2015.",
  },
  {
    title: "24x7 Live Support",
    content: "Our support team is available round the clock.",
  },
  {
    title: "Customised Design",
    content: "We design seals as per buyers' requirements.",
  },
  {
    title: "Bar-code & QR Code Printing Option",
    content:
      "Clients can get seals with unique serial numbers via Barcode and QR code.",
  },
  {
    title: "Easy Payment Option",
    content: "Multiple payment options for buyer convenience.",
  },
  {
    title: "On-Time Delivery",
    content: "We ensure safe and timely delivery of all orders.",
  },
];

export default function About() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      {/* About Us Section */}
      <section className="py-5" style={{ background: "#b6baba",color: "#ffff" }}>
        <div className="container">
          <div className="mb-5">
            <h2 className="mb-3 text-center">About Us</h2>
            <p>
              At{" "}
              <strong className="text-white">
                Sarv Laxmi Sales Corporation
              </strong>
              , we believe security is not just a product—it’s a promise. Since
              our inception in
              <strong> 2018 </strong>, we have been delivering world-class sealing
              and locking solutions tailored to diverse industries such as
              logistics, transport, warehousing, and shipping.
            </p>
            <p>
              We are built on strong values of{" "}
              <strong>quality, ethics, and innovation</strong>, ensuring every
              product meets the highest industry benchmarks. Our dedication to
              customer satisfaction has helped us gain trust worldwide, and we
              continue to evolve with technology and market needs.
            </p>

            {/* <!-- Core Values --> */}
            <h5 className="mt-3 font-weight-bold text-white">Our Core Values:</h5>
            <ul className="list-unstyled pl-3">
              <li>✔ Commitment to Quality</li>
              <li>✔ Customer-Centric Approach</li>
              <li>✔ Reliability and Trust</li>
              <li>✔ Innovation and Continuous Improvement</li>
            </ul>

            {/* <!-- Mission & Vision --> */}
            {/* <h5 class="mt-4 font-weight-bold text-dark">
              Our Mission & Vision
            </h5>
            <p>
              <strong>Mission:</strong> To provide innovative, durable, and
              affordable sealing solutions that safeguard assets and ensure
              peace of mind.
            </p>
            <p>
              <strong>Vision:</strong> To be recognized globally as a pioneer in
              security sealing products, setting new benchmarks in quality and
              customer trust.
            </p> */}

          </div>
          </div>
         
          </section>
           {/* Info Cards */}
          <section >
            <div className="container py-5">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 shadow">
                <div className="card-body">
                  <h5 className="card-title text-center">Who Are We</h5>
                  <p className="card-text">
                    Founded in 2018, Sarv Laxmi Sales Corporation is a leading
                    Manufacturer, Wholesaler, and Retailer of premium quality
                    security seals and locks. With a commitment to innovation,
                    durability, and customer trust, we serve clients across
                    India and the globe.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow">
                <div className="card-body">
                  <h5 className="card-title text-center">Our Mission</h5>
                  <p className="card-text">
                    To provide innovative, durable, and affordable sealing
                    solutions that safeguard assets and ensure peace of mind. To
                    be recognized globally as a pioneer in security sealing
                    products, setting new benchmarks in quality and customer
                    trust.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow">
                <div className="card-body">
                  <h5 className="card-title text-center">What We Do</h5>
                  <p className="card-text">
                    We offer a wide range of high-performance security seals
                    designed to prevent tampering, theft, and unauthorized
                    access.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-5 " style={{ background: "#f1f2f0",color: "#000" }}>
        <div className="container">
          <h2 className="mb-4 text-center">Our History</h2>
          <p>
            A security seal is a broader term that refers to any device –
            whether plastic, metal, or a combination – used to secure goods,
            vehicles, containers, or equipment against tampering or unauthorized
            access. Security seals serve both as a deterrent and as proof of
            interference, since they must be broken to open, leaving visible
            evidence.
          </p>
          <p>
            Security seals are commonly used in shipping, transport, aviation,
            energy, retail, and banking. They can be categorized by their
            security level: Indicative Seals (e.g., plastic seals, padlock
            seals) – for basic tamper evidence
          </p>
          <p>
            Intermediate Security Seals (e.g., wire seals, cable seals) – for
            stronger protection.
          </p>
          <p>
            High-Security Seals (e.g., bolt seals) – ISO 17712 compliant, used
            in international shipping.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Our Features</h2>
          <div className="row g-4 text-center">
            <div className="col-md-4">
              <div className="card h-100 shadow border-0">
                <div className="card-body">
                  <FaIndustry className="mb-3 fs-1 text-info" />
                  <h5>Manufacturing</h5>
                  <p>
                    We offer a wide range of customized designs as per buyers'
                    business requirements.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow border-0">
                <div className="card-body">
                  <FaTruckMoving  className="mb-3 fs-1 text-info" />
                  <h5>logistics & supply chain</h5>
                  <p>
                    Our R&D team develops highly secure seals with maximum cost
                    effectiveness.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow border-0">
                <div className="card-body">
                  <FaShoppingCart className="mb-3 fs-1 text-info" />
                  <h5>E-Commerce</h5>
                  <p>
                    Our professional team ensures the seals match customer needs
                    and requirements.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow border-0">
                <div className="card-body">
                  <GiCow    className="mb-3 fs-1 text-info" />
                  <h5>Dairy Industry</h5>
                  <p>
                    We provide the latest updates through social media and
                    communication systems.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow border-0">
                <div className="card-body">
                  <FaHospital  className="mb-3 fs-1 text-info" />
                  <h5>Healthcare & Pharmaceuticals</h5>
                  <p>
                    Our products are available on major eCommerce and B2B
                    platforms worldwide.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow border-0">
                <div className="card-body">
                  <FaHeadset className="mb-3 fs-1 text-info" />
                  <h5>Help & Support</h5>
                  <p>
                    Our in-house support team is available 24x7 to assist
                    customers worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-5"style={{ background: "#f1f2f0",color: "#000" }}>
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-md-6">
              <img
                src="/sarvlaxmi.jpg"
                alt="Team Meeting"
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-md-6">
              <h2 className="mb-4">Why Choose Us?</h2>
              <div className="accordion" id="chooseUsAccordion" >
                {accordionData.map((item, index) => (
                  <div className="accordion-item" key={index} style={{ background: "#f1f2f0",color: "#000" }}>
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button ${
                          activeIndex === index ? "" : "collapsed"
                        }`}
                        type="button"
                        onClick={() => toggleAccordion(index)}
                      >
                        {item.title}
                      </button>
                    </h2>
                    <div
                      className={`accordion-collapse collapse ${
                        activeIndex === index ? "show" : ""
                      }`}
                    >
                      <div className="accordion-body" >{item.content}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats + CTA + Social + Video/Map */}
      <section className="bg-white text-dark">
        <div className="container">
          {/* Stats Section */}
          <div className="row text-center mb-5">
            <div className="col-md-3 col-6 mb-4">
              <FaShieldAlt className="text-primary fs-1 mb-2" />
              <h2 className="fw-bold">46</h2>
              <p>Varieties of Security Seals</p>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <FaUsers className="text-success fs-1 mb-2" />
              <h2 className="fw-bold">6,624+</h2>
              <p>Happy Clients</p>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <FaGlobe className="text-primary fs-1 mb-2" />
              <h2 className="fw-bold">136+</h2>
              <p>Global Delivery Hubs</p>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <FaIndustry className="text-warning fs-1 mb-2" />
              <h2 className="fw-bold">124M+</h2>
              <p>Production Capacity</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-secondary text-white p-5 rounded mb-5">
            <div className="container">
              <div className="row align-items-center">
                {/* Left: Text */}
                <div className="col-md-8 text-center text-md-start mb-3 mb-md-0">
                  <h3 className="mb-3">
                    Would you like to place a purchase order with us?
                  </h3>
                  <p className="mb-0">
                    We strive to stay in communication with our clients. Have a
                    question about our business, or want to see if we match your
                    specific needs? Send us a message, or give us a call.
                  </p>
                </div>

                {/* Right: Button */}
                <div className="col-md-4 text-center text-md-end">
                  <a
                    href="tel:+9195555 41415"
                    className="btn btn-light fw-bold px-4 py-2"
                  >
                    +91-95555 41415
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="container py-4">
            <div className="row justify-content-center align-items-center">
              {/* Left: Follow Us text */}
              <div className="col-md-3 text-center text-md-start mb-3 mb-md-0">
                <h4
                  className="text-dark mb-0 cursive-text"
                >
                  Follow Us
                </h4>
              </div>

              {/* Right: Social icons */}
              <div className="col-md-3 d-flex justify-content-center justify-content-md-start">
                <div className="d-flex gap-3 fs-4">
                  <a href="#" className="social-icon facebook">
                    <FaFacebook />
                  </a>
                  <a href="#" className="social-icon twitter">
                    <FaTwitter />
                  </a>
                  <a href="#" className="social-icon linkedin">
                    <FaLinkedin />
                  </a>
                  <a href="#" className="social-icon whatsapp">
                    <FaWhatsapp />
                  </a>
                  <a href="#" className="social-icon youtube">
                    <FaYoutube />
                  </a>
                  <a href="#" className="social-icon instagram">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Video & Map */}
          <div className="row g-4 py-4">
            <div className="col-md-6">
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.youtube.com/embed/U-M1oep7kjI"
                  title="Company Video"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="col-md-6">
              <div className="ratio ratio-16x9">
                <MapComponent />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
