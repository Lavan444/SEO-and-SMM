import React from 'react'
import CardHeader from '@/components/shared/CardHeader'
import useCardTitleActions from '@/hooks/useCardTitleActions'
import CardLoader from '@/components/shared/CardLoader'
import getIcon from '@/utils/getIcon'

const Trending = ({ title }) => {
    const {
        refreshKey,
        isRemoved,
        isExpanded,
        handleRefresh,
        handleExpand,
        handleDelete
    } = useCardTitleActions()

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

                <div className="card-body">
                    {/* VISUAL IDENTITY */}
                    <div className="static-insight">
                        <div className="insight-header">
                            <div className="icon-box">
                                {React.cloneElement(
                                    getIcon('feather-eye'),
                                    { size: 18 }
                                )}
                            </div>
                            <div>
                                <h6 className="mb-0">Visual Identity</h6>
                                <span className="fs-12 text-muted">
                                    Aesthetic Consistency
                                </span>
                            </div>
                        </div>

                        <div className="insight-body">
                            <div>
                                <div className="fw-semibold">
                                    Color Palette
                                </div>
                                <p className="fs-12 text-muted mb-0">
                                    Visual Audit complete high consistency
                                    found across primary Digital Assets.
                                </p>
                            </div>

                            <div className="color-dots">
                                <span className="dot dark" />
                                <span className="dot green" />
                                <span className="dot blue" />
                            </div>
                        </div>
                    </div>

                    {/* TARGET AUDIENCE */}
                    <div className="static-insight mt-4">
                        <div className="insight-header">
                            <div className="icon-box">
                                {React.cloneElement(
                                    getIcon('feather-users'),
                                    { size: 18 }
                                )}
                            </div>
                            <div>
                                <h6 className="mb-0">Target Audience</h6>
                                <span className="fs-12 text-muted">
                                    Persona Alignment
                                </span>
                            </div>
                        </div>

                        <div className="insight-body">
                            <div>
                                <div className="fw-semibold">
                                    Primary Persona
                                </div>
                                <p className="fs-12 text-muted mb-0">
                                    Working Parents (28–45)
                                </p>
                            </div>

                            <div className="avatar-group">
                                <img src="/avatar1.png" alt="" />
                                <img src="/avatar2.png" alt="" />
                                <img src="/avatar3.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <CardLoader refreshKey={refreshKey} />
            </div>
        </div>
    )
}

export default Trending
