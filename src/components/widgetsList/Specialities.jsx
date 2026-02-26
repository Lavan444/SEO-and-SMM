import React, { useState } from 'react'
import { FiX, FiEdit2 } from 'react-icons/fi'
import CardLoader from '@/components/shared/CardLoader'

const initialKeywords = [
    "IT Strategy & Planning",
    "Cybersecurity Services",
    "Managed IT Services",
    "Manufacturing Automation",
    "Cloud Migration",
    "Expert Security Monitoring",
    "Retail Tech",
    "AI & ML Services",
    "Healthcare IT",
    "Hybrid Cloud Services",
    "SaaS Development",
    "Finance Solutions",
    "Supply Chain Optimization",
    "IT Staffing",
    "Software Development",
    "Workforce Consulting",
    "Quality Control Systems"
]


const Specialities = () => {
    const [keywords, setKeywords] = useState(initialKeywords)
    const [isEditing, setIsEditing] = useState(false)
    const [newKeyword, setNewKeyword] = useState("")

    const addKeyword = () => {
        if (!newKeyword.trim()) return
        setKeywords([...keywords, newKeyword.trim()])
        setNewKeyword("")
    }

    const removeKeyword = (index) => {
        setKeywords(keywords.filter((_, i) => i !== index))
    }

    return (
        <div className="col-xxl-12 col-lg-12">
            <div className="card stretch stretch-full">
                <div className="card-body keyword-card">

                    {/* HEADER */}
                    <div className="keyword-header">
                        <div className="d-flex align-items-center gap-3">
                            <div className="keyword-icon">🏷️</div>
                            <h6 className="mb-0">Specialities</h6>
                        </div>

                        {/* EDIT / CLOSE ICON */}
                        <button
                            className="edit-btn"
                            onClick={() => setIsEditing(!isEditing)}
                        >
                            {isEditing ? <FiX /> : <FiEdit2 />}
                        </button>
                    </div>

                    {/* INPUT (ONLY IN EDIT MODE) */}
                    {isEditing && (
                        <div className="keyword-input-area">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter new Keyword"
                                value={newKeyword}
                                onChange={(e) => setNewKeyword(e.target.value)}
                                onKeyDown={(e) =>
                                    e.key === "Enter" && addKeyword()
                                }
                            />
                            <button
                                className="btn btn-primary ms-2"
                                onClick={addKeyword}
                            >
                                ADD
                            </button>
                        </div>
                    )}

                    {/* KEYWORDS */}
                    <div className="keyword-chip-wrapper">
                        {keywords.map((word, index) => (
                            <div key={index} className="keyword-chip">
                                {word}

                                {/* Show remove icon ONLY in edit mode */}
                                {isEditing && (
                                    <FiX
                                        className="chip-close"
                                        onClick={() =>
                                            removeKeyword(index)
                                        }
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <CardLoader refreshKey={false} />
            </div>
        </div>
    )
}

export default Specialities
