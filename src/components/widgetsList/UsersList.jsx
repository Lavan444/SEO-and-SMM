import React, { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import CardHeader from '@/components/shared/CardHeader'
import CardLoader from '@/components/shared/CardLoader'
import useCardTitleActions from '@/hooks/useCardTitleActions'

const BrandAlignment = ({ title }) => {
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
        <div className="col-xxl-6 col-lg-6">
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
                        <div className="icon-box">🧩</div>
                        <div>
                            <h6 className="mb-0">Brand Alignment</h6>
                            <span className="fs-12 text-muted">
                                Integrity assessment
                            </span>
                        </div>
                    </div>

                    <FiChevronDown
                        className={`chevron ${open ? 'rotate' : ''}`}
                    />
                </div>

                {/* BODY */}
                {open && (
                    <div className="card-body pt-0">
                        {/* SUMMARY */}
                        <div className="row g-3 mb-4">
                            <div className="col-md-8">
                                <div className="summary-box blue">
                                    <div className="fw-semibold">
                                        Brand Alignment Scoring
                                    </div>
                                    <div className="fs-12 text-muted mt-1">
                                        Business-brand consistency and alignment
                                        assessment
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="summary-box purple text-center">
                                    <div className="score">93</div>
                                    <div className="fs-12 text-muted">
                                        Alignment Score
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* SECTION */}
                        <div className="section-row">
                            <div className="d-flex justify-content-between align-items-start mb-2">
                                <div className="d-flex gap-3">
                                    <div className="step-number">1</div>
                                    <div>
                                        <h6 className="mb-1">
                                            Misalignment Flags
                                        </h6>
                                        <p className="fs-12 text-muted mb-0">
                                            Points of friction where current
                                            messaging contradicts business
                                            objectives
                                        </p>
                                    </div>
                                </div>

                                <span className="status-badge verified">
                                    Verified
                                </span>
                            </div>

                            <ul className="checklist mt-3">
                                <li>
                                    Some claims of measurable outcomes lack
                                    supporting case studies
                                </li>
                                <li>
                                    Industry depth is mentioned but not always
                                    substantiated with examples
                                </li>
                            </ul>
                        </div>
                    </div>
                )}

                <CardLoader refreshKey={refreshKey} />
            </div>
        </div>
    )
}

export default BrandAlignment
