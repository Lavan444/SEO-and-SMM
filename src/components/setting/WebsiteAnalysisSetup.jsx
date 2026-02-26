import React from "react";
import CardHeader from "@/components/shared/CardHeader";
import CardLoader from "@/components/shared/CardLoader";
import useCardTitleActions from "@/hooks/useCardTitleActions";

const recommendationData = [
  {
    title: "Brand Voice Guidelines",
    badge: { label: "Verified", type: "success" },
    description:
      "Core communication standards established for warm and empathetic parent engagement.",
    items: [
      "Always focus on the client’s success and practical results",
      "Communicate as a knowledgeable but approachable expert",
      "Prioritize transparency and clear, actionable recommendations",
      "Use empathetic, supportive language when addressing client challenges",
    ],
  },
  {
    title: "Business Model Optimization",
    badge: { label: "Recommended", type: "warning" },
    description:
      "Refinement of core service alignment with high-value demographic needs.",
    items: [
      "Add more detailed service descriptions and differentiators per industry vertical",
      "Showcase representative case studies/projects for each core service",
      "Highlight leadership expertise and certifications to reinforce authority",
    ],
  },
  {
    title: "Messaging Improvement Actions",
    badge: { label: "Verified", type: "success" },
    description:
      "Conversion of generic benefit claims into specific, data-backed proof points.",
    items: [
      "Reduce generic claims by quantifying impact and providing proof points",
      "Expand on unique differentiators—especially in key services like AI/ML and IT staffing",
      "Increase presence of visualized outcomes (infographics, statistics, awards logos)",
    ],
  },
];

