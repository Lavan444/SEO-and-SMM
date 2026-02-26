import React from 'react'
import CardHeader from '@/components/shared/CardHeader'
import useCardTitleActions from '@/hooks/useCardTitleActions'
import CardLoader from '@/components/shared/CardLoader'
import { FiBriefcase } from 'react-icons/fi'

const ActivityTwo = ({ title }) => {
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
        <>
        <div className="col-xxl-6 col-lg-6">
            <div
                className={`card stretch stretch-full d-flex ${
                    isExpanded ? 'card-expand' : ''
                } ${refreshKey ? 'card-loading' : ''}`}
            >
                {/* <CardHeader
                    title={title}
                    refresh={handleRefresh}
                    remove={handleDelete}
                    expanded={handleExpand}
                /> */}

                <div className="card-body business-model-card">
                    {/* Header */}
                    <div className="d-flex gap-3 bm-header">
                        <div className="bm-icon">
                            <FiBriefcase size={18} />
                        </div>
                        <h6 className="mb-0">Business Model</h6>
                    </div>

                    {/* Description */}
                    <p className="bm-description mt-3 fs-16">
                        Codexon operates as an IT consulting and managed services company, delivering tailored technology solutions, IT strategy, and workforce placement for organizations across key industries.
                    </p>

                    <p className="bm-sub-description fs-16 text-muted">
                        They partner with clients to address complex technological challenges, drive digital transformation, and optimize business operations through a combination of advisory and ongoing management.
                    </p>

                    {/* Info Boxes */}
                  
                </div>

              

                <CardLoader refreshKey={refreshKey} />
            </div>
        </div>
          <div className="col-xxl-6 col-lg-6">
            <div
                className={`card stretch stretch-full d-flex ${
                    isExpanded ? 'card-expand' : ''
                } ${refreshKey ? 'card-loading' : ''}`}
            >
                {/* <CardHeader
                    title={title}
                    refresh={handleRefresh}
                    remove={handleDelete}
                    expanded={handleExpand}
                /> */}

              
                <div className='card-body business-model-card'>
                      <div className="row g-3 mt-2">
                       <div class="col-md-12"><div class="summary-box blue"><div class="fw-semibold fs-22">Sector</div><div class="fs-26 text-muted mt-1">Technology & IT</div></div></div>

                       
                             <div class="col-md-12"><div class="summary-box purple fs-22"><div class="fw-semibold">Model</div><div class="fs-26 text-muted mt-1">B2B Services</div></div></div>
                    </div>
                </div>

                <CardLoader refreshKey={refreshKey} />
            </div>
        </div>

        </>
    )
}

export default ActivityTwo
