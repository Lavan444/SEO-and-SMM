import { Icon } from "lucide-react";
import React from "react";
import { FiArrowDownCircle, FiArrowUpCircle, FiPlus } from "react-icons/fi";
import Image from "../../../public/images/thinking-1.png"
import {
  DashboardIcon,
  SeoIcon,
  ProgrammaticSeoIcon,
  EcommerceSeoIcon,
  LocalSeo,
  Orm,
  BoostPosts,
  Campaigns,
  Keyword,
  GoogleSearchConsole,
  GoogleAnalytics,
  GoogleMyBusiness,
  Wordpress,
} from "../../../src/utils/fackData/Icon.jsx";

const dashboardContent = [
  {
    title: "Add website",
    title2: "Enter your primary domain for analysis.",
    Icon: "1",
    bgColor: "#ffeeeb",
    iconColor: "#e84e34",
  },
  {
    title: "Connect Integrations",
    title2: "Sync GSC, GA4, and search data.",
    Icon: "2",
    bgColor: "#e8edfd",
    iconColor: "#0e32a3",
  },
  {
    title: "Run Ai Analysis",
    title2: "Our agents perform deep crawl intelligence.",
    Icon: "3",
    bgColor: "#edfff3",
    iconColor: "#1eba57",
  },
  {
    title: "View Reports",
    title2: "Get actionable SEO and LLM",
    Icon: "4",
    bgColor: "#fff9e6",
    iconColor: "#c89800",
  },
];

const data = [
  {
    title: "Techanical SEO",
    title2: "SMM",
    Icon: SeoIcon,
    bgColor: "#e8edfd",
    iconColor: "#0e32a3",
  },
  {
    title: "On-Page SEO",
    title2: "Boost Post",
    Icon: ProgrammaticSeoIcon,
    bgColor: "#e6f7f1",
    iconColor: "#0f9d58",
  },
  {
    title: "Programmatic SEO",
    title2: "Campaigns",
    Icon: ProgrammaticSeoIcon,
    bgColor: "#fff4e6",
    iconColor: "#f57c00",
  },
  {
    title: "Ecommerce SEO",
    title2: "KeyWord Research",
    Icon: EcommerceSeoIcon,
    bgColor: "#fde8f3",
    iconColor: "#c2185b",
  },
  {
    title: "Local SEO",
    title2: "Content Planner",
    Icon: LocalSeo,
    bgColor: "#f3e8fd",
    iconColor: "#6a1b9a",
  },
];

