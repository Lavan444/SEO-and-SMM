import React, { useState, Fragment } from "react";
import CardHeader from "@/components/shared/CardHeader";
import useCardTitleActions from "@/hooks/useCardTitleActions";
import CardLoader from "@/components/shared/CardLoader";
import TimeStatistics from "../widgetsStatistics/TimeStatistics";
import TechnicalChecks from "./../widgetsList/TechnicalChecks";
import {
  FiMonitor,
  FiSmartphone,
  FiTrendingDown,
  FiTrendingUp,
} from "react-icons/fi";
import ProjectTimeMiscellaneous from "../widgetsMiscellaneous/ProjectTimeMiscellaneous";
import TimeLoggedChart from "../widgetsCharts/TimeLoggedChart";
import LeadsOverviewChart from "../widgetsCharts/LeadsOverviewChart";
import PaymentRecordChart from "../widgetsCharts/PaymentRecordChart";
// import GeneratorsTab from "./GeneratorsTab";
// import LinksCrawlabilityTab from "./LinksCrawlabilityTab";
// import TopRecommendationsTab from "./TopRecommendationsTab";




const TechanicalAuditReport = ({ title }) => {
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
  const [activeTab, setActiveTab] = useState("mobile");

  const score = 23;

  const MetricCard = ({ title, value }) => {
    return (
      <div className="col-md-6">
        <div className="border rounded-3 p-3 h-100 bg-light">
          <small className="text-muted d-block mb-1">{title}</small>
          <h6 className="mb-0 text-danger">{value}</h6>
        </div>
      </div>
    );
  };

  return (
    <div className="col-xxl-12 col-lg-6">
      <div
        className={`card border-0 stretch stretch-full ${isExpanded ? "card-expand" : ""} ${refreshKey ? "card-loading" : ""} shadow-none`}
        style={{ background: "transparent" }}
      >
        {/* <CardHeader title={title} refresh={handleRefresh} remove={handleDelete} expanded={handleExpand} /> */}
        <div className="card-body custom-card-action p-3">
        <div className="row">

          <div className="col-8">

      


             


          </div>


          <div className="col-4 card p-3">
                  <div className="d-flex mb-4">
                    <div className="btn-group bg-light rounded-pill p-1">
                      <button
                        className={`btn btn-sm rounded-pill ${activeTab === "mobile" ? "btn-white shadow-sm" : ""}`}
                        onClick={() => setActiveTab("mobile")}
                      >
                        <FiSmartphone className="me-1" />
                        Mobile
                      </button>
                      <button
                        className={`btn btn-sm rounded-pill ${activeTab === "desktop" ? "btn-white shadow-sm" : ""}`}
                        onClick={() => setActiveTab("desktop")}
                      >
                        <FiMonitor className="me-1" />
                        Desktop
                      </button>
                    </div>
                  </div>

                  <div className="row align-items-center">
                    {/* Score Circle */}
                    <div className="col-lg-12 text-center">
                      <div className="position-relative d-inline-block">
                        <svg width="160" height="160">
                          <circle
                            cx="80"
                            cy="80"
                            r="70"
                            stroke="#e6e6e6"
                            strokeWidth="12"
                            fill="none"
                          />
                          <circle
                            cx="80"
                            cy="80"
                            r="70"
                            stroke="#dc3545"
                            strokeWidth="12"
                            fill="none"
                            strokeDasharray={440}
                            strokeDashoffset={440 - (440 * score) / 100}
                            strokeLinecap="round"
                            transform="rotate(-90 80 80)"
                          />
                        </svg>

                        <div className="position-absolute top-50 start-50 translate-middle text-center">
                          <h3>{activeTab === "mobile" ? 23 : 78}</h3>
                          <small className="text-muted">/100</small>
                        </div>
                      </div>

                      <p className="mt-3 text-muted">
                        Core Web Vitals Assessment: <strong>Failed</strong>
                      </p>
                    </div>

                    {/* Metrics */}
                    <div className="col-lg-12">
                      <div className="row g-3">
                        <MetricCard
                          title="Largest Contentful Paint (LCP)"
                          value="3.2s"
                        />
                        <MetricCard
                          title="Interaction to Next Paint (INP)"
                          value="N/A"
                        />
                        <MetricCard
                          title="Cumulative Layout Shift (CLS)"
                          value="0.02s"
                        />
                        <MetricCard
                          title="First Contentful Paint (FCP)"
                          value="3.1s"
                        />
                        <MetricCard
                          title="Time to First Byte (TTFB)"
                          value="1.8s"
                        />
                      </div>
                    </div>
                  </div>
          </div>

            
              </div>
        </div>
        <CardLoader refreshKey={refreshKey} />
      </div>
    </div>
  );
};

export default TechanicalAuditReport;


