import React from "react";
import { FiAward } from "react-icons/fi";

const cardStyle = {
  background: "#ffffff",
  borderRadius: "14px",
  padding: "18px 20px",
  boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
};

const SeoAuditOptimization = () => {
  return (
    <div className="container-fluid py-2">
      {/* HEADER */}
      <div className="mb-4">
        <div className="d-flex align-items-center gap-2 mb-2">
          <div
            style={{
              background: "#ffffff",
              borderRadius: "10px",
              padding: "8px",
                boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
            }}
          >
            <FiAward size={18} />
          </div>
          <h5 className="fw-semibold mb-0">Keyword Rankings</h5>
        </div>

        <p className="text-muted mb-0" style={{ maxWidth: "900px" }}>
          This shows the top 10 Keywords driving traffic from Google Organic
          Searches. The list is ordered by the keywords that drive the most
          traffic to your page (have the highest Estimated Traffic Volume).
        </p>
      </div>

      {/* KEYWORD TITLE */}
      <h6 className="fw-semibold mb-3">g corp consulting</h6>

      {/* TOP METRIC CARDS */}
      <div className="row g-3 mb-4">
        {[
          "Position 89",
          "50 searches/month",
          "0 estimated traffic",
          "US EN",
        ].map((item, index) => (
          <div key={index} className="col-12 col-sm-6 col-lg-3">
            <div style={cardStyle} className="text-center text-sm-start">
              {item}
            </div>
          </div>
        ))}
      </div>

      {/* POSITION DISTRIBUTION */}
      <div className="mb-4">
        <h6 className="fw-semibold">Position Distribution</h6>
        <p className="text-muted" style={{ maxWidth: "900px" }}>
          This shows you a summary of the positions for your Organic Keyword
          Rankings. The higher you rank, the more likely you are to capture
          traffic, with recent research showing that as much as 92% of clicks
          happen on the first page.
        </p>

        <div className="row g-3">
          {[
            { title: "Position 1", value: "0 keywords" },
            { title: "Position 2-3", value: "0 keywords" },
            { title: "Position 4-10", value: "0 keywords" },
            { title: "Position 11-20", value: "0 keywords" },
            { title: "Position 21-30", value: "0 keywords" },
            { title: "Position 31-100", value: "1 keywords" },
          ].map((item, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-2">
              <div style={cardStyle}>
                <div className="fw-medium">{item.title}</div>
                <div className="text-muted">{item.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* TOTAL SEARCH TRAFFIC */}
      <div>
        <h6 className="fw-semibold">Total Search Traffic</h6>
        <p className="text-muted" style={{ maxWidth: "900px" }}>
          This shows you a summary of the positions for your Organic Keyword
          Rankings. The higher you rank, the more likely you are to capture
          traffic, with recent research showing that as much as 92% of clicks
          happen on the first page.
        </p>
      </div>
    </div>
  );
};

export default SeoAuditOptimization;
