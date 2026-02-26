import React, { useState } from "react";

/* ---------------- STATUS ICON ---------------- */

const StatusIcon = ({ status }) => {
  const map = {
    success: "text-success",
    warning: "text-warning",
    danger: "text-danger",
  };

  return <span className={map[status]}>✔</span>;
};

/* ---------------- STYLES ---------------- */

const cardStyle = {
  background: "#ffffff",
  padding: "20px",
  borderRadius: "16px",
  boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
};

const darkPreview = {
  background: "#2f3b52",
  color: "#ffffff",
  padding: "20px",
  borderRadius: "10px",
  fontFamily: "monospace",
  fontSize: "14px",
};

const lightBox = {
  background: "#f1f3f5",
  padding: "15px",
  borderRadius: "10px",
};

/* ---------------- MAIN COMPONENT ---------------- */

const GeneratorsTab = () => {
  const [activeTab, setActiveTab] = useState("robots");

  /* ---------------- TABS DATA ---------------- */

  const tabsData = [
    {
      id: "robots",
      label: "Robots.txt",
      generatorTitle: "Robots Generator",
      previewText1: `# Click generate to preview content`,
 previewText2: `# Configuration options will appear here`
    },
    {
      id: "sitemap",
      label: "Sitemap.txt",
      generatorTitle: "Sitemap Generator",
       previewText1: `# Click generate to preview content`,
 previewText2: `# Configuration options will appear here`
    },
    {
      id: "llms",
      label: "Llms.txt",
      generatorTitle: "LLMs Generator",
      previewText1: `# Click generate to preview content`,
 previewText2: `# Configuration options will appear here`
    },
  ];

  /* ---------------- COMMON ANALYSIS DATA (VISIBLE FOR ALL TABS) ---------------- */

  const analysisData = {
    leftTitle: "File Analysis",
    checks: [
      { label: "Sitemap URL", status: "success" },
      { label: "File Exists", status: "success" },
      { label: "Status Code", status: "success" },
    ],
    content: `User-agent: *
Disallow: /wp-admin/
Allow: /wp-admin/admin-ajax.php
Crawl-delay: 10
Sitemap: https://example.com/sitemap.xml`,
    rightTitle: "Audit Results",
    rightChecks: [
      { label: "Accessible", status: "success" },
      { label: "Valid HTTP Status", status: "success" },
      { label: "Correct Location", status: "success" },
    ],
    sitemaps: [
      "https://example.com/news-sitemap.xml",
      "https://example.com/video-sitemap.xml",
      "https://example.com/sitemap.xml",
      "https://example.com/sitemap.rss",
    ],
  };

  const currentTab = tabsData.find((tab) => tab.id === activeTab);

  return (
    <div style={cardStyle}>
      {/* ---------------- INNER NAV ---------------- */}
      <ul className="nav nav-tabs mb-3">
        {tabsData.map((tab) => (
          <li className="nav-item" key={tab.id}>
            <button
              className={`nav-link ${
                activeTab === tab.id ? "active" : ""
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>

      {/* ---------------- GENERATOR SECTION ---------------- */}
      <div className="d-flex justify-content-between align-items-center mb-2">
        <div>
          <h5>{currentTab.generatorTitle}</h5>
           <p className="text-muted">
        Configure and generate your file automatically.
      </p>
        </div>
        
        <button className="custom-btn border-0">
          Re-Generate
        </button>
      </div>

     

      <div style={darkPreview} className="mb-4">
        <p className="mb-0">{currentTab.previewText1}</p>
        <p className="mb-0">{currentTab.previewText2}</p>
      </div>

      {/* ---------------- ANALYSIS SECTION (VISIBLE IN ALL TABS) ---------------- */}
      <div className="row mt-4">
        {/* LEFT CARD */}
        <div className="col-md-6 mb-4">
          <div style={cardStyle}>
            <h6>{analysisData.leftTitle}</h6>

            {analysisData.checks.map((item, i) => (
              <div
                key={i}
                className="d-flex justify-content-between mt-2"
              >
                <span>{item.label}</span>
                <StatusIcon status={item.status} />
              </div>
            ))}

            <h6 className="mt-4">Content</h6>

            <div style={darkPreview}>
              {analysisData.content}
            </div>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="col-md-6 mb-4">
          <div style={cardStyle}>
            <h6>{analysisData.rightTitle}</h6>

            {analysisData.rightChecks.map((item, i) => (
              <div
                key={i}
                className="d-flex justify-content-between mt-2"
              >
                <span>{item.label}</span>
                <StatusIcon status={item.status} />
              </div>
            ))}

            <h6 className="mt-4">Sitemaps Found</h6>

            <div style={lightBox}>
              {analysisData.sitemaps.map((url, index) => (
                <div key={index}>{url}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneratorsTab;
