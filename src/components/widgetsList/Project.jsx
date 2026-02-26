import React, { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'

const recommendations = [
    {
        id: 1,
        title: 'Brand Voice Guidelines',
        subtitle:
            'Core communication standards established for warm and empathetic parent engagement.',
        status: 'Verified',
        items: [
            'Always focus on the client’s success and practical results',
            'Communicate as a knowledgeable but approachable expert',
            'Prioritize transparency and clear, actionable recommendations',
            'Use empathetic, supportive language when addressing client challenges'
        ]
    },
    {
        id: 2,
        title: 'Business Model Optimization',
        subtitle:
            'Refinement of core service alignment with high-value demographic needs.',
        status: 'Recommended',
        items: [
            'Add more detailed service descriptions and differentiators per industry vertical',
            'Showcase representative case studies/projects for each core service',
            'Highlight leadership expertise and certifications to reinforce authority'
        ]
    },
    {
        id: 3,
        title: 'Messaging Improvement Actions',
        subtitle:
            'Conversion of generic benefit claims into specific, data-backed proof points.',
        status: 'Verified',
        items: [
            'Reduce generic claims by quantifying impact and providing proof points',
            'Expand on unique differentiators—especially in key services like AI/ML and IT staffing',
            'Increase presence of visualized outcomes (infographics, statistics, awards logos)'
        ]
    }
]

const Project = () => {
    const [open, setOpen] = useState(true)

    return (
        <div className="col-xxl-12">
            <div className="card stretch stretch-full">
                {/* MAIN ACCORDION HEADER */}
                <div
                    className="card-body main-accordion-header"
                    onClick={() => setOpen(!open)}
                >
                    <div className="d-flex align-items-center gap-2">
                        <span className="main-icon">💡</span>
                        <div>
                            <h6 className="mb-0">Brand Recommendations</h6>
                            <span className="fs-12 text-muted">
                                Tactical Action Items
                            </span>
                        </div>
                    </div>

                    <FiChevronDown
                        className={`chevron ${open ? 'rotate' : ''}`}
                    />
                </div>

                {/* ACCORDION BODY */}
                {open && (
                    <div className="card-body recommendation-card pt-0">
                        {recommendations.map((section) => (
                            <div
                                key={section.id}
                                className="recommendation-section"
                            >
                                <div className="d-flex justify-content-between align-items-start mb-2">
                                    <div className="d-flex gap-3">
                                        <div className="step-number">
                                            {section.id}
                                        </div>
                                        <div>
                                            <h6 className="mb-1">
                                                {section.title}
                                            </h6>
                                            <p className="text-muted fs-12 mb-1">
                                                {section.subtitle}
                                            </p>
                                        </div>
                                    </div>

                                    <span
                                        className={`status-badge ${
                                            section.status === 'Verified'
                                                ? 'verified'
                                                : 'recommended'
                                        }`}
                                    >
                                        {section.status}
                                    </span>
                                </div>

                                <ul className="checklist">
                                    {section.items.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Project
