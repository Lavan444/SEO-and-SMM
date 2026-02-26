import React from "react";
import { FiExternalLink } from "react-icons/fi";

const cardStyle = {
  background: "#ffffff",
  borderRadius: "16px",
  padding: "20px",
  boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
  minHeight: "280px",
};

const listItemStyle = {
  background: "#f3f5f7",
  padding: "10px 14px",
  borderRadius: "8px",
  marginBottom: "10px",
};

const LinksCrawlabilityTab = () => {
  return (
    <div>
      {/* HEADER */}
      <div className="mb-4">
        <h5 className="fw-semibold">Links & Crawlability</h5>
        <p className="text-muted mb-0">
          In-depth analysis of your site's link profile and bot accessibility.
        </p>
      </div>

      {/* TOP CARDS */}
      <div className="row mb-4">
        {/* Broken Links Card */}
        <div className="col-md-6 mb-4">
          <div style={cardStyle}>
            <div className="d-flex align-items-center mb-3 border-bottom pb-2">
              <div className="me-2">🔗</div>
              <h6 className="mb-0">Broken Links (404)</h6>
            </div>

            <table className="table table-borderless">
              <thead>
                <tr className="text-muted">
                  <th>Source URL</th>
                  <th>Target URL</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>/blog/post-one</td>
                  <td>/old-resource</td>
                  <td className="text-danger">404</td>
                </tr>
                <tr>
                  <td>/about</td>
                  <td>/team/john-doe</td>
                  <td className="text-danger">404</td>
                </tr>
                <tr>
                  <td>/services</td>
                  <td>/downloads/brochure.pdf</td>
                  <td className="text-danger">404</td>
                </tr>
              </tbody>
            </table>

            <small className="text-muted">✨ Ai Generated Results</small>
          </div>
        </div>

        {/* Backlink Audit Card */}
        <div className="col-md-6 mb-4">
          <div style={cardStyle}>
            <div className="d-flex align-items-center mb-3">
              <FiExternalLink className="me-2" />
              <h6 className="mb-0">Backlink Audit</h6>
            </div>

            <div className="d-flex justify-content-between mb-2">
              <span>Total Backlinks</span>
              <span className="fw-semibold">12,450</span>
            </div>

            <div className="d-flex justify-content-between mb-2">
              <span>Domain Authority</span>
              <span className="fw-semibold">64/100</span>
            </div>

            <div className="d-flex justify-content-between mb-3">
              <span>Referring Domains</span>
              <span className="fw-semibold">1,120</span>
            </div>

            <div className="text-end">
              <button className="btn btn-link p-0">
                Export Full Profile
              </button>
            </div>

            <small className="text-muted d-block mt-3">
              ✨ Ai Generated Results
            </small>
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="row">
        {/* Broken Links Report */}
        <div className="col-md-6 mb-4">
            <h6 className="mb-3">Broken Links Report</h6>
          <div style={cardStyle}>

            {[
              "https://www.instagram.com/codexoncorp",
              "tel://+1%20943-238-5760",
              "mailto:info@codexoncorp.com",
              "https://www.linkedin.com/company/codexoncorp",
              "tel://+1%20987-654-3210",
              "mailto:support@codexoncorp.com",
            ].map((item, index) => (
              <div
                key={index}
                style={listItemStyle}
                className="d-flex align-items-center"
              >
                <span className="text-danger me-2">●</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recommendations */}
        <div className="col-md-6 mb-4">
            <h6 className="mb-3">Recommendations</h6>
          <div style={cardStyle}>

            {[
              "Check the Instagram link for correctness.",
              "Replace or update the Instagram link if unavailable.",
              "Fix or ignore tel links.",
              "Fix or ignore mailto links.",
              "Update or remove any links returning errors.",
              "Recheck the site after making changes.",
            ].map((item, index) => (
              <div
                key={index}
                style={listItemStyle}
                className="d-flex justify-content-between align-items-center"
              >
                <div>
                  <span className="text-danger me-2">●</span>
                  {item}
                </div>
                <button className="btn btn-link p-0">
                  View Fix →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinksCrawlabilityTab;