const WebsiteAnalysisSetup = ({ title }) => {
  const {
    refreshKey,
    isRemoved,
    isExpanded,
    handleRefresh,
    handleExpand,
    handleDelete,
  } = useCardTitleActions();

  if (isRemoved) {
    return null;
  }

  return (
    <div className="col-xxl-12">
      <div
        className={` stretch stretch-full 
                ${isExpanded ? "card-expand" : ""} 
                ${refreshKey ? "card-loading" : ""}`}
      >
        {/* <CardHeader className="text-dark"
                    title={title}
                    refresh={handleRefresh}
                    remove={handleDelete}
                    expanded={handleExpand}
                /> */}

        <div className="card-body mt-3">
          <div className="row g-4">
            <div className="card-header">
              <h5 className="card-title text-dark ms-3">
                Brand Recommendations
              </h5>
            </div>
            {recommendationData.map((item, index) => (
              <div className="col-xxl-4 col-md-6 " key={index}>
                <div className="p-4 h-100 card">
                  {/* Title + Badge */}
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <h6 className="fw-bold mb-0">{item.title}</h6>

                    <span
                      className={`badge bg-${item.badge.type}-subtle text-${item.badge.type} border border-${item.badge.type}`}
                    >
                      {item.badge.label}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-muted small mb-3">{item.description}</p>

                  {/* List */}
                  <ul className="list-unstyled mb-0">
                    {item.items.map((point, i) => (
                      <li key={i} className="d-flex align-items-start mb-2">
                        <span className="text-success me-2">✓</span>
                        <span className="small">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="row g-4 mt-3">
            {/* Section Header */}
            <div className="card-header ms-3">
              <h5 className="card-title text-dark mb-0">Voice & Tone</h5>
              <small className="text-muted">Tactical Action Items</small>
            </div>

            {/* 1️⃣ Brand Voice Profile */}
            <div className="col-xxl-4 col-md-6">
              <div className="card p-4 h-100 shadow-sm rounded-4">
                <h6 className="fw-bold mb-3">Brand Voice Profile</h6>

                <p className="text-muted small mb-2 fs-16">Primary Voice</p>

                <div className="d-flex gap-2 mb-3">
                  <span className="badge bg-primary-subtle text-primary border border-primary rounded-pill px-3 py-2">
                    Consultative
                  </span>
                  <span className="badge bg-primary-subtle text-primary border border-primary rounded-pill px-3 py-2">
                    Trustworthy
                  </span>
                </div>

                <p className="text-muted small mb-2 fs-16">
                  Communication Style
                </p>

                <div className="bg-light rounded-3 p-3 small text-primary fs-16">
                  "Direct, approachable, and conversational, with a focus on
                  partnership and clear business value."
                </div>
              </div>
            </div>

            {/* 2️⃣ Language Guidelines */}
            <div className="col-xxl-4 col-md-6">
              <div className="card p-4 h-100 shadow-sm rounded-4">
                <h6 className="fw-bold mb-3">Language Guidelines</h6>

                <ul className="list-unstyled mb-0">
                  {[
                    "Prioritize clarity and practical guidance.",
                    "Emphasize honest, personalized partnership.",
                    "Highlight business outcomes and tailored solutions.",
                    "Maintain a professional yet approachable tone.",
                    "Use terms clients can easily understand.",
                  ].map((item, i) => (
                    <li key={i} className="d-flex fs-16 align-items-start mb-2">
                      <span className="text-success me-2">✓</span>
                      <span className="small">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 3️⃣ Consistency Score */}
            <div className="col-xxl-4 col-md-6">
              <div className="card p-4 h-100 shadow-sm rounded-4 text-center">
                <h6 className="fw-bold mb-3">Consistency Score</h6>

                <div
                  className="d-flex justify-content-center mb-3"
                  style={{ left: "45%" }}
                >
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center"
                    style={{
                      width: "120px",
                      height: "120px",
                      border: "10px solid #e6f4ea",
                      borderTop: "10px solid #16a34a",
                      fontSize: "28px",
                      fontWeight: "600",
                      color: "#16a34a",
                    }}
                  >
                    80
                  </div>
                </div>

                <span className="badge bg-soft-primary text-primary">
                  ✨ Excellent Consistency
                </span>

                <p
                  className="text-muted small mt-2 mb-0"
                  style={{ width: "fit-content" }}
                >
                  Your content is highly aligned with your brand guidelines.
                  Keep it up!
                </p>
              </div>
            </div>
          </div>

          <div className="row g-4 mt-3">
            {/* Section Header */}
            <div className="card-header ms-3">
              <h5 className="card-title text-dark mb-0">Brand Alignment</h5>
              <small className="text-muted">
                Business Brand Consistency and Alignment assessment
              </small>
            </div>

            {/* 3️⃣ Consistency Score */}
            <div className="col-xxl-4 col-md-6">
              <div className="card p-4 h-100 shadow-sm rounded-4 text-center">
                <h6 className="fw-bold mb-3 text-start">
                  Brand Alignment Scoring
                </h6>

                <div
                  className="d-flex justify-content-center mb-3"
                  style={{ left: "45%" }}
                >
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center"
                    style={{
                      width: "120px",
                      height: "120px",
                      border: "10px solid #e6f4ea",
                      borderTop: "10px solid #16a34a",
                      fontSize: "28px",
                      fontWeight: "600",
                      color: "#16a34a",
                    }}
                  >
                    93
                  </div>
                </div>

                <span className="badge bg-soft-primary text-primary">
                  ✨ Excellent Consistency
                </span>

                <p
                  className="text-muted small mt-2 mb-0"
                  style={{ width: "fit-content" }}
                >
                  Your content is highly aligned with your brand guidelines.
                  Keep it up!
                </p>
              </div>
            </div>

            {/* 2️⃣ Language Guidelines */}
            <div className="col-xxl-8 col-md-6">
              <div className="card p-4 h-100 shadow-sm rounded-4">
                <h6 className="fw-bold mb-3">Misalignment Flags</h6>

                <ul className="list-unstyled mb-0">
                  {[
                    "Workforce consulting is mentioned in one section but not clearly outlined in top-level service navigation",
                    "Workforce consulting is mentioned in one section but not clearly outlined.",
                    "Workforce consulting is mentioned in one section but not clearly outlined in top-level service navigation Highlight business outcomes and tailored solutions.",
                    " Workforce consulting is mentioned in one section but not clearly outlined in top-level service navigation Maintain a professional yet approachable tone.",
                    "Use terms clients can easily understand.",
                  ].map((item, i) => (
                    <li key={i} className="d-flex align-items-start fs-16 mb-2">
                      <span className="text-success me-2">✓</span>
                      <span className="small">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* content authority analysis start */}

          <div className="row g-4 mt-3">
            {/* Section Header */}
            <div className="card-header ms-3">
              <h5 className="card-title text-dark mb-0">
                Content Authority Analysis
              </h5>
              <small className="text-muted">Tactical Action Items</small>
            </div>

            {/* 1️⃣ Brand Voice Profile */}
            <div className="col-xxl-4 col-md-6">
              <div className="row flex-column">
                <div className="col-12">
                  <div className="card p-4 h-100 shadow-sm rounded-4 text-center">
                    <h6 className="fw-bold mb-3">Consistency Score</h6>

                    <div
                      className="d-flex justify-content-center mb-3"
                      style={{ left: "45%" }}
                    >
                      <div
                        className="rounded-circle d-flex align-items-center justify-content-center"
                        style={{
                          width: "120px",
                          height: "120px",
                          border: "10px solid #e6f4ea",
                          borderTop: "10px solid #16a34a",
                          fontSize: "28px",
                          fontWeight: "600",
                          color: "#16a34a",
                        }}
                      >
                        80
                      </div>
                    </div>

                    <span className="badge bg-soft-primary text-primary">
                      ✨ Excellent Consistency
                    </span>

                    <p
                      className="text-muted small mt-2 mb-0"
                      style={{ width: "fit-content" }}
                    >
                      Your content is highly aligned with your brand guidelines.
                      Keep it up!
                    </p>
                  </div>
                </div>

                <div className="col-12">
                  <div className="card p-4 h-100 shadow-sm rounded-4">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div>
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.18084 2.345C9.21654 2.15384 9.31798 1.98118 9.46758 1.85693C9.61719 1.73269 9.80553 1.66467 10 1.66467C10.1945 1.66467 10.3828 1.73269 10.5324 1.85693C10.682 1.98118 10.7835 2.15384 10.8192 2.345L11.695 6.97667C11.7572 7.30596 11.9172 7.60885 12.1542 7.84581C12.3912 8.08277 12.694 8.2428 13.0233 8.305L17.655 9.18084C17.8462 9.21654 18.0188 9.31798 18.1431 9.46758C18.2673 9.61719 18.3353 9.80553 18.3353 10C18.3353 10.1945 18.2673 10.3828 18.1431 10.5324C18.0188 10.682 17.8462 10.7835 17.655 10.8192L13.0233 11.695C12.694 11.7572 12.3912 11.9172 12.1542 12.1542C11.9172 12.3912 11.7572 12.694 11.695 13.0233L10.8192 17.655C10.7835 17.8462 10.682 18.0188 10.5324 18.1431C10.3828 18.2673 10.1945 18.3353 10 18.3353C9.80553 18.3353 9.61719 18.2673 9.46758 18.1431C9.31798 18.0188 9.21654 17.8462 9.18084 17.655L8.305 13.0233C8.2428 12.694 8.08277 12.3912 7.84581 12.1542C7.60885 11.9172 7.30596 11.7572 6.97667 11.695L2.345 10.8192C2.15384 10.7835 1.98118 10.682 1.85693 10.5324C1.73269 10.3828 1.66467 10.1945 1.66467 10C1.66467 9.80553 1.73269 9.61719 1.85693 9.46758C1.98118 9.31798 2.15384 9.21654 2.345 9.18084L6.97667 8.305C7.30596 8.2428 7.60885 8.08277 7.84581 7.84581C8.08277 7.60885 8.2428 7.30596 8.305 6.97667L9.18084 2.345Z"
                            stroke="black"
                            stroke-width="0.833333"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M16.6667 1.66667V5.00001"
                            stroke="black"
                            stroke-width="0.833333"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M18.3333 3.33333H15"
                            stroke="black"
                            stroke-width="0.833333"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M3.33335 18.3333C4.25383 18.3333 5.00002 17.5871 5.00002 16.6667C5.00002 15.7462 4.25383 15 3.33335 15C2.41288 15 1.66669 15.7462 1.66669 16.6667C1.66669 17.5871 2.41288 18.3333 3.33335 18.3333Z"
                            stroke="black"
                            stroke-width="0.833333"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="fs-11 status-badge verified">Good</span>
                    </div>

                    <h6 className="fw-bold mb-3">Authority Analysis</h6>

                    <ul className="list-unstyled mb-0">
                      {[
                        "Prioritize clarity and practical guidance.",
                        "Emphasize honest, personalized partnership.",
                        "Highlight business outcomes and tailored solutions.",
                        "Maintain a professional yet approachable tone.",
                        "Use terms clients can easily understand.",
                      ].map((item, i) => (
                        <li
                          key={i}
                          className="d-flex fs-16 align-items-start mb-2"
                        >
                          <span className="text-success me-2">✓</span>
                          <span className="small">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* 2️⃣ Language Guidelines */}
            <div className="col-xxl-4 col-md-6">
              <div className="card p-4 h-100 shadow-sm rounded-4">
                <div className="d-flex justify-content-between align-items-baseline mb-3">
                  <div>
                    <h6 className="fw-bold mb-1">
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="me-2 border rounded-3 shadow-sm" style={{padding: "5px"}}
                      >
                        <path
                          d="M9.18084 2.345C9.21654 2.15384 9.31798 1.98118 9.46758 1.85693C9.61719 1.73269 9.80553 1.66467 10 1.66467C10.1945 1.66467 10.3828 1.73269 10.5324 1.85693C10.682 1.98118 10.7835 2.15384 10.8192 2.345L11.695 6.97667C11.7572 7.30596 11.9172 7.60885 12.1542 7.84581C12.3912 8.08277 12.694 8.2428 13.0233 8.305L17.655 9.18084C17.8462 9.21654 18.0188 9.31798 18.1431 9.46758C18.2673 9.61719 18.3353 9.80553 18.3353 10C18.3353 10.1945 18.2673 10.3828 18.1431 10.5324C18.0188 10.682 17.8462 10.7835 17.655 10.8192L13.0233 11.695C12.694 11.7572 12.3912 11.9172 12.1542 12.1542C11.9172 12.3912 11.7572 12.694 11.695 13.0233L10.8192 17.655C10.7835 17.8462 10.682 18.0188 10.5324 18.1431C10.3828 18.2673 10.1945 18.3353 10 18.3353C9.80553 18.3353 9.61719 18.2673 9.46758 18.1431C9.31798 18.0188 9.21654 17.8462 9.18084 17.655L8.305 13.0233C8.2428 12.694 8.08277 12.3912 7.84581 12.1542C7.60885 11.9172 7.30596 11.7572 6.97667 11.695L2.345 10.8192C2.15384 10.7835 1.98118 10.682 1.85693 10.5324C1.73269 10.3828 1.66467 10.1945 1.66467 10C1.66467 9.80553 1.73269 9.61719 1.85693 9.46758C1.98118 9.31798 2.15384 9.21654 2.345 9.18084L6.97667 8.305C7.30596 8.2428 7.60885 8.08277 7.84581 7.84581C8.08277 7.60885 8.2428 7.30596 8.305 6.97667L9.18084 2.345Z"
                          stroke="black"
                          stroke-width="0.833333"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M16.6667 1.66667V5.00001"
                          stroke="black"
                          stroke-width="0.833333"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M18.3333 3.33333H15"
                          stroke="black"
                          stroke-width="0.833333"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M3.33335 18.3333C4.25383 18.3333 5.00002 17.5871 5.00002 16.6667C5.00002 15.7462 4.25383 15 3.33335 15C2.41288 15 1.66669 15.7462 1.66669 16.6667C1.66669 17.5871 2.41288 18.3333 3.33335 18.3333Z"
                          stroke="black"
                          stroke-width="0.833333"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      E-E-A-T Gaps
                    </h6>
                  </div>
                  <span className="fs-11 status-badge recommended">Low</span>
                </div>

                <ul className="list-unstyled mb-0">
                  {[
                    "Prioritize clarity and practical guidance.",
                    "Maintain a professional yet approachable tone approachable tone.",
                    "Emphasize honest, personalized partnership.",
                    "Highlight business outcomes and tailored solutions.",
                    "Maintain a professional yet approachable tone.",
                    "Maintain a professional yet approachable tone.",
                    "Maintain a professional yet approachable tone approachable tone.",
                    "Maintain a professional yet approachable tone.",
                    "Maintain a professional yet approachable tone approachable tone.",
                    "Use terms clients can easily understand.",
                    "Maintain a professional yet approachable tone approachable tone.",
                    "Maintain a professional yet approachable tone approachable tone.",
                  ].map((item, i) => (
                    <li key={i} className="d-flex fs-16 align-items-start mb-2">
                      <span className="text-success me-2">✓</span>
                      <span className="small">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

           {/* 2️⃣ Language Guidelines */}
              <div className="col-xxl-4 col-md-6">
              <div className="card p-4 h-100 shadow-sm rounded-4">
                <div className="d-flex justify-content-between align-items-baseline mb-3">
                  <div>
                    <h6 className="fw-bold mb-1">
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="me-2 border rounded-3 shadow-sm" style={{padding: "5px"}}
                      >
                        <path
                          d="M9.18084 2.345C9.21654 2.15384 9.31798 1.98118 9.46758 1.85693C9.61719 1.73269 9.80553 1.66467 10 1.66467C10.1945 1.66467 10.3828 1.73269 10.5324 1.85693C10.682 1.98118 10.7835 2.15384 10.8192 2.345L11.695 6.97667C11.7572 7.30596 11.9172 7.60885 12.1542 7.84581C12.3912 8.08277 12.694 8.2428 13.0233 8.305L17.655 9.18084C17.8462 9.21654 18.0188 9.31798 18.1431 9.46758C18.2673 9.61719 18.3353 9.80553 18.3353 10C18.3353 10.1945 18.2673 10.3828 18.1431 10.5324C18.0188 10.682 17.8462 10.7835 17.655 10.8192L13.0233 11.695C12.694 11.7572 12.3912 11.9172 12.1542 12.1542C11.9172 12.3912 11.7572 12.694 11.695 13.0233L10.8192 17.655C10.7835 17.8462 10.682 18.0188 10.5324 18.1431C10.3828 18.2673 10.1945 18.3353 10 18.3353C9.80553 18.3353 9.61719 18.2673 9.46758 18.1431C9.31798 18.0188 9.21654 17.8462 9.18084 17.655L8.305 13.0233C8.2428 12.694 8.08277 12.3912 7.84581 12.1542C7.60885 11.9172 7.30596 11.7572 6.97667 11.695L2.345 10.8192C2.15384 10.7835 1.98118 10.682 1.85693 10.5324C1.73269 10.3828 1.66467 10.1945 1.66467 10C1.66467 9.80553 1.73269 9.61719 1.85693 9.46758C1.98118 9.31798 2.15384 9.21654 2.345 9.18084L6.97667 8.305C7.30596 8.2428 7.60885 8.08277 7.84581 7.84581C8.08277 7.60885 8.2428 7.30596 8.305 6.97667L9.18084 2.345Z"
                          stroke="black"
                          stroke-width="0.833333"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M16.6667 1.66667V5.00001"
                          stroke="black"
                          stroke-width="0.833333"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M18.3333 3.33333H15"
                          stroke="black"
                          stroke-width="0.833333"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M3.33335 18.3333C4.25383 18.3333 5.00002 17.5871 5.00002 16.6667C5.00002 15.7462 4.25383 15 3.33335 15C2.41288 15 1.66669 15.7462 1.66669 16.6667C1.66669 17.5871 2.41288 18.3333 3.33335 18.3333Z"
                          stroke="black"
                          stroke-width="0.833333"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      AI Readiness Gaps
                    </h6>
                  </div>
                  <span className="fs-11 status-badge recommended">Low</span>
                </div>

                <ul className="list-unstyled mb-0">
                  {[
                    "Prioritize clarity and practical guidance.",
                    "Maintain a professional yet approachable tone approachable tone.",
                    "Emphasize honest, personalized partnership.",
                    "Highlight business outcomes and tailored solutions.",
                    "Maintain a professional yet approachable tone.",
                    "Maintain a professional yet approachable tone.",
                    "Maintain a professional yet approachable tone approachable tone.",
                    "Maintain a professional yet approachable tone.",
                    "Maintain a professional yet approachable tone approachable tone.",
                    "Use terms clients can easily understand.",
                    "Maintain a professional yet approachable tone approachable tone.",
                    "Maintain a professional yet approachable tone approachable tone.",
                  ].map((item, i) => (
                    <li key={i} className="d-flex fs-16 align-items-start mb-2">
                      <span className="text-success me-2">✓</span>
                      <span className="small">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          {/* content Authority analysis end */}



        {/* Brand Positioning start */}


          <div className="row g-4 mt-3">
            {/* Section Header */}
            <div className="card-header ms-3">
              <h5 className="card-title text-dark mb-0">
                Brand Positioning
              </h5>
              <small className="text-muted">Tactical Action Items</small>
            </div>

            {/* 1️⃣ Brand Voice Profile */}
            <div className="col-xxl-4 col-md-6">
              <div className="row flex-column">
                <div className="col-12">
                  <div className="card p-4 h-100 shadow-sm rounded-4">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div>
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.18084 2.345C9.21654 2.15384 9.31798 1.98118 9.46758 1.85693C9.61719 1.73269 9.80553 1.66467 10 1.66467C10.1945 1.66467 10.3828 1.73269 10.5324 1.85693C10.682 1.98118 10.7835 2.15384 10.8192 2.345L11.695 6.97667C11.7572 7.30596 11.9172 7.60885 12.1542 7.84581C12.3912 8.08277 12.694 8.2428 13.0233 8.305L17.655 9.18084C17.8462 9.21654 18.0188 9.31798 18.1431 9.46758C18.2673 9.61719 18.3353 9.80553 18.3353 10C18.3353 10.1945 18.2673 10.3828 18.1431 10.5324C18.0188 10.682 17.8462 10.7835 17.655 10.8192L13.0233 11.695C12.694 11.7572 12.3912 11.9172 12.1542 12.1542C11.9172 12.3912 11.7572 12.694 11.695 13.0233L10.8192 17.655C10.7835 17.8462 10.682 18.0188 10.5324 18.1431C10.3828 18.2673 10.1945 18.3353 10 18.3353C9.80553 18.3353 9.61719 18.2673 9.46758 18.1431C9.31798 18.0188 9.21654 17.8462 9.18084 17.655L8.305 13.0233C8.2428 12.694 8.08277 12.3912 7.84581 12.1542C7.60885 11.9172 7.30596 11.7572 6.97667 11.695L2.345 10.8192C2.15384 10.7835 1.98118 10.682 1.85693 10.5324C1.73269 10.3828 1.66467 10.1945 1.66467 10C1.66467 9.80553 1.73269 9.61719 1.85693 9.46758C1.98118 9.31798 2.15384 9.21654 2.345 9.18084L6.97667 8.305C7.30596 8.2428 7.60885 8.08277 7.84581 7.84581C8.08277 7.60885 8.2428 7.30596 8.305 6.97667L9.18084 2.345Z"
                            stroke="black"
                            stroke-width="0.833333"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M16.6667 1.66667V5.00001"
                            stroke="black"
                            stroke-width="0.833333"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M18.3333 3.33333H15"
                            stroke="black"
                            stroke-width="0.833333"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M3.33335 18.3333C4.25383 18.3333 5.00002 17.5871 5.00002 16.6667C5.00002 15.7462 4.25383 15 3.33335 15C2.41288 15 1.66669 15.7462 1.66669 16.6667C1.66669 17.5871 2.41288 18.3333 3.33335 18.3333Z"
                            stroke="black"
                            stroke-width="0.833333"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>

                    <h6 className="fw-bold mb-3">Core Problem solved</h6>

                    <ul className="list-unstyled mb-0">
                      {[
                        "Prioritize clarity and practical guidance. Prioritize clarity and practical guidance. Prioritize clarity and practical guidance.",
                        
                      ].map((item, i) => (
                        <li
                          key={i}
                          className="d-flex fs-16 align-items-start mb-2"
                        >
                          <span className="text-success me-2">✓</span>
                          <span className="small">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="col-12">
                  <div className="card p-4 h-100 shadow-sm rounded-4">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div>
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.18084 2.345C9.21654 2.15384 9.31798 1.98118 9.46758 1.85693C9.61719 1.73269 9.80553 1.66467 10 1.66467C10.1945 1.66467 10.3828 1.73269 10.5324 1.85693C10.682 1.98118 10.7835 2.15384 10.8192 2.345L11.695 6.97667C11.7572 7.30596 11.9172 7.60885 12.1542 7.84581C12.3912 8.08277 12.694 8.2428 13.0233 8.305L17.655 9.18084C17.8462 9.21654 18.0188 9.31798 18.1431 9.46758C18.2673 9.61719 18.3353 9.80553 18.3353 10C18.3353 10.1945 18.2673 10.3828 18.1431 10.5324C18.0188 10.682 17.8462 10.7835 17.655 10.8192L13.0233 11.695C12.694 11.7572 12.3912 11.9172 12.1542 12.1542C11.9172 12.3912 11.7572 12.694 11.695 13.0233L10.8192 17.655C10.7835 17.8462 10.682 18.0188 10.5324 18.1431C10.3828 18.2673 10.1945 18.3353 10 18.3353C9.80553 18.3353 9.61719 18.2673 9.46758 18.1431C9.31798 18.0188 9.21654 17.8462 9.18084 17.655L8.305 13.0233C8.2428 12.694 8.08277 12.3912 7.84581 12.1542C7.60885 11.9172 7.30596 11.7572 6.97667 11.695L2.345 10.8192C2.15384 10.7835 1.98118 10.682 1.85693 10.5324C1.73269 10.3828 1.66467 10.1945 1.66467 10C1.66467 9.80553 1.73269 9.61719 1.85693 9.46758C1.98118 9.31798 2.15384 9.21654 2.345 9.18084L6.97667 8.305C7.30596 8.2428 7.60885 8.08277 7.84581 7.84581C8.08277 7.60885 8.2428 7.30596 8.305 6.97667L9.18084 2.345Z"
                            stroke="black"
                            stroke-width="0.833333"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M16.6667 1.66667V5.00001"
                            stroke="black"
                            stroke-width="0.833333"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M18.3333 3.33333H15"
                            stroke="black"
                            stroke-width="0.833333"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M3.33335 18.3333C4.25383 18.3333 5.00002 17.5871 5.00002 16.6667C5.00002 15.7462 4.25383 15 3.33335 15C2.41288 15 1.66669 15.7462 1.66669 16.6667C1.66669 17.5871 2.41288 18.3333 3.33335 18.3333Z"
                            stroke="black"
                            stroke-width="0.833333"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>

                    <h6 className="fw-bold mb-3">Proof Points</h6>

                    <ul className="list-unstyled mb-0">
                      {[
                        "Prioritize clarity and practical guidance. Prioritize clarity and practical guidance. Prioritize clarity.",
                        "Emphasize honest, personalized partnership.",
                        "Highlight business outcomes and tailored solutions.",
                       
                      ].map((item, i) => (
                        <li
                          key={i}
                          className="d-flex fs-16 align-items-start mb-2"
                        >
                          <span className="text-success me-2">✓</span>
                          <span className="small">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* 2️⃣ Language Guidelines */}
            <div className="col-xxl-4 col-md-6">
              <div className="card p-4 h-100 shadow-sm rounded-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                      <div>
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.18084 2.345C9.21654 2.15384 9.31798 1.98118 9.46758 1.85693C9.61719 1.73269 9.80553 1.66467 10 1.66467C10.1945 1.66467 10.3828 1.73269 10.5324 1.85693C10.682 1.98118 10.7835 2.15384 10.8192 2.345L11.695 6.97667C11.7572 7.30596 11.9172 7.60885 12.1542 7.84581C12.3912 8.08277 12.694 8.2428 13.0233 8.305L17.655 9.18084C17.8462 9.21654 18.0188 9.31798 18.1431 9.46758C18.2673 9.61719 18.3353 9.80553 18.3353 10C18.3353 10.1945 18.2673 10.3828 18.1431 10.5324C18.0188 10.682 17.8462 10.7835 17.655 10.8192L13.0233 11.695C12.694 11.7572 12.3912 11.9172 12.1542 12.1542C11.9172 12.3912 11.7572 12.694 11.695 13.0233L10.8192 17.655C10.7835 17.8462 10.682 18.0188 10.5324 18.1431C10.3828 18.2673 10.1945 18.3353 10 18.3353C9.80553 18.3353 9.61719 18.2673 9.46758 18.1431C9.31798 18.0188 9.21654 17.8462 9.18084 17.655L8.305 13.0233C8.2428 12.694 8.08277 12.3912 7.84581 12.1542C7.60885 11.9172 7.30596 11.7572 6.97667 11.695L2.345 10.8192C2.15384 10.7835 1.98118 10.682 1.85693 10.5324C1.73269 10.3828 1.66467 10.1945 1.66467 10C1.66467 9.80553 1.73269 9.61719 1.85693 9.46758C1.98118 9.31798 2.15384 9.21654 2.345 9.18084L6.97667 8.305C7.30596 8.2428 7.60885 8.08277 7.84581 7.84581C8.08277 7.60885 8.2428 7.30596 8.305 6.97667L9.18084 2.345Z"
                            stroke="black"
                            stroke-width="0.833333"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M16.6667 1.66667V5.00001"
                            stroke="black"
                            stroke-width="0.833333"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M18.3333 3.33333H15"
                            stroke="black"
                            stroke-width="0.833333"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M3.33335 18.3333C4.25383 18.3333 5.00002 17.5871 5.00002 16.6667C5.00002 15.7462 4.25383 15 3.33335 15C2.41288 15 1.66669 15.7462 1.66669 16.6667C1.66669 17.5871 2.41288 18.3333 3.33335 18.3333Z"
                            stroke="black"
                            stroke-width="0.833333"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                       <span className="fs-11 status-badge recommended">Low</span>
                    </div>

                <div className="d-flex justify-content-between align-items-baseline mb-3">
                    
                  <div>
                    <h6 className="fw-bold mb-1">
                  
                      Key Differentiators
                    </h6>
                  </div>
                 
                </div>

                <ul className="list-unstyled mb-0">
                  {[
                    "Prioritize clarity and practical guidance.",
                    "Maintain a professional yet approachable tone approachable tone.",
                    "Emphasize honest, personalized partnership.",
                    "Highlight business outcomes and tailored solutions.",
                    "Maintain a professional yet approachable tone.",
                    "Maintain a professional yet approachable tone.",
                    "Maintain a professional yet approachable tone approachable tone.",
                    "Maintain a professional yet approachable tone.",
                    "Maintain a professional yet approachable tone approachable tone.",
                   
                  ].map((item, i) => (
                    <li key={i} className="d-flex fs-16 align-items-start mb-2">
                      <span className="text-success me-2">✓</span>
                      <span className="small">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

           {/* 2️⃣ Language Guidelines */}
                 <div className="col-xxl-4 col-md-6">
              <div className="card p-4 h-100 shadow-sm rounded-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                      <div>
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.18084 2.345C9.21654 2.15384 9.31798 1.98118 9.46758 1.85693C9.61719 1.73269 9.80553 1.66467 10 1.66467C10.1945 1.66467 10.3828 1.73269 10.5324 1.85693C10.682 1.98118 10.7835 2.15384 10.8192 2.345L11.695 6.97667C11.7572 7.30596 11.9172 7.60885 12.1542 7.84581C12.3912 8.08277 12.694 8.2428 13.0233 8.305L17.655 9.18084C17.8462 9.21654 18.0188 9.31798 18.1431 9.46758C18.2673 9.61719 18.3353 9.80553 18.3353 10C18.3353 10.1945 18.2673 10.3828 18.1431 10.5324C18.0188 10.682 17.8462 10.7835 17.655 10.8192L13.0233 11.695C12.694 11.7572 12.3912 11.9172 12.1542 12.1542C11.9172 12.3912 11.7572 12.694 11.695 13.0233L10.8192 17.655C10.7835 17.8462 10.682 18.0188 10.5324 18.1431C10.3828 18.2673 10.1945 18.3353 10 18.3353C9.80553 18.3353 9.61719 18.2673 9.46758 18.1431C9.31798 18.0188 9.21654 17.8462 9.18084 17.655L8.305 13.0233C8.2428 12.694 8.08277 12.3912 7.84581 12.1542C7.60885 11.9172 7.30596 11.7572 6.97667 11.695L2.345 10.8192C2.15384 10.7835 1.98118 10.682 1.85693 10.5324C1.73269 10.3828 1.66467 10.1945 1.66467 10C1.66467 9.80553 1.73269 9.61719 1.85693 9.46758C1.98118 9.31798 2.15384 9.21654 2.345 9.18084L6.97667 8.305C7.30596 8.2428 7.60885 8.08277 7.84581 7.84581C8.08277 7.60885 8.2428 7.30596 8.305 6.97667L9.18084 2.345Z"
                            stroke="black"
                            stroke-width="0.833333"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M16.6667 1.66667V5.00001"
                            stroke="black"
                            stroke-width="0.833333"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M18.3333 3.33333H15"
                            stroke="black"
                            stroke-width="0.833333"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M3.33335 18.3333C4.25383 18.3333 5.00002 17.5871 5.00002 16.6667C5.00002 15.7462 4.25383 15 3.33335 15C2.41288 15 1.66669 15.7462 1.66669 16.6667C1.66669 17.5871 2.41288 18.3333 3.33335 18.3333Z"
                            stroke="black"
                            stroke-width="0.833333"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                       <span className="fs-11 status-badge recommended">Low</span>
                    </div>

                <div className="d-flex justify-content-between align-items-baseline mb-3">
                    
                  <div>
                    <h6 className="fw-bold mb-1">
                  
                      Generic Claims to Avoid
                    </h6>
                  </div>
                 
                </div>

                <ul className="list-unstyled mb-0">
                  {[
                    "Prioritize clarity and practical guidance.",
                    "Maintain a professional yet approachable tone approachable tone.",
                    "Emphasize honest, personalized partnership.",
                    "Highlight business outcomes and tailored solutions.",
                    "Maintain a professional yet approachable tone.",
                    "Maintain a professional yet approachable tone.",
                    "Maintain a professional yet approachable tone approachable tone.",
                    "Maintain a professional yet approachable tone.",
                    "Maintain a professional yet approachable tone approachable tone.",
                    
                  ].map((item, i) => (
                    <li key={i} className="d-flex fs-16 align-items-start mb-2">
                      <span className="text-success me-2">✓</span>
                      <span className="small">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

         {/* Brand Positioning start */}







        </div>

        <CardLoader refreshKey={refreshKey} />
      </div>
    </div>
  );
};

export default WebsiteAnalysisSetup;
