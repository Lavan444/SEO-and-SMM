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
import GeneratorsTab from "./GeneratorsTab";
import LinksCrawlabilityTab from "./LinksCrawlabilityTab";
import TopRecommendationsTab from "./TopRecommendationsTab";

const invoiceData = [
  { status: "Draft", count: 5, percentage: 23.42, color: "primary" },
  { status: "Not Sent", count: 22, percentage: 33.86, color: "warning" },
  { status: "Unpaid", count: 8, percentage: 38.57, color: "danger" },
  { status: "Overdue", count: 4, percentage: 27.65, color: "teal" },
  { status: "Paid", count: 34, percentage: 76.89, color: "success" },
];
const estimateData = [
  { status: "Draft", count: 6, percentage: 20.42, color: "primary" },
  { status: "Not Sent", count: 32, percentage: 42.86, color: "warning" },
  { status: "Unpaid", count: 14, percentage: 55.57, color: "danger" },
  { status: "Overdue", count: 8, percentage: 35.65, color: "teal" },
  { status: "Paid", count: 30, percentage: 84.89, color: "success" },
];
const proposalData = [
  { status: "Draft", count: 2, percentage: 15.42, color: "primary" },
  { status: "Not Sent", count: 4, percentage: 30.86, color: "warning" },
  { status: "Unpaid", count: 16, percentage: 40.57, color: "danger" },
  { status: "Overdue", count: 9, percentage: 25.65, color: "teal" },
  { status: "Paid", count: 20, percentage: 65.89, color: "success" },
];

const tabData1 = [
  {
    id: 1,
    title: "Page Speed Score",
    time: {
      hour: 54,
      minute: 35,
    },
    progress: "Good",
    trendText: "Up from last week",
  },

  {
    id: 2,
    title: "Overtime",
    time: {
      hour: 12,
      minute: 40,
    },
    progress: "Bad",
    trendText: "Down from last week",
  },
  {
    id: 3,
    title: "Billable",
    time: {
      hour: 35,
      minute: 30,
    },
    progress: "Good",
    trendText: "Up from last week",
  },
  {
    id: 4,
    title: "Unbillable",
    time: {
      hour: 10,
      minute: 25,
    },
    progress: "Bad",
    trendText: "Down from last week",
  },
];

