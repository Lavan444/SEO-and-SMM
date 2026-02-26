import React from "react";
import CardHeader from "@/components/shared/CardHeader";
import CardLoader from "@/components/shared/CardLoader";
import useCardTitleActions from "@/hooks/useCardTitleActions";
import { FiTrash2 } from "react-icons/fi";
import InputTopLabel from "../shared/InputTopLabel";
import InputTopLabelSecure from "../shared/InputTopLabelSecure";

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
];

const ProfileSetting = ({ title }) => {
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
    <div className="col-xxl-12" style={{ padding: "30px" }}>
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
            <div className="card-header ms-3">
              <h5 className="card-title text-dark mb-0">Profile Setting</h5>
              <small className="text-muted">
                Manage your Personal information and security preferences
              </small>
            </div>

            <div className="col-xxl-10 col-md-6 ">
              <div className="p-4 h-100 card">
                <div className="d-flex justify-content-start align-items-start">
                  <a href="#" data-bs-toggle="dropdown" role="button">
                    <img
                      src="/images/avatar/1.png"
                      alt="user-image"
                      className="img-fluid user-avtar me-0"
                      style={{
                        width: "100px",
                        borderRadius: "50%",
                        padding: "10px",
                        paddingTop: "0px",
                      }}
                    />
                  </a>
                  <div className="ms-2">
                    <h5 className="card-title text-dark mb-0">
                      Profile Setting
                    </h5>
                    <p className="text-muted m-0">
                      Manage your Personal information and security preferences
                    </p>
                    <div className="d-flex mt-3">
                      <button className="custom-btn border-0">
                        <svg
                          width="24"
                          height="24"
                          className="me-2"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4 12V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V12M16 6L12 2M12 2L8 6M12 2V15"
                            stroke="white"
                            stroke-linecap="line"
                            stroke-linejoin="round"
                          />
                        </svg>
                        Upload
                      </button>
                      <button className="transparent-btn border-1 ms-3">
                        <FiTrash2 size={18} className="me-2 mb-1" />
                        Delete
                      </button>
                    </div>
                  </div>
                </div>

                <div className="row mt-4">
                  <div className="col-6 mt-2">
                    <InputTopLabel
                      label={"Full Name"}
                      placeholder={"BruceLee"}
                      info={"Your full name as it appears on your profile"}
                    />
                  </div>
                  <div className="col-6 mt-2">
                    <InputTopLabel
                      label={"Email"}
                      placeholder={"bruce.lee@example.com"}
                      info={"Your email address"}
                    />
                  </div>
                  <div className="col-6 mt-2">
                    <InputTopLabel
                      label={"Phone Number"}
                      placeholder={"+1 123 456 7890"}
                      info={"Your phone number for contact purposes"}
                    />
                  </div>

                  <div className="col-6 mt-2">
                    <InputTopLabel
                      label={"Company"}
                      placeholder={"Bharat Payroll"}
                      info={"Your company name"}
                    />
                  </div>
                </div>

                <button
                  className="custom-btn border-0 mt-4"
                  style={{ width: "fit-content" }}
                >
                  Save Changed
                </button>

                <div class="p-3 border border rounded-3 schedule-card mt-4">
                  <div class="d-flex justify-content-between">
                    <div class="d-flex align-items-center gap-3">
                      <div class="wd-50 ht-50 lh-1 d-flex align-items-center justify-content-center flex-column border rounded-2">
                       <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 12L11 14L15 9.99996M20 13C20 18 16.5 20.5 12.34 21.95C12.1222 22.0238 11.8855 22.0202 11.67 21.94C7.5 20.5 4 18 4 13V5.99996C4 5.73474 4.10536 5.48039 4.29289 5.29285C4.48043 5.10532 4.73478 4.99996 5 4.99996C7 4.99996 9.5 3.79996 11.24 2.27996C11.4519 2.09896 11.7214 1.99951 12 1.99951C12.2786 1.99951 12.5481 2.09896 12.76 2.27996C14.51 3.80996 17 4.99996 19 4.99996C19.2652 4.99996 19.5196 5.10532 19.7071 5.29285C19.8946 5.48039 20 5.73474 20 5.99996V13Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                      </div>
                      <div class="text-dark">
                        <a
                          class="fw-500 mb-0 text-truncate-1-line fs-18"
                          href="/widgets/lists"
                        >
                          Two Factor Authentication
                        </a>
                        <span class="fs-14 fw-normal text-muted text-truncate-1-line">
                         Secure Your Account with Two-Factor Authentication 2FA Verification
                        </span>
                      </div>
                    </div>
                    <div class="img-group lh-0 ms-3 justify-content-start d-none d-sm-flex">
                     
                    </div>
                  </div>
                </div>

                
                <div class="p-3 border border-danger rounded-3 schedule-card mt-2 bg-soft-danger">
                  <div class="d-flex justify-content-between">
                    <div class="d-flex align-items-start gap-3">
                      <div class="wd-50 ht-50 lh-1 d-flex align-items-center justify-content-center flex-column rounded-2">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 14V21M7 14V21M17 3V6M7 3V6M10 14L2.3 6.3M14 6L21.7 13.7M8 6L16 14M3 6H21C21.5523 6 22 6.44772 22 7V13C22 13.5523 21.5523 14 21 14H3C2.44772 14 2 13.5523 2 13V7C2 6.44772 2.44772 6 3 6Z" stroke="red" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


                      </div>
                      <div class="text-dark">
                        <a
                          class="fw-500 mb-0 text-truncate-1-line fs-18 text-danger"
                          href="/widgets/lists"
                        >
                          Danger Zone
                        </a>
                        <span class="fs-14 fw-normal text-muted text-truncate-1-line text-danger">
                         Deleting Your Account is permanent and cannot be undone. All your projects and data will be lost.
                        </span>

                        <button className="transparent-btn border-danger mt-3 text-danger">
                          <FiTrash2 size={18} className="me-2 mb-1" /> Delete Account
                        </button>
                      </div>
                    </div>
                    <div class="img-group lh-0 ms-3 justify-content-start d-none d-sm-flex">
                     
                    </div>
                  </div>
                </div>


              </div>
            </div>
            {/* 2️⃣ Language Guidelines */}
            {/* <div className="col-xxl-4 col-md-6">
              <div className="card p-4 shadow-sm rounded-4">
                <h6 className="fw-bold mb-3">Account Status</h6>

                <ul className="list-unstyled mb-0">
                  <li className="d-flex fs-16 align-items-start mb-2">
                    <span className="text-success me-2">✓</span>
                    <span className="small">Verified Email</span>
                  </li>
                  <li className="d-flex fs-16 align-items-start mb-2">
                    <span className="text-success me-2">✓</span>
                    <span className="small">Active Subscription</span>
                  </li>
                  <li className="d-flex fs-16 align-items-start mb-2">
                    <span className="text-success me-2">✓</span>
                    <span className="small">Active Subscription</span>
                  </li>
                  <li className="d-flex fs-16 align-items-start mb-2">
                    <span className="me-2" style={{display: 'inline-flex', alignItems: 'center'}}>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="9" cy="9" r="7" stroke="#f7b924" strokeWidth="2" strokeDasharray="2 3" fill="none" />
                      </svg>
                    </span>
                    <span className="small">Incomplete 2FA</span>
                  </li>
                </ul>

                <div style={{borderTop: "1px solid #eee", marginTop: "10px"}}>
                   <h6 className="fw-bold mb-0 mt-2">Account Status</h6>
                    <small className="text-muted">
                Feb 19, 2026
              </small>
                </div>


              </div>
            </div> */}
          </div>


         
        </div>

            <div className="card-body mt-5">
          <div className="row g-4">
            <div className="card-header ms-3">
              <h5 className="card-title text-dark mb-0">Change Password</h5>
              <small className="text-muted">
                Ensure Your account is using a long, random password to stay secure.
              </small>
            </div>

            <div className="col-xxl-10 col-md-6 ">
              <div className="p-4 h-100 card">
               

                <div className="row mt-2">
                  <div className="col-6 mt-2">
                      
                      

                    <InputTopLabelSecure
                      label="Current Password"
                      type="password"
                      placeholder="**********"
                      isRequired
                    />

                  </div>
                  <div className="col-6 mt-2">
                     <InputTopLabelSecure
                      label="New Password"
                      type="password"
                      placeholder="**********"
                      isRequired
                    />
                  </div>
                  <div className="col-6 mt-2">
                    <InputTopLabelSecure
                      label="Re-Enter Password"
                      type="password"
                      placeholder="**********"
                      isRequired
                    />
                  </div>

                  
                </div>

                <button
                  className="custom-btn border-0 mt-4"
                  style={{ width: "fit-content" }}
                >
                  Save Changed
                </button>

               

                
           


              </div>
            </div>
          
          </div>


         
        </div>

           <div className="card-body mt-5">
          <div className="row g-4">
            <div className="card-header ms-3">
              <h5 className="card-title text-dark mb-0">Data Management</h5>
              <small className="text-muted">
                Control your organisation Data and portability
              </small>
            </div>

            <div className="col-xxl-5 col-md-6 ">
              <div className="p-4 h-100 card">
               

                <div className="row mt-2">
                  <div className="col-6 mt-2">
                      
                      

                    <InputTopLabelSecure
                      label="Current Password"
                      type="password"
                      placeholder="**********"
                      isRequired
                    />

                  </div>
                  <div className="col-6 mt-2">
                     <InputTopLabelSecure
                      label="New Password"
                      type="password"
                      placeholder="**********"
                      isRequired
                    />
                  </div>
                  <div className="col-6 mt-2">
                    <InputTopLabelSecure
                      label="Re-Enter Password"
                      type="password"
                      placeholder="**********"
                      isRequired
                    />
                  </div>

                  
                </div>

                <button
                  className="custom-btn border-0 mt-4"
                  style={{ width: "fit-content" }}
                >
                  Save Changed
                </button>

               

                
           


              </div>
            </div>

               <div className="col-xxl-5 col-md-6 ">
              <div className="p-4 h-100 card">
               

                <div className="row mt-2">
                  <div className="col-6 mt-2">
                      
                      

                    <InputTopLabelSecure
                      label="Current Password"
                      type="password"
                      placeholder="**********"
                      isRequired
                    />

                  </div>
                  <div className="col-6 mt-2">
                     <InputTopLabelSecure
                      label="New Password"
                      type="password"
                      placeholder="**********"
                      isRequired
                    />
                  </div>
                  <div className="col-6 mt-2">
                    <InputTopLabelSecure
                      label="Re-Enter Password"
                      type="password"
                      placeholder="**********"
                      isRequired
                    />
                  </div>

                  
                </div>

                <button
                  className="custom-btn border-0 mt-4"
                  style={{ width: "fit-content" }}
                >
                  Save Changed
                </button>

               

                
           


              </div>
            </div>
          
          </div>


         
        </div>

        <CardLoader refreshKey={refreshKey} />
      </div>
    </div>
  );
};

export default ProfileSetting;
