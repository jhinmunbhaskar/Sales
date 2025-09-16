import React, { useState, useEffect, useRef } from "react";
import "./chat.css";
import { FaHome, FaRegCommentDots } from "react-icons/fa";
import { MdMessage } from "react-icons/md";

function ChatModal({ onClose, defaultTab = "home" }) {
  const [visible, setVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(defaultTab);
  const chatContentRef = useRef(null);

  useEffect(() => {
    setActiveTab(defaultTab);
    setTimeout(() => {
      setVisible(true);
      chatContentRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  }, [defaultTab]);

  const recentMessages = [
    {
      sender: "Customer Support",
      text: "Welcome to Raibex Security Seals..!! Please let us know how we can help you.",
      time: "now",
    },
    {
      sender: "Unknown",
      text: "Submitted from : https://raibex.com/container",
      time: "21:49",
    },
  ];

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent!");
    setFormData({ name: "", email: "", message: "" });
    setActiveTab("messages");
  };

  return (
    <div className="modal-backdrop-custom">
      <div className={`chat-drawer ${visible ? "open" : ""}`}>
        {/* Header */}
        <div className="chat-header">
          <h5 className="m-0">
            {activeTab === "home"
              ? "Welcome"
              : activeTab === "messages"
              ? "Messages"
              : "New Message"}
          </h5>
          <button className="btn-close btn-close-white" onClick={onClose}></button>
        </div>

        {/* Content */}
        <div className="chat-content" ref={chatContentRef}>
          {activeTab === "home" && (
            <div className="welcome-box">
              <p><strong>Welcome to Raibex Security Seals..!!</strong></p>
              <p>Please type your Email ID and Mobile Number to start</p>
              <p>Live Chat with the next Available Customer Support Executive.</p>

              {/* Add this to jump to form */}
              <button
                className="btn btn-light btn-sm mt-3"
                onClick={() => setActiveTab("form")}
              >
                Start Chat
              </button>
            </div>
          )}

          {activeTab === "messages" && (
            <>
              <h6 className="mb-3">Recent</h6>
              {recentMessages.map((msg, idx) => (
                <div
                  key={idx}
                  className="message-item"
                  onClick={() => setActiveTab("form")}
                >
                  <div className="d-flex justify-content-between">
                    <strong>{msg.sender}</strong>
                    <small>{msg.time}</small>
                  </div>
                  <div className="text-muted small text-truncate">{msg.text}</div>
                </div>
              ))}
            </>
          )}

          {activeTab === "form" && (
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">* Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">* Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">* Message</label>
                <textarea
                  className="form-control"
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-100">
                <i className="fas fa-paper-plane me-2"></i> Submit
              </button>
            </form>
          )}
        </div>

        {/* Bottom Navigation */}
        <div className="chat-bottom-nav">
          <button onClick={() => setActiveTab("home")}>
            <FaHome
              className={`fa-lg homeicon ${
                activeTab === "home" ? "text-primary" : "text-muted"
              }`}
            />
          </button>

          <button onClick={() => setActiveTab("messages")}>
            <MdMessage
              className={`fa-lg homeicon ${
                activeTab === "messages" ? "text-primary" : "text-muted"
              }`}
            />
          </button>

          <button onClick={() => setActiveTab("form")}>
            <FaRegCommentDots
              className={`fa-lg homeicon ${
                activeTab === "form" ? "text-primary" : "text-muted"
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatModal;
