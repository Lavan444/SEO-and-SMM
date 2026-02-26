import React, { useState } from "react";
import { FiCheck } from "react-icons/fi";

const ManualModal = ({ onClose }) => {
  const [urls, setUrls] = useState([
    "https://www.techsolutions.com/it-services",
    "https://www.techsolutions.com/it-services"
  ]);

  const [input, setInput] = useState("");

  const addUrl = () => {
    if (input.trim()) {
      setUrls([...urls, input]);
      setInput("");
    }
  };  

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5>Select Any Competitor</h5>
          <span className="badge bg-primary">
            {urls.length}/5 Selected
          </span>
        </div>

        {/* Input Section */}
        <div className="d-flex gap-2 mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Enter URL"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="btn btn-primary" onClick={addUrl}>
            ADD
          </button>
        </div>

        <h6>Manual Entered</h6>

        {urls.map((url, index) => (
          <div
            key={index}
            style={{
              padding: "10px 15px",
              borderRadius: "20px",
              border: "1px solid green",
              marginBottom: "10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: "#f6fffa",
            }}
          >
            <span>{url}</span>
            <FiCheck color="green" />
          </div>
        ))}

        {/* Footer */}
        <div className="d-flex justify-content-between mt-4">
          <button className="btn btn-outline-secondary" onClick={onClose}>
            Back
          </button>

          <button className="btn btn-dark">
            Get Core Analysis
          </button>
        </div>
      </div>
    </div>
  );
};

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0,0,0,0.4)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 999,
};

const modalStyle = {
  width: "80%",
  maxWidth: "1000px",
  background: "#fff",
  padding: "30px",
  borderRadius: "20px",
};

export default ManualModal;
