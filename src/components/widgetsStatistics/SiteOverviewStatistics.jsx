    import React, {useState} from 'react'
    import { Link } from 'react-router-dom'
    import { FiEye, FiLink, FiMoreVertical, FiPlay, FiPlus, FiTrash2 } from 'react-icons/fi'
    import { crmStatisticsData } from '@/utils/fackData/crmStatisticsData'
    import getIcon from '@/utils/getIcon'
    import "react-tooltip/dist/react-tooltip.css";
    import { Tooltip } from "react-tooltip";



    const SiteOverviewStatistics = () => {

        const [hoveredId, setHoveredId] = useState(null);

        return (
            <>

            <div className="col-xxl-12 col-md-12 mt-2 mb-5 d-flex justify-content-end align-items-center">
               <div className="card-footer border-0">
                                                           <Link to="reports/sales" className="custom-btn" style={{width: "fit-content"}}>  <FiPlus size={14} className='me-2' /> Add Project</Link>
                                                       </div>
            </div>
            
                {
                    crmStatisticsData.map(({ id, completed_number, progress, progress_info, title, total_number, icon }) => (
                        <div key={id} className="col-xxl-3 col-md-6">
                            <div className="card stretch stretch-full short-info-card">
                                <div className="card-body" onMouseEnter={() => setHoveredId(id)}
  onMouseLeave={() => setHoveredId(null)}
  style={{ position: "relative" }}>
                                
                                    <div className="d-flex align-items-start justify-content-between mb-1">
                                        <div className="avatar-xxl bg-gray-200 icon" style={{marginTop: "-33px", overflow: "hidden",
    borderRadius: "25px",
    /* cursor: pointer; */
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "700",
    backgroundColor: "#ffffff",
    border: "1px solid #dcdee4",}}>
                                                {/* {React.cloneElement(getIcon(icon), { size: "16" })} */}
                                                <img style={{width: "65px", height: "65px"}} src={icon} alt=""/>
                                            </div>
                                       
                                        <Link
    to="#"
    data-tooltip-id="connect-tip"
    data-tooltip-content="Delete"
    style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 36,
        height: 36,
        borderRadius: "10px",
        backgroundColor: "#fef2f2", // soft red
        color: "#dc2626",           // danger red
        textDecoration: "none",
        transition: "all 0.2s ease",
        opacity: hoveredId === id ? 1 : 0,
    transform: hoveredId === id ? "scale(1)" : "scale(0.9)",
    pointerEvents: hoveredId === id ? "auto" : "none",
    }}
    onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "#fee2e2";
        e.currentTarget.style.color = "#b91c1c";
        e.currentTarget.style.transform = "scale(1.08)";
    }}
    onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "#fef2f2";
        e.currentTarget.style.color = "#dc2626";
        e.currentTarget.style.transform = "scale(1)";
    }}
    onClick={(e) => {
        e.preventDefault();
        // handleDelete(id);
    }}
    >
    <FiTrash2 className="fs-16" />
    </Link>
    <Tooltip id="connect-tip" place="top" />

                                    </div>

                                     <div className="d-flex gap-0 align-items-center justify-content-center mt-0">
                                        
                                            <div>
                                                {/* <h3 className="fs-16 fw-semibold text-truncate-1-line" style={{marginLeft: "0px", textAlign: "left"}}>{title}</h3> */}
                                                  <Link to="seo/search" className="fs-16 fw-semibold text-truncate-1-line" style={{marginTop: "0px", marginBottom: "20px"}}>{title}</Link>
                                                {/* <div className="fs-4 fw-bold text-dark">
                                                    <span className="counter">{completed_number ? completed_number + "/" : ""}</span>
                                                    <span className="counter">{total_number}</span>
                                                </div> */}
                                            
                                            </div>
                                        </div>

                                    {/* <div className=" d-flex align-items-center justify-content-center" style={{backgroundColor: "#eee", padding: "8px"}}>
                                        <span className="fs-14 text-dark">{completed_number}</span>
                                    </div> */}


                                    <div className="pt-4">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <span></span>
                                        </div>

                                        <div className="d-flex align-items-center justify-content-between">
                                            <Link to="seo/search" className="fs-12 fw-medium text-muted text-truncate-1-line">{title}</Link>
                                            <div className="w-100 text-end">
                                                {/* <span className="fs-12 text-dark">{progress_info}</span>{" "} */}
                                                <span className="fs-11 text-muted">({progress})</span>
                                            </div>
                                        </div>
                                        <div className="progress mt-2 ht-3">
                                            <div className={`progress-bar progress-${id}`} role="progressbar" style={{ width: progress }}></div>
                                        </div>
                                    </div>

                                    <div className='d-flex justify-content-between align-items-center mt-4'>
                                        <div className="d-flex align-items-center gap-3">
                                        <Link
    to="#"
    data-tooltip-id="connect-tip"
    data-tooltip-content="Connect"
    style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 36,
        height: 36,
        borderRadius: "10px",
        backgroundColor: "#ecfeff", // soft cyan
        color: "#0891b2",           // cyan-blue
        textDecoration: "none",
        transition: "all 0.2s ease",
        opacity: hoveredId === id ? 1 : 0,
    transform: hoveredId === id ? "scale(1)" : "scale(0.9)",
    pointerEvents: hoveredId === id ? "auto" : "none",
    }}
    onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "#cffafe";
        e.currentTarget.style.color = "#0e7490";
        e.currentTarget.style.transform = "scale(1.08)";
    }}
    onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "#ecfeff";
        e.currentTarget.style.color = "#0891b2";
        e.currentTarget.style.transform = "scale(1)";
    }}
    >
    <FiLink className="fs-16" />
    </Link>

    <Link
    to="seo/search"
    data-tooltip-id="connect-tip"
    data-tooltip-content="View"
    style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 36,
        height: 36,
        borderRadius: "12px",
        backgroundColor: "#f1f5f9", // soft gray
        color: "#475569",           // slate color
        textDecoration: "none",
        transition: "all 0.2s ease",
        opacity: hoveredId === id ? 1 : 0,
    transform: hoveredId === id ? "scale(1)" : "scale(0.9)",
    pointerEvents: hoveredId === id ? "auto" : "none",
    }}
    onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "#e2e8f0";
        e.currentTarget.style.color = "#0f172a";
        e.currentTarget.style.transform = "scale(1.05)";
    }}
    onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "#f1f5f9";
        e.currentTarget.style.color = "#475569";
        e.currentTarget.style.transform = "scale(1)";
    }}
    >
    <FiEye className="fs-16" />
    </Link>


    

    {/* <Link to="#" className="lh-1 text-danger">
        <FiTrash2 className="fs-16" title="Delete" />
    </Link> */}
    </div>

    <div className="mt-0 d-flex align-items-center justify-content-end">
                                        <span className="fs-14 text-dark">Created: {total_number}</span>
                                    </div>
                                    </div>

                                
                                </div>
                            </div>
                        </div>
                    ))
                }
            </>
        )
    }

    export default SiteOverviewStatistics

