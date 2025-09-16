import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    comment: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Submitted: " + JSON.stringify(formData));
  };

  return (
    <div className="container my-5">
      <div className="row g-4">
        {/* Left Panel */}
        <div className="col-md-6">
          <h2>CONTACT US</h2>
          <p>
            <strong>ADDRESS:</strong>
            <br />
            Basement Floor, At-110, Main Market Road, Sultanpur, Near Peer Baba,
            <br />
            New Delhi - 110030, INDIA.
            <br />
            <strong>GST TIN:</strong> 07BKWPM4815J1ZJ
          </p>
          <p>
            <strong>Sales Email:</strong>{" "}
            sarvlaxmi2019@gmail.com,otlseals@gmail.com
          </p>
          <p>
            <strong>Sales Phone / WhatsApp:</strong> +91-955-5541-415
          </p>
        </div>

        {/* Right Panel - Form */}
        <div className="col-md-6">
          <h3 className="mb-3">Request for a Call Back</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                NAME <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-1">
              <label className="form-label">Landing No.</label>
              <input
                className="form-control"
                type="text"
                name="landingNo"
                value={formData.landingNo}
                onChange={handleChange}
                required
              />
              <small className="text-muted">
                Please prefix 0 before landing no.
              </small>
            </div>
            <div className="mb-3">
              <label htmlFor="mobile" className="form-label">
                MOBILE NO <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="tel"
                className="form-control"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                EMAIL ID
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Extension</label>
              <input
                className="form-control"
                type="text"
                name="extension"
                value={formData.extension}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="comment" className="form-label">
                COMMENT
              </label>
              <textarea
                className="form-control"
                id="comment"
                name="comment"
                rows="4"
                value={formData.comment}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-primary px-4">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
