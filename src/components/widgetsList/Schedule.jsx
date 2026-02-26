import React from 'react'
import { Link } from 'react-router-dom'
import CardHeader from '@/components/shared/CardHeader'
import { upcomingScheduleList } from '@/utils/fackData/upcomingScheduleList'
import ImageGroup from '@/components/shared/ImageGroup'
import useCardTitleActions from '@/hooks/useCardTitleActions'
import CardLoader from '@/components/shared/CardLoader'
import { FiExternalLink, FiGlobe, FiUser } from 'react-icons/fi'
// import { varunLogo } from "../../../public/images/pranathiss-logo.webp";

const Schedule = ({ title }) => {
    const { refreshKey, isRemoved, isExpanded, handleExpand } = useCardTitleActions();

    if (isRemoved) {
        return null;
    }
    return (
        <div className="col-xxl-4">
            <div className={`card stretch stretch-full ${isExpanded ? "card-expand" : ""} ${refreshKey ? "card-loading" : ""}`}>
                {/* <CardHeader title={title} expanded={handleExpand} /> */}

                <div className="card-body">
                    {
                        upcomingScheduleList.map(({ date, id, schedule_name, team_members, color }) => {
                            return (
                                <div key={id} className="p-1 pt-3 schedule-card d-flex align-items-baseline justify-content-between">

                                                    <div>
                                                        <img
                                                        src="/images/bharat-paroll-favi.webp"
                                                        alt="Varun Logo"
                                                        style={{ width: 'auto', height: '60px' }}
                                                        />
                                                    </div>



                                            <div className="d-flex flex-column text-dark mt-3">
                                                <h6 to="#" className="fs-16 mb-1 ">{schedule_name}</h6>
                                               <div className="d-flex align-items-center gap-1 mt-2 text-muted text-primary">
                                               
        <FiGlobe size={14} className="me-1" />
        <span className="fs-14 fw-normal">{date.time}</span>
         <FiExternalLink size={16} className="opacity-75 ms-2" />
    </div>
                                            </div>

                                             <div className="d-flex text-dark">
                                                {/* <h6 to="#" className="fs-16 fw-bold mb-2 ">{color}:</h6> */}
                                                <span className="fs-14 fw-normal text-muted mt-0 ms-2" style={{background: "#bbf7d0",
    padding: "1px 12px",
    borderRadius: "30px",
    color:" #1d7257 !important"}}>Website Analysis Completed</span>
                                            </div>

                                   
                                </div>
                            )
                        })
                    }

                             <div class="mt-5 d-flex align-items-center justify-content-between"><span class="fs-14 text-dark">Created: Jan 28, 2026, 05:35 PM</span>
                             
                             <span style={{border: "1px solid #eee",
    padding: "2px 18px",
    borderRadius: "30px"}}><FiUser size={14} className="me-1" /> Bruce Lee</span></div>

                </div>
               
                <CardLoader refreshKey={refreshKey} />
            </div>
        </div>
    )
}

export default Schedule
