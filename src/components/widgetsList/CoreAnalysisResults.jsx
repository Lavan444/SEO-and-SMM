import React from "react";

const CoreAnalysisResults = () => {
  /* ---------------- DYNAMIC DATA ---------------- */

  const data = {
    title: "Core Analysis Results",
    description:
      "Generate target audience segments and buyer personas based on your business analysis",

    targetSegments: [
      {
        name: "Tech-Driven Startups Seeking Digital Solutions",
        priority: "5/5",
        description:
          "Early-stage startups looking for new technological solutions to enhance business productivity and scalability.",
        details: {
          Industry: "Technology, SaaS, E-commerce",
          "Company Size": "1-50 Employees",
          Geography: "North America, Western Europe",
          Stage: "Awareness",
          Goals: [
            "Rapid deployment",
            "Affordable licensing",
            "Low-friction onboarding",
          ],
          "Sample Keywords": [
            "best SaaS tools for startups",
            "affordable business software",
            "rapid team onboarding software",
          ],
        },
      },
    ],

    personas: [
      {
        name: "Startup Founder",
        role: "Founder & CEO",
        stage: "Awareness",
        image: "https://i.pravatar.cc/100?img=12",
        channels: [
          "PRODUCT HUNT",
          "STARTUP SUBREDDITS",
          "PEER SLACK GROUPS",
        ],
        details: {
          Age: "26-38",
          Location: "San Francisco, London, Berlin",
          "Company Size": "5-50 employees",
          Industry: "SaaS / Tech",
          Goals: ["Speed to market", "Cost efficiency", "Scalability"],
          "Pain Points": [
            "Limited internal tech skill",
            "Long onboarding cycles",
            "Opaque pricing",
          ],
        },
      },
    ],
  };

  /* ---------------- UI ---------------- */

  return (
    <div className="container">
      {/* Header */}
      <div className="mb-4">
        <h4 className="fw-bold">{data.title}</h4>
        <p className="text-muted mb-0">{data.description}</p>
      </div>

      <div className="row align-items-stretch">
        {/* -------- TARGET SEGMENTS -------- */}
        <div className="col-md-6 mb-4 h-100">
          <h5 className="mb-3">Target Segments</h5>

          {data.targetSegments.map((segment, index) => (
            <div style={cardStyle} className="mb-4" key={index}>
              <div className="d-flex justify-content-between align-items-start">
                <h6 className="fw-bold fs-16">{segment.name}</h6>
                <span style={priorityChip}>
                  Priority: {segment.priority}
                </span>
              </div>

              <p className="text-muted mt-2">
                {segment.description}
              </p>

              <div className="row mt-3">
                {Object.entries(segment.details).map(([key, value], i) => (
                  <InfoBlock key={i} title={key} value={value} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* -------- BUYER PERSONAS -------- */}
        <div className="col-md-6 mb-4 h-100">
          <h5 className="mb-3">Buyer Personas</h5>

          {data.personas.map((persona, index) => (
            <div style={cardStyle} className="mb-4" key={index}>
              <div className="d-flex align-items-start justify-content-between">
                <div className="d-flex">
                  <img
                    src={persona.image}
                    alt="persona"
                    style={avatarStyle}
                  />

                  <div className="ms-3">
                    <h6 className="fw-bold fs-16 mb-1">{persona.name}</h6>

                    <div className="d-flex flex-wrap gap-2 mb-2">
                      {persona.channels.map((channel, i) => (
                        <Tag key={i} label={channel} />
                      ))}
                    </div>

                    <p className="text-muted fs-16">
                      {persona.role}
                    </p>
                  </div>
                </div>

                <span style={awarenessChip}>
                  {persona.stage}
                </span>
              </div>

              <div className="row mt-4">
                {Object.entries(persona.details).map(([key, value], i) => (
                  <InfoBlock key={i} title={key} value={value} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ---------------- REUSABLE COMPONENTS ---------------- */

const InfoBlock = ({ title, value }) => (
  <div className="col-6 mb-3">
    <p className="fw-semibold mb-1 fs-16">{title}</p>

    {Array.isArray(value) ? (
      <ul className="ps-3 mb-0 text-muted fs-16">
        {value.map((item, index) => (
          <li className="fs-14 mb-1" key={index}>{item}</li>
        ))}
      </ul>
    ) : (
      <div className="text-muted fs-14">{value}</div>
    )}
  </div>
);

const Tag = ({ label }) => (
  <span style={tagStyle}>{label}</span>
);

/* ---------------- STYLES ---------------- */

const cardStyle = {
  background: "#ffffff",
  padding: "25px",
  borderRadius: "20px",
  boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
  minHeight: "470px",
};

const priorityChip = {
  background: "#d1fae5",
  color: "#065f46",
  padding: "6px 12px",
  borderRadius: "20px",
  fontSize: "12px",
};

const awarenessChip = {
  background: "#fef3c7",
  color: "#92400e",
  padding: "6px 12px",
  borderRadius: "20px",
  fontSize: "12px",
};

const tagStyle = {
  background: "#f1f5f9",
  padding: "4px 10px",
  borderRadius: "12px",
  fontSize: "12px",
};

const avatarStyle = {
  width: "100px",
  height: "100px",
  borderRadius: "16px",
  objectFit: "cover",
};

export default CoreAnalysisResults;
