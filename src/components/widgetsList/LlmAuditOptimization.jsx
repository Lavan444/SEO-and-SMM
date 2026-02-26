import React, { useState } from "react";
import { FiGlobe, FiAward, FiLink, FiTrendingUp } from "react-icons/fi";

// Data Arrays
const domainPerformanceData = [
  { month: "Nov 2025", mentions: 10, audience: 34950 },
  { month: "Dec 2025", mentions: 15, audience: 45000 },
  { month: "Jan 2026", mentions: 20, audience: 56000 },
  { month: "Feb 2026", mentions: 25, audience: 67000 },
  { month: "Mar 2026", mentions: 30, audience: 78000 },
  { month: "Apr 2026", mentions: 35, audience: 89000 },
  { month: "May 2026", mentions: 40, audience: 100000 },
  { month: "Jun 2026", mentions: 45, audience: 111000 },
  { month: "Jul 2026", mentions: 50, audience: 122000 },
];

const rankTrackingData = [
  { keyword: "custom software development services", url: "https://example.com/resource1", rank: 34950 },
  { keyword: "benefits of predictive analytics in retail supply chain management", url: "https://example.com/resource2", rank: 34950 },
  { keyword: "mobile app development solutions", url: "https://example.com/resource3", rank: 45800 },
  { keyword: "AI-driven customer support tools", url: "https://example.com/resource4", rank: 27500 },
  { keyword: "cloud computing integration services", url: "https://example.com/resource5", rank: 52000 },
  { keyword: "cybersecurity risk assessment frameworks", url: "https://example.com/resource6", rank: 31000 },
  { keyword: "user experience design for e-commerce", url: "https://example.com/resource7", rank: 40000 },
  { keyword: "digital marketing strategy optimization", url: "https://example.com/resource8", rank: 22000 },
  { keyword: "blockchain technology consulting", url: "https://example.com/resource9", rank: 18000 },
];

const LlmAuditOptimization = ({ title }) => {
  const [activeTab, setActiveTab] = useState("overview");

  // Helper Component for Section Headers
  const SectionHeader = ({ icon: Icon, title, colorClass }) => (
    <div className="d-flex align-items-center mb-3 pb-2 border-bottom">
      <div className={`p-2 rounded-3 bg-opacity-10 me-3 ${colorClass.replace('text', 'bg')}`}>
        <Icon className={`fs-5 ${colorClass}`} />
      </div>
      <h6 className="mb-0 fw-semibold text-dark">{title}</h6>
    </div>
  );

  // Helper Component for Footer Badge
  const SectionFooter = ({ text }) => (
    <div className="mt-3 pt-3 border-top d-flex align-items-center text-muted fs-12">
      <FiTrendingUp className="me-1 text-primary" />
      {text}
    </div>
  );

  return (
    <div className="col-xxl-12 col-lg-12">
      <div className={`card border-0 stretch stretch-full`} style={{ background: "transparent" }}>
        <div className="card-body custom-card-action p-0">
          
          {/* Optional Tabs if needed, currently hidden to match single view design */}
          {/* <ul className="nav-tab-items-wrapper nav nav-justified invoice-overview-tab-item">
             ... tabs ...
          </ul> */}

          <div className="tab-content p-4">
            <div className="tab-pane fade show active" role="tabpanel">
              
              <div className="row g-4">
                
                {/* Left Column: Domain Performance */}
                <div className="col-lg-4">
                  <div className="card h-100 border-0 shadow-sm bg-white rounded-3">
                    <div className="card-body p-4">
                      <SectionHeader 
                        icon={FiGlobe} 
                        title="Domain Performance" 
                        colorClass="text-primary" 
                      />
                      
                      <div className="table-responsive">
                        <table className="table table-hover align-middle mb-0">
                          <thead>
                            <tr className="text-muted fs-12 text-uppercase">
                              <th className="border-0 pb-2">Month</th>
                              <th className="border-0 pb-2 text-end">Mentions</th>
                              <th className="border-0 pb-2 text-end">Audience</th>
                            </tr>
                          </thead>
                          <tbody>
                            {domainPerformanceData.map((row, index) => (
                              <tr key={index}>
                                <td className="py-2 fw-medium text-dark">{row.month}</td>
                                <td className="py-2 text-end text-muted">{row.mentions}</td>
                                <td className="py-2 text-end fw-semibold text-dark">{row.audience.toLocaleString()}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      <SectionFooter text="Domain Performance" />
                    </div>
                  </div>
                </div>

                {/* Right Column: Rank Tracking */}
                <div className="col-lg-8">
                  <div className="card h-100 border-0 shadow-sm bg-white rounded-3">
                    <div className="card-body p-4">
                      <SectionHeader 
                        icon={FiAward} 
                        title="Rank Tracking" 
                        colorClass="text-danger" 
                      />

                      <div className="table-responsive">
                        <table className="table table-hover align-middle mb-0">
                          <thead>
                            <tr className="text-muted fs-12 text-uppercase">
                              <th className="border-0 pb-2">Keyword</th>
                              <th className="border-0 pb-2">URL</th>
                              <th className="border-0 pb-2 text-end">Rank</th>
                            </tr>
                          </thead>
                          <tbody>
                            {rankTrackingData.map((row, index) => (
                              <tr key={index}>
                                <td className="py-3 text-dark" style={{ maxWidth: "250px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                  {row.keyword}
                                </td>
                                <td className="py-3">
                                  <a href={row.url} className="text-decoration-none text-primary fs-13">
                                    <FiLink className="me-1" />
                                    {row.url.replace('https://', '')}
                                  </a>
                                </td>
                                <td className="py-3 text-end fw-semibold text-dark">
                                  {row.rank.toLocaleString()}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      <SectionFooter text="AI Generated Results" />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LlmAuditOptimization;