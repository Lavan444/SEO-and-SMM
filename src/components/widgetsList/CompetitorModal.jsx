import React, { useState } from "react";
import { FiCheck } from "react-icons/fi";

const aiSuggestions = [
  "https://www.techsolutions.com/it-services",
  "https://www.digitalconsulting.com/it-support",
  "https://www.innovativeit.com/consulting",
  "https://www.smarttech.com/it-advisory",
  "https://www.premierit.com/consulting-services",
];

const llmSuggestions = [
  "https://www.techsolutions.com/it-services",
  "https://www.digitalconsulting.com/it-services",
  "https://www.innovativeit.com/consulting",
  "https://www.smarttechconsultants.com/it-help",
  "https://www.premierservices.com/consulting",
];

const CompetitorModal = ({  onClose, onContinue  }) => {
  const [selected, setSelected] = useState([]);

  const toggleSelect = (item) => {
    if (selected.includes(item)) {
      setSelected(selected.filter((i) => i !== item));
    } else {
      if (selected.length < 5) {
        setSelected([...selected, item]);
      }
    }
  };

  return (
    
    <div style={overlayStyle}>
      <div style={modalStyle}>
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h5>Select Any Competitor</h5>

          <div className="d-flex align-items-center">
            <span className="compitetor-chip me-3">
              {selected.length}/5 Selected
            </span>
           <button
              className="btn btn-light btn-sm"
              // onClick={onEdit}
            >
              ✏️
            </button> 
          </div>

        </div>

        <div className="row">
          {/* AI Column */}
          <div className="col-md-6">
            <h6>AI Suggestion Competitor</h6>
            {aiSuggestions.map((item, index) => (
              <SelectableItem
                key={index}
                item={item}
                selected={selected.includes(item)}
                onClick={() => toggleSelect(item)}
              />
            ))}
          </div>

          {/* LLM Column */}
          <div className="col-md-6">
            <h6>LLM Suggestions</h6>
            {llmSuggestions.map((item, index) => (
              <SelectableItem
                key={index}
                item={item}
                selected={selected.includes(item)}
                onClick={() => toggleSelect(item)}
              />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="d-flex justify-content-between mt-4">
          <button className="btn btn-outline-secondary" onClick={onClose}>
            Back
          </button>

          <button
            className="btn btn-dark"
            onClick={() => {
              console.log("Continue clicked");
              if (onContinue) {
                onContinue();
              } else {
                console.log("onContinue is undefined");
              }
            }}
          >
            Get Core Analysis →
          </button>


        </div>
      </div>
    </div>
  );
};

const SelectableItem = ({ item, selected, onClick }) => (
  <div
    onClick={onClick}
    style={{
      padding: "10px 15px",
      borderRadius: "10px",
      marginBottom: "10px",
      cursor: "pointer",
      border: selected ? "1px solid green" : "1px solid #e0e0e0",
      background: selected ? "#f0fff4" : "#f9f9f9",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <span style={{ fontSize: "14px" }}>{item}</span>
    {selected && <FiCheck color="green" />}
  </div>
);

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
  maxHeight: "90vh",
  overflowY: "auto",
};

export default CompetitorModal;
