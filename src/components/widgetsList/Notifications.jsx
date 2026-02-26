import React, { Fragment } from 'react'
import CardHeader from '@/components/shared/CardHeader';
import useCardTitleActions from '@/hooks/useCardTitleActions';
import CardLoader from '@/components/shared/CardLoader';
import getIcon from '@/utils/getIcon';
import { FiArrowRight, FiGlobe } from 'react-icons/fi';

const trendingItemsData = [
    { color: 'success', icon: 'feather-shopping-bag', title: 'Business Model', description: 'Codexon is an IT consulting and services firm specializing in strategy, technology solutions, and workforce support for businesses in key industries such as finance, healthcare, retail, manufacturing, and logistics.' },
   
];

const Notifications = ({ title }) => {

    const { refreshKey, isRemoved, isExpanded, handleRefresh, handleExpand, handleDelete } = useCardTitleActions();

    if (isRemoved) {
        return null;
    }


    
    return (
        <div className="col-xxl-6 col-lg-6">
            <div className={`card stretch stretch-full ${isExpanded ? "card-expand" : ""} ${refreshKey ? "card-loading" : ""}`}>
                {/* <CardHeader title={title} refresh={handleRefresh} remove={handleDelete} expanded={handleExpand} className="p-4" /> */}
                <div className="card-body custom-card-action">
                    {
                        trendingItemsData.map(({ color, icon, description, title }, index) => {
                            return (
                                <Fragment key={index}>
                                      <div className="p-0 pt-0 schedule-card d-flex align-items-baseline justify-content-between">
                                        
                                                                                           
                                        
                                        
                                                                                    <div className="d-flex flex-column text-dark mt-3">
                                                                                        <h6 to="#" className="fs-16 mb-0 "><FiGlobe size={34} className="me-1" style={{boxShadow:" 1px 0px 0px -4px #eee",
    border: "1px solid #eee",
    padding: "5px",
    borderRadius:"6px"}}/> Brand Analysis</h6>
                                                                                       <div className="d-flex align-items-center gap-1 mt-2 text-muted text-primary">
                                                                                       
                                                {/* <FiGlobe size={14} className="me-1" /> */}
                                                {/* <span className="fs-14 fw-normal">asdfsdf</span> */}
                                                 {/* <FiExternalLink size={16} className="opacity-75 ms-2" /> */}
                                            </div>
                                                                                    </div>
                                        
                                                                                     <div className="d-flex text-dark">
                                                                                        {/* <h6 to="#" className="fs-16 fw-bold mb-2 ">{color}:</h6> */}
                                                                                        <span className="fs-14 fw-normal text-muted mt-0 ms-2" style={{background: "#bbf7d0",
                                            padding: "1px 12px",
                                            borderRadius: "30px",
                                            color:" #1d7257 !important"}}>Analysis Complete</span>
                                                                                    </div>
                                        
                                                                           
                                                                        </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        
                                        <div className="d-flex align-items-center">
                                            {/* <div className={`avatar-text avatar-lg bg-soft-${color} text-${color} border-soft-${color} rounded me-3`}>
                                                {React.cloneElement(getIcon(icon), { size: "16" })}
                                            </div> */}
                                            <div>
                                                {/* <a href="#" className="text-dark fs-16">{title}</a> */}
                                                <p className="fs-14 text-muted mb-0">{description}</p>
                                            </div>
                                        </div>
                                        {/* <div className="avatar-text avatar-md">
                                            <FiArrowRight />
                                        </div> */}
                                    </div>
                                    {trendingItemsData.length - 1 === index ? "" : <hr className="border-0 my-3" />}
                                </Fragment>
                            )
                        })
                    }
                </div>

                {/* <a href="#" className="card-footer fs-11 fw-bold text-uppercase text-center">Refresh</a> */}
                <CardLoader refreshKey={refreshKey} />
            </div>
        </div>

    )
}

export default Notifications