const InvoiceOverview = ({ title }) => {
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
        className={`card border-0 stretch stretch-full ${isExpanded ? "card-expand" : ""} ${refreshKey ? "card-loading" : ""}`}
        style={{ background: "transparent" }}
      >
        {/* <CardHeader title={title} refresh={handleRefresh} remove={handleDelete} expanded={handleExpand} /> */}
        <div className="card-body custom-card-action p-0">
          <ul className="nav-tab-items-wrapper nav nav-justified invoice-overview-tab-item">
            <li className="nav-item">
              <a
                href="#"
                className="nav-link active"
                data-bs-toggle="tab"
                data-bs-target="#invoiceTab"
              >
                Overview
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#estimateTab"
              >
                Techanical Audit
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#proposalTab"
              >
                Generators
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#proposalTab2"
              >
                Links & Crawler
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#proposalTab3"
              >
                Recommendations
              </a>
            </li>
            {/* <li className="nav-item">
                            <a href="#" className="nav-link" data-bs-toggle="tab" data-bs-target="#proposalTab4">Strategy & Action Plan</a>
                        </li> */}
          </ul>
          <div className="tab-content p-4">
            {/* ------------------ tab 1 start ------------------ */}
            <div
              className="tab-pane fade show active "
              id="invoiceTab"
              role="tabpanel"
              aria-labelledby="invoiceTab"
            >
              {/* <h6> Brand Voice Guidelines</h6>
                             <h3>TAb 1</h3> */}
              <div className="row">
                <div className="col-7">
                  <div className="row">
                    {tabData1.map(
                      ({ id, progress, time, title, trendText }) => {
                        const isTrendUp = trendText.startsWith("Up");
                        return (
                          <div key={id} className="col-xxl-6 col-md-6">
                            <div className="card stretch stretch-full time-sheet-card">
                              <div className="card-body d-flex justify-content-between align-items-start">
                                <div>
                                  <p className="fs-16 fw-semibold">
                                    {" "}
                                    <FiMonitor
                                      size={30}
                                      className="me-1 border rounded-3 p-1"
                                    />{" "}
                                    {title}
                                  </p>
                                  <h6>
                                    <span className="counter fw-600">
                                      {time.hour}
                                    </span>
                                    /{" "}
                                    <span className="counter">
                                      {time.minute}
                                    </span>
                                  </h6>
                                </div>

                                <div className="hstack gap-2 mt-0 justify-content-end align-items-start">
                                  <span
                                    className={`fs-11 ${
                                      isTrendUp
                                        ? "status-badge verified"
                                        : "status-badge recommended"
                                    }`}
                                    style={{ letterSpacing: "1px" }}
                                  >
                                    {/* <i className="fs-12 me-1">
                                                                                 {
                                                                                     isTrendUp ?
                                                                                         <FiTrendingUp />
                                                                                         :
                                                                                         <FiTrendingDown />
                                                                                 }
                                                                             </i> */}
                                    <span>{progress}</span>
                                  </span>
                                  {/* <span className="fs-11 text-muted">{trendText}</span> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      },
                    )}
                  </div>
                </div>

                <div className="col-5">
                  <div className="row">
                    <div className="col-12">
                      {/* <ProjectTimeMiscellaneous /> */}
                      <LeadsOverviewChart chartHeight={195} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-7">
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
                    <div className="col-lg-4 text-center">
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
                    <div className="col-lg-8">
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

                <div className="col-5">
                  {/* <TimeLoggedChart /> */}
                  <PaymentRecordChart />
                </div>
              </div>
            </div>
            {/* ------------------ tab 1 end ------------------ */}

            {/* ------------------ tab 2 start ------------------ */}

            <div
              className="tab-pane fade "
              id="estimateTab"
              role="tabpanel"
              aria-labelledby="invoiceTab"
            >
             <TechnicalChecks />
            </div>

            {/* ------------------ tab 2 end ------------------ */}

            {/* tab 3 start */}

            <div
              className="tab-pane fade "
              id="proposalTab"
              role="tabpanel"
              aria-labelledby="invoiceTab"
            >
             <GeneratorsTab />
            </div>

            {/* tab 3 end */}

            {/* tab 4 start */}

            <div
              className="tab-pane fade "
              id="proposalTab2"
              role="tabpanel"
              aria-labelledby="invoiceTab"
            >
             <LinksCrawlabilityTab />
            </div>

            {/* tab 4 end */}

            {/* tab 5 start */}

            <div
              className="tab-pane fade "
              id="proposalTab3"
              role="tabpanel"
              aria-labelledby="invoiceTab"
            >
            

            <TopRecommendationsTab />

            
            </div>

            {/* tab 5 end */}

            {/* tab 6 start */}

            <div
              className="tab-pane fade "
              id="proposalTab4"
              role="tabpanel"
              aria-labelledby="invoiceTab"
            >
              <h6> Brand Voice Guidesfsdflines</h6>
            </div>

            {/* tab 6 end */}
          </div>
        </div>
        <CardLoader refreshKey={refreshKey} />
      </div>
    </div>
  );
};

export default InvoiceOverview;

const InvoiceStatus = ({ status, count, percentage, color }) => {
  return (
    <div className="mt-4 pt-2">
      <div className="d-flex align-items-center justify-content-between">
        <a href="#" className="fs-12 fw-medium text-muted">
          {status} ({count})
        </a>
        <div className="fs-12 text-muted">{percentage}%</div>
      </div>
      <div className="progress mt-2 ht-3">
        <div
          className={`progress-bar bg-${color}`}
          role="progressbar"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