const dataSmm = [
  {
    title: "Techanical SEO",
    title2: "SMM",
    Icon: Orm,
    bgColor: "#e8edfd",
    iconColor: "#0e32a3",
  },
  {
    title: "On-Page SEO",
    title2: "Boost Post",
    Icon: BoostPosts,
    bgColor: "#e6f7f1",
    iconColor: "#0f9d58",
  },
  {
    title: "Programmatic SEO",
    title2: "Campaigns",
    Icon: Campaigns,
    bgColor: "#fff4e6",
    iconColor: "#f57c00",
  },
  {
    title: "Ecommerce SEO",
    title2: "KeyWord Research",
    Icon: Keyword,
    bgColor: "#fde8f3",
    iconColor: "#c2185b",
  },
  {
    title: "Local SEO",
    title2: "Content Planner",
    Icon: Wordpress,
    bgColor: "#f3e8fd",
    iconColor: "#6a1b9a",
  },
];
const SeoDashboard = () => {
  return (
    <>
      <div className="row align-items-end">
        <div className="col-xxl-2">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{
              width: "250px",
              height: "250px",
              background: "#ffffff",
              border: "1px dashed #A3A3A3",
              borderRadius: "15px",
            }}
          >
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div
                className="d-flex flex-column justify-content-center align-items-center"
                style={{
                  width: "60px",
                  height: "60px",
                  backgroundColor: "#4E6BFF",
                  borderRadius: "10px",
                }}
              >
                <FiPlus size={30} color="#fff" />
              </div>
              <p className="mt-3 fs-14 fw-bold mb-0">Start a New Project</p>
            </div>
          </div>
        </div>

        <div className="col-xxl-4">
          <div className="d-flex flex-column align-items-center justify-content-center">
            {/* Speech bubble */}
            <div
              style={{
                background: "#fff",
                color: "#2563eb",
                fontWeight: 600,
                fontSize: "14px",
                borderRadius: "18px",
                padding: "14px 22px",
                marginBottom: "10px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                position: "relative",
                maxWidth: "360px",
                textAlign: "center",
                marginBottom: "30px"
              }}
            >
              "Hello! Your workspace is ready for its first project. Shall we begin?"
              <span
                style={{
                  content: "''",
                  position: "absolute",
                  bottom: "-18px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 0,
                  height: 0,
                  borderLeft: "14px solid transparent",
                  borderRight: "14px solid transparent",
                  borderTop: "18px solid #fff",
                  zIndex: 1,
                }}
              />
            </div>
            <img src="/images/thinking-1.png" style={{width: "auto"}} alt="logo" className="logo logo-lg" />
          </div>
        </div>

        <div className="col-xxl-6">
          <h1 className="fw-bold">Welcome to Digi Suite Intelligence Hub</h1>
          <p className="fs-14 text-dark">
            Build, track, and optimize with Digit Suite's integrated Al
            ecosystem. Connect your first asset to start receiving real-time
            insights.
          </p>
          <div className="row mt-5">
            {dashboardContent.map(
              ({ title, title2, Icon, bgColor, iconColor }, index) => {
                return (
                  <div
                    key={index}
                    className="col-xxl-6 col-lg-4 col-md-6 leads-report-card mt-1"
                  >
                    <div
                      className="card stretch stretch-full p-2"
                      style={{
                       background: "transparent", boxShadow: "none"
                      }}
                    >
                      <div
                        className="card-body"
                        style={{ padding: "36px 15px",  border: `1px solid ${iconColor}`,
                        background: bgColor, borderRadius: "10px",}}
                      >
                        {/* <div className="fs-12 fw-medium text-muted mb-3">{title}</div> */}
                        <span
                          style={{
                            color: "#ffffff",
                            padding: " 7px 14px",
                            background: iconColor,
                            borderRadius: "8px",
                            position: "absolute",
                            fontSize: "18px",
                            fontWeight: "900",
                            top: "-13px",
                            left: "-9px",
                          }}
                        >
                          {Icon}
                        </span>
                        <div className="lh-base">
                          <h6 style={{ color: iconColor }}>{title}</h6>
                        </div>

                        <div className="">
                          <p className="mb-0">{title2}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              },
            )}
          </div>
        </div>
      </div>

      <h5 className="card-title text-dark mb-3 mt-5">SEO</h5>
      {data.map(({ title, Icon, bgColor, iconColor }, index) => {
        return (
          <div key={index} className="col col-lg col-md-6 col-sm-12 leads-report-card">
            <div className="card stretch stretch-full">
              <div className="card-body">
                {/* <div className="fs-12 fw-medium text-muted mb-3">{title}</div> */}
                <div className="hstack justify-content-center lh-base">
                  <h3
                    style={{
                      background: bgColor,
                      padding: "6px 14px",
                      margin: "0px",
                      color: iconColor,
                      borderRadius: "15px",
                      marginTop: "10px",
                    }}
                  >
                    <Icon size={22} color={iconColor} />
                  </h3>
                </div>

                <div className="text-center mt-4">
                  <h6 style={{ color: iconColor }}>{title}</h6>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <h5 className="card-title text-dark mb-3">SMM</h5>
      {dataSmm.map(({ title, title2, Icon, bgColor, iconColor }, index) => {
        return (
          <div key={index} className="col col-lg col-md-6 col-sm-12 leads-report-card">
            <div className="card stretch stretch-full">
              <div className="card-body">
                {/* <div className="fs-12 fw-medium text-muted mb-3">{title}</div> */}
                <div className="hstack justify-content-center lh-base">
                  <h3
                    style={{
                      background: bgColor,
                      padding: "6px 14px",
                      margin: "0px",
                      color: iconColor,
                      borderRadius: "15px",
                      marginTop: "10px",
                    }}
                  >
                    <Icon />
                  </h3>
                </div>

                <div className="text-center mt-4">
                  <h6 style={{ color: iconColor }}>{title2}</h6>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default SeoDashboard;
