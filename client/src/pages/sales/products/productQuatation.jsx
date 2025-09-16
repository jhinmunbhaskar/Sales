import React from "react";
import { useState } from "react";
import { FaCheckCircle   } from "react-icons/fa";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import "../../../index.css"
export default function productQuatation() {
  const products = [
    { id: "RX-C102", img: "/productimg/camara.jpg" },
    { id: "RX-C103", img: "/productimg/bolt-seal.jpeg" },
    { id: "RX-A101", img: "/productimg/rope-wire-seal.jpg" },
    { id: "RX-M102", img: "/productimg/roto-seal-twist-type-meter-seal.webp" },
    { id: "RX-PB101", img: "/productimg/cable-seal.jpg" },
    { id: "RX-PD102", img: "/productimg/plastic-seal.jpg" },
    { id: "RX-PD102", img: "/productimg/plastic-seal.jpg" },
  ];

  const [selected, setSelected] = useState(null);

  const handleSelect = (id) => {
    setSelected(id); // only one seal selected
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const data = {
      seal: selected,
      quantity: formData.get("quantity"),
      colour: formData.get("colour"),
      customization: formData.get("customization"),
      location: formData.get("location"),
      name: formData.get("name"),
      company: formData.get("company"),
      mobile: formData.get("mobile"),
      whatsapp: formData.get("whatsapp"),
      email: formData.get("email"),
    };

    console.log("Form Submitted:", data);
    // TODO: send `data` to backend API
  };
  return (
    <>
      <div className="container align-content-center align-items-center w-75 py-3">
     <section className="p-3 thick-border ">
        <div className="text-center mb-4">
         <button className="btn-md w-50  align-items-center justify-content-center btn-arrow">
    QUOTE REQUEST - OFFLINE BULK ORDER
    <FaArrowRightArrowLeft  className="ms-2" />
  </button>
        </div>

        {/* Product Grid */}
        <div className="container mb-4">
          <label className="fw-bold mb-3">SELECT THE SEAL <span className="starcolor">*</span></label>
          <div className="row">
            {products.map((p, index) => (
              <div className="col-6 col-md-3 mb-4" key={index}>
                <div
                  className={`border rounded p-2 shadow-sm position-relative ${
                    selected === p.id ? "border-success shadow-lg" : ""
                  }`}
                  onClick={() => handleSelect(p.id)}
                  style={{ cursor: "pointer" }}
                >
                  <img src={p.img} alt={p.id} className="img-fluid mb-2" />
                  <p className="small fw-bold">{p.id}</p>

                  {selected === p.id && (
                    <FaCheckCircle
                      className="text-success position-absolute bg-white rounded-circle"
                      style={{ top: "10px", right: "10px", fontSize: "20px" }}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="container py-3">
          <div className="row">
            <div className="col-md-9">
              <form
                className="shadow p-4 rounded bg-white"
                onSubmit={handleSubmit}
              >
                <div className="mb-3">
                  <label className="form-label">Quantity Range<span className="starcolor">*</span></label>
                  <select name="quantity" className="form-select" required>
                    <option value="">Select Quantity</option>
                    <option value="100-500">100 - 500</option>
                    <option value="500-1000">500 - 1000</option>
                    <option value="1000+">1000+</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label">Seal Colour</label>
                  <select name="colour" className="form-select">
                    <option value="">Select Colour</option>
                    <option value="Red">Red</option>
                    <option value="Blue">Blue</option>
                    <option value="Yellow">Yellow</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Customization / Printing?
                  </label>
                  <input
                    type="text"
                    name="customization"
                    className="form-control"
                    placeholder="Enter details"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Delivery Location</label>
                  <input type="text" name="location" className="form-control" />
                </div>

                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input type="text" name="name" className="form-control" />
                </div>

                <div className="mb-3">
                  <label className="form-label">Company Name</label>
                  <input type="text" name="company" className="form-control" />
                </div>

                <div className="mb-3">
                  <label className="form-label">Mobile Number</label>
                  <input type="tel" name="mobile" className="form-control" />
                </div>

                <div className="mb-3">
                  <label className="form-label">WhatsApp Number</label>
                  <input type="tel" name="whatsapp" className="form-control" />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email ID <span className="starcolor">*</span></label>
                  <input type="email" name="email" className="form-control" />
                  <span>PLEASE TYPE YOUR DOMAIN EMAIL ID TO GET REQUIRED INFORMATION OR TO AVOID SPAM / JUNK EMAIL.</span>
                </div>

                <button type="submit" className="btn btn-primary align-items-center">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
