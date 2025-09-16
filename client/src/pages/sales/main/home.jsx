import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import "../../../index.css";
import banner from "/productimg/Container-Seal.svg";

const products = [
  {
    title: "Container Seal",
    img: "productimg/CONTAINER-SEAL-2.jpg",
    desc: "The container seals are mechanism used to seal shipping containers in a way that provides tamper evidence and some level of security.",
  },
  {
    title: "Wire Seal",
    img: "/productimg/wire-seal.jpg",
    desc: "Wire seals allow for more versatile application, as they have variable length of the locking mechanism limited only by the cable length.",
  },
  {
    title: "Padlock Seal",
    img: "/productimg/padlock-seal.jpg",
    desc: "Padlock Seals are used for informal transport: smaller container Door locking, Shutter locking, Trolley locking etc.",
  },
  {
    title: "Meter Seal",
    img: "/productimg/meter-seal.jpg",
    desc: "Meter seals or Polycarbonate seal (PC) used at Electric Meter Sealing, Mining Transport locking, Oil Drum Sealing etc.",
  },
  {
    title: "Plastic Seal",
    img: "/productimg/plastic-seal.jpg",
    desc: "Plastic Seal (T) is used at Courier Bags, Postal Bags, Chemical Packets, Supermarket, Drum Locking etc.",
  },
  {
    title: "Cable Seal",
    img: "/productimg/cable-seal.jpg",
    desc: "Cable Seal is used at Oil Drum Locking, Wagon Locking, Tank Locking, Chemical container & drum locking etc.",
  },
  {
    title: "Rope Wire Seal",
    img: "/productimg/roto-seal-twist-type-meter-seal.webp",
    desc: "The wire seal is mainly used at Oil Drum Locking, Oil Tanker Locking, Chemical Barrel Locking, Liquid drum locking etc.",
  },
  {
    title: "Meter Roto Seal",
    img: "/productimg/rope-wire-seal.jpg",
    desc: "Meter Padmeter seals used in export oil drums, storage tanks, truck panels, meter locking, chemical drum locking etc.",
  },
  {
    title: "Bolt Seal",
    img: "/productimg/bolt-seal.jpeg",
    desc: "Container Bolt Seal is used in locking containers, wagon locking, door locking, train door locking etc.",
  },
];

export default function Home() {
  return (
    <>
      <section className="position-relative text-center my-3">
        {/* Background Image */}
        <img
          src={banner}
          alt="Transport"
          className="img-fluid w-100 rounded banner-img"
        />

        {/* Overlay Content */}
        <div className="position-absolute top-0 start-50 translate-middle-x w-100 h-100 d-flex flex-column justify-content-between">
          {/* Top Heading */}
          <h2 className="fw-bold text-primary mt-3 fs-4 fs-md-2">
            SINGLE-USE LOCK WITH MAXIMUM SECURITY
          </h2>

          {/* Subtext (red box) */}
          <div className="banner-subtext rounded-pill px-3 py-1 mb-4 d-inline-block mx-auto fw-semibold small">
            PROTECTING YOUR CONSIGNMENTS FROM THEFT AND PIRACY
          </div>
          {/* Bottom Heading */}
          <h3 className="fw-bold text-primary mb-3 fs-5 fs-md-3">
            Sarv Laxmi Sales Corporation
          </h3>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-5 bg-light text-center">
        <div className="container">
          <p className="text-muted mb-5">
            Founded in 2018, Sarv Laxmi Sales Corporation is a leading
            Manufacturer, Wholesaler, and Retailer of premium quality security
            seals and locks. With a commitment to innovation, durability, and
            customer trust, we serve clients across India and the globe.
          </p>

          <div className="row">
            {products.map((product, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card h-100 shadow-sm border-0">
                  <div className="round-img-product-homepage">
                    <img
                      src={product.img}
                      alt={product.title}
                      className="card-img-top p-3"
                      style={{ height: "120px", objectFit: "contain" }}
                    />
                  </div>

                  <div className="card-body">
                    <h5 className="card-title text-primary">{product.title}</h5>
                    <p className="card-text text-muted">{product.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
        {/* <section className="bg-light text-black text-center py-5"> */}
        <section className="bg-light text-black p-5 rounded mb-5">
          <div className="container">
            <div className="row align-items-center bg-secondary text-white p-5 rounded mb-5">
              {/* Left Column */}
              <div className="col-lg-8 text-start">
                <h2>Would you like to place a purchase order with us?</h2>
                <p>
                  Or do you have any question about our business, or want to see
                  if we match your specific needs?
                </p>
                <p>We strive to stay in communication with our clients.</p>
                <p>
                  Send us a message, or give us a call. We're always happy to
                  meet new customers!
                </p>
              </div>

              {/* Right Column */}
              <div className="col-lg-4 text-center mt-4 mt-lg-0">
                <div className="d-flex flex-column gap-3">
                  <button className="btn btn-light btn-lg w-75 mx-auto  text-primary fw-bold">
                    +91-9555541415
                  </button>
                  <button className="btn btn-light btn-lg w-75 mx-auto text-primary fw-bold">
                    ORDER ONLINE
                  </button>
                  <button className="btn btn-light btn-lg w-75 mx-auto  text-primary fw-bold">
                    ORDER OFFLINE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      {/* Follow Us Section */}
      <section className="py-4 bg-light">
        <div className="container py-4">
          <div className="row justify-content-center align-items-center">
            {/* Left: Follow Us text */}
            <div className="col-md-3 text-center text-md-start mb-3 mb-md-0">
              <h4 className="text-dark mb-0 cursive-text">Follow Us</h4>
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
      </section>
    </>
  );
}
