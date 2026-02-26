import React, { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import CardHeader from '@/components/shared/CardHeader'
import CardLoader from '@/components/shared/CardLoader'
import useCardTitleActions from '@/hooks/useCardTitleActions'

const Feedback = ({ title }) => {
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
                            <h6 className="mb-0">Brand Posistioning
</h6>
                            <span className="fs-12 text-muted">
                               Competitive edge analysis
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
                                           Core problem solved
                                        </h6>
                                         <span className="fs-12 text-muted">
                                Unique solution to the central emotional need of the target parent audience. 
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
                                            Key Differentiators

                                        </h6>
                                         <span className="fs-12 text-muted">
                                The "Unfair Advantages" that separate this brand from local competitors.
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
                                            Proof Points

                                        </h6>
                                         <span className="fs-12 text-muted">
                                Concrete evidence (Certificates, data, stories) that validates all brand claims.
                            </span>
                            </div>
                                    </div>

                                    <span className="status-badge verified">
                                      Verified
                                    </span>
                                </div>

                               

                           
                            </div>


                            <div className="section-row border-0">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex gap-3">
                                        <div className="step-number">4</div>
                                        <div className='d-flex flex-column'>

                                        
                                        <h6 className="mb-0">
                                            Generic claims to avoid

                                        </h6>
                                         <span className="fs-12 text-muted">
                                High-risk phrasing that causes brand dilution and consumer skepticism.
                            </span>
                            </div>
                                    </div>

                                    <span className="status-badge verified">
                                      Optimization Needed
                                    </span>
                                </div>

                                <ul class="checklist mt-3">
                                    <li>A place to be yourself</li>
                                    <li>Spark growth and wonder</li>
                                    <li>Trusted programs</li>
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

export default Feedback
