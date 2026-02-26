import React from "react";

/* ---------------- STATUS ICON ---------------- */

const StatusIcon = ({ status }) => {
  if (status === "success") {
    return <span className="text-success fw-bold">✔</span>;
  }

  if (status === "warning") {
    return <span className="text-warning fw-bold">⚠</span>;
  }

  return <span className="text-danger fw-bold">✖</span>;
};

/* ---------------- STYLES ---------------- */

const cardStyle = {
  background: "#ffffff",
  padding: "20px",
  borderRadius: "16px",
  boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
};

const innerFileCard = {
  background: "#f8f9fa",
  padding: "16px",
  borderRadius: "12px",
};

/* ---------------- MAIN COMPONENT ---------------- */

const TechnicalChecks = () => {
  const checkSections = [
    {
      title: "Security & HTTPS",
      items: [
        { label: "SSL Certificate Valid", status: "success" },
        { label: "TLS 1.3 Support", status: "success" },
        { label: "HSTS Configuration", status: "warning" },
      ],
    },
    {
      title: "International SEO",
      items: [
        { label: "Hreflang Tags Present", status: "success" },
        { label: "Region-Specific Redirects", status: "success" },
        { label: "Language Codes Correct", status: "success" },
      ],
    },
    {
      title: "Schema & Tags",
      items: [
        { label: "Canonical Tags Implemented", status: "success" },
        { label: "JSON-LD Schema Found", status: "success" },
        { label: "OpenGraph & Twitter Cards", status: "success" },
      ],
    },
    {
      title: "Mobile Optimization",
      items: [
        { label: "Viewport Meta Tag", status: "success" },
        { label: "Touch Target Sizes", status: "success" },
        { label: "Legible Font Sizes", status: "warning" },
      ],
    },
  ];

  const essentialFiles = [
    {
      title: "Robots.txt",
      status: "Passed",
      type: "success",
      description:
        "Properly configured. Sitemap reference found and syntax is valid.",
    },
    {
      title: "Sitemap.xml",
      status: "Warning",
      type: "warning",
      description:
        "Sitemap exists but contains 12 URLs that redirect (301).",
    },
    {
      title: "Crawlability",
      status: "Critical",
      type: "danger",
      description:
        "File not found. AI crawlers may not efficiently index your documentation.",
    },
  ];

  return (
    <div className="p-4">
      <h5 className="fw-bold mb-1">Technical Checks</h5>
      <p className="text-muted mb-4">
        Verification of core technical SEO elements across your domain.
      </p>

      {/* ---------------- TOP GRID ---------------- */}
      <div className="row">
        {checkSections.map((section, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div style={cardStyle}>
              <h6 className="fw-semibold mb-3">{section.title}</h6>

              {section.items.map((item, i) => (
                <div
                  key={i}
                  className="d-flex justify-content-between align-items-center mb-2"
                >
                  <span className="text-muted">{item.label}</span>
                  <StatusIcon status={item.status} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ---------------- ESSENTIAL FILES ---------------- */}
      <div style={cardStyle}>
        <h6 className="fw-semibold mb-3">
          Essential Files Audit (Robots, Sitemaps, LLMs)
        </h6>

        <div className="row">
          {essentialFiles.map((file, index) => (
            <div className="col-md-4 mb-3" key={index}>
              <div style={innerFileCard}>
                <div className="d-flex justify-content-between mb-2">
                  <strong>{file.title}</strong>
                  <span className={`badge bg-${file.type}`}>
                    {file.status}
                  </span>
                </div>

                <p className="text-muted small mb-0">
                  {file.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnicalChecks;
