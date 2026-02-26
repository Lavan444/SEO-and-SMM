import React, { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import CardHeader from '@/components/shared/CardHeader'
import CardLoader from '@/components/shared/CardLoader'
import useCardTitleActions from '@/hooks/useCardTitleActions'

const Accounts = ({ title }) => {
    const {
        refreshKey,
        isRemoved,
        isExpanded,
        handleRefresh,
        handleExpand,
        handleDelete
    } = useCardTitleActions()

    const [open, setOpen] = useState(true)

    if (isRemoved) return null

    return (
        <div className="col-xxl-12">
            <div
                className={`card stretch stretch-full ${
                    isExpanded ? 'card-expand' : ''
                } ${refreshKey ? 'card-loading' : ''}`}
            >
                {/* <CardHeader
                    title={title}
                    refresh={handleRefresh}
                    remove={handleDelete}
                    expanded={handleExpand}
                /> */}

                {/* MAIN ACCORDION HEADER */}
                <div
                    className="card-body main-accordion-header"
                    onClick={() => setOpen(!open)}
                >
                    <div className="d-flex align-items-center gap-3">
                        <div className="icon-box">🔊</div>
                        <div>
                            <h6 className="mb-0">Content Authority</h6>
                            <span className="fs-12 text-muted">
                                E-E-A-T & Search Integrity
                            </span>
                        </div>
                    </div>

                    <FiChevronDown
                        className={`chevron ${open ? 'rotate' : ''}`}
                    />
                </div>

                {/* ACCORDION BODY */}
                {open && (
                    <div className="card-body pt-0">

                        {/* SECTIONS */}
                        <div className="recommendation-section">
                            

                            <div className="section-row border-0">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex gap-3">
                                        <div className="step-number">1</div>
                                        <div className='d-flex flex-column'>

                                        
                                        <h6 className="mb-0">
                                            Content Authority score


                                        </h6>
                                         <span className="fs-12 text-muted">
                                Total credibility rating based on expertise and trustworthiness signals.    
                            </span>
                            </div>
                                    </div>

                                    <span className="status-badge verified">
                                      verified
                                    </span>
                                </div>

                            
                            </div>


                              <div className="section-row border-0">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex gap-3">
                                        <div className="step-number">2</div>
                                        <div className='d-flex flex-column'>

                                        
                                        <h6 className="mb-0">
                                            Content Authority Analysis

                                        </h6>
                                         <span className="fs-12 text-muted">
                                Qualitative review of site-wide informational value and depth.
                            </span>
                            </div>
                                    </div>

                                    <span className="status-badge verified">
                                      verified
                                    </span>
                                </div>

                              
                            </div>



                              <div className="section-row border-0">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex gap-3">
                                        <div className="step-number">3</div>
                                        <div className='d-flex flex-column'>

                                        
                                        <h6 className="mb-0">
                                            EEAT Analysis and Gaps
                                        </h6>
                                         <span className="fs-12 text-muted">
                                Identifying missing signals of Expertise, Experience, Authoritativeness, and Trust.
                            </span>
                            </div>
                                    </div>

                                    <span className="status-badge verified">
                                      Optimization Needed
                                    </span>
                                </div>

                                <ul class="checklist mt-3">
                                    <li>Missing Faculty Bio Details</li>
                                    <li>No Published Curriculum Standards</li>
                                    <li>Lack of Verified Expert Reviews</li>
                                    </ul>

                           
                            </div>


                            <div className="section-row border-0">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex gap-3">
                                        <div className="step-number">4</div>
                                        <div className='d-flex flex-column'>

                                        
                                        <h6 className="mb-0">
                                            Al Readiness Gaps
                                        </h6>
                                         <span className="fs-12 text-muted">
                                Evaluation of structured data and content clarity for Al-driven search engines.
                            </span>
                            </div>
                                    </div>

                                    <span className="status-badge verified">
                                      Optimization Needed
                                    </span>
                                </div>

                                <ul class="checklist mt-3">
                                    <li>Schema Markup Omissions</li>
                                    <li>Crawlability Bottlenecks</li>
                                    <li>Keyword Dilution</li>
                                    </ul>

                           
                            </div>








                        </div>
                    </div>
                )}

                <CardLoader refreshKey={refreshKey} />
            </div>
        </div>
    )
}

const Section = ({ number, title, status, items }) => (
    <div className="section-row">
        <div className="d-flex justify-content-between align-items-start">
            <div className="d-flex gap-3">
                <div className="step-number">{number}</div>
                <div>
                    <h6 className="mb-1">{title}</h6>
                </div>
            </div>

            <span className="status-badge verified">{status}</span>
        </div>

        <ul className="checklist mt-2">
            {items.map((item, idx) => (
                <li key={idx}>{item}</li>
            ))}
        </ul>
    </div>
)

export default Accounts
