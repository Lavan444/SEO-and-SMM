import React, { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import CardHeader from '@/components/shared/CardHeader'
import CardLoader from '@/components/shared/CardLoader'
import useCardTitleActions from '@/hooks/useCardTitleActions'

const Progress = ({ title }) => {
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
                            <h6 className="mb-0">Voice & Tone</h6>
                            <span className="fs-12 text-muted">
                                Auditory Identity Audit
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
                        {/* SUMMARY ROW */}
                        <div className="row g-3 mb-4">
                            <div className="col-md-6">
                                <div className="summary-box blue">
                                    <div className="fw-semibold">
                                        Voice Profile
                                    </div>
                                    <div className="text-primary mt-1">
                                        Warm & Nurturing
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="d-flex align-items-baseline justify-content-between summary-box purple">
                                    <div className="fw-semibold">
                                        Tone Score
                                    </div>
                                    <div>
                                         <div className="score">90%</div>
                                    <div className="fs-12 text-muted">
                                        Trusted Score
                                    </div>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>

                        {/* SECTIONS */}
                        <div className="recommendation-section">
                            <Section
                                number="1"
                                title="Brand Voice Profile"
                                status="Verified"
                                items={[
                                    'Conversational, clear, client-focused, with emphasis on partnership and practical guidance'
                                ]}
                            />

                            <Section
                                number="2"
                                title="Language Guidelines"
                                status="Verified"
                                items={[
                                    'Speak directly to the client’s needs and challenges',
                                    'Use plain, accessible language free from heavy jargon',
                                    'Emphasize partnership, honesty, and tailored solutions'
                                ]}
                            />

                            <div className="section-row">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex gap-3">
                                        <div className="step-number">3</div>
                                        <h6 className="mb-0">
                                            Secondary Traits
                                        </h6>
                                    </div>

                                    <span className="status-badge verified">
                                        Verified
                                    </span>
                                </div>

                                <div className="trait-tags mt-3">
                                    {[
                                        'Pragmatic',
                                        'Supportive',
                                        'Expert',
                                        'Approachable'
                                    ].map((tag) => (
                                        <span
                                            key={tag}
                                            className="trait-chip"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
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

export default Progress
