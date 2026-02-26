import React from "react";
import { FiChevronRight } from "react-icons/fi";

const cardStyle = {
  background: "#ffffff",
  borderRadius: "16px",
  padding: "20px",
  boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
};

const itemStyle = {
  background: "#f3f5f7",
  padding: "14px 18px",
  borderRadius: "10px",
  marginBottom: "14px",
};

const TopRecommendationsTab = () => {
  const recommendations = [
    {
      title: "Execute a Link Building Strategy",
      category: "Links",
      color: "#dc3545", // red
    },
    {
      title: "Add a DMARC Mail Record",
      category: "TECHNOLOGY",
      color: "#dc3545",
    },
    {
      title: "Add Local Business Schema",
      category: "LOCALSEO",
      color: "#f59e0b", // orange
    },
    {
      title: "Increase Page Text Content",
      category: "SEO",
      color: "#dc3545",
    },
    {
      title: "Install a Facebook Pixel",
      category: "SOCIAL",
      color: "#16a34a", // green
    },
  ];

  return (
    <div>
      {/* HEADER */}
      <div className="mb-4">
        <h5 className="fw-semibold">Top Recommendations</h5>
        <p className="text-muted mb-0">
          In-depth analysis of your site's link profile and bot accessibility.
        </p>
      </div>

      {/* CARD */}
      <div style={cardStyle}>
        {recommendations.map((item, index) => (
          <div
            key={index}
            style={itemStyle}
            className="d-flex justify-content-between align-items-center"
          >
            {/* LEFT SIDE */}
            <div className="d-flex align-items-start">
              {/* Status Dot */}
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: item.color,
                  marginRight: "12px",
                  marginTop: "6px",
                }}
              ></span>

              {/* Text Content */}
              <div>
                <div className="fw-medium">
                  {item.title}
                </div>
                <small className="text-muted text-uppercase">
                  {item.category}
                </small>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <button className="btn btn-link d-flex align-items-center gap-1 p-0">
              View Fix
              <FiChevronRight size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRecommendationsTab;
