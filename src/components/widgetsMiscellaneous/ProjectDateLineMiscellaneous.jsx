import React from 'react'
import { Link } from 'react-router-dom'

const projectData = [
    {
        project_name: 'Add Your Website',
        deadiline: 'URL & Company Details',
        paragraph: 'Website successfully added and verified. Your domain is now connected to our AI automation platform.',
        status: '✔ DONE',
        statusColor: 'success',
        icon: '📱',
        iconBg: '#17c666',
        isLocked: false,
        isActive: true,
        buttons: []
    },
    {
        project_name: 'Connect Tools',
        deadiline: 'GSC, GA, Meta & Core',
        status: '● IN PROGRESS',
        statusColor: 'primary',
        icon: '⚙',
        iconBg: '#5e6dd3',
        isLocked: false,
        isActive: false,
        tools: ['Google Search Console', 'Google Analytics', 'Meta'],
        buttons: [
            { label: 'Connect Tools', variant: 'primary' },
            { label: 'Skip', variant: 'secondary' }
        ]
    },
    {
        project_name: 'Choose Goals',
        deadiline: 'Traffic, Leads, Followers',
        status: 'LOCKED',
        statusColor: 'secondary',
        icon: '🎯',
        iconBg: '#6c757d',
        isLocked: true,
        isActive: false,
        buttons: []
    },
    {
        project_name: 'Run First Automation',
        deadiline: 'Scan & Generate Content',
        status: 'LOCKED',
        statusColor: 'secondary',
        icon: '⚡',
        iconBg: '#6c757d',
        isLocked: true,
        isActive: false,
        buttons: []
    }
]

const ProjectDateLineMiscellaneous = () => {
    return (
        <div className="col-12">
            <div className="card stretch stretch-full white-opa p-2">
                <div className="card-body">

                    {/* Header */}
                    <div className="mb-4">
                        <h5 className="mb-2">SetUp Wizard</h5>
                        <div className="fs-14 text-muted mb-0">
                            Complete these steps to unlock full AI automation.
                        </div>
                    </div>

                    {/* Wizard Steps */}
                    <div className="vstack gap-0">
                        {projectData.map((item, index) => {
                            const {
                                project_name,
                                deadiline,
                                status,
                                statusColor,
                                icon,
                                iconBg,
                                isLocked,
                                isActive,
                                tools,
                                buttons
                            } = item

                            const isCompleted = status === '✔ DONE'

                            return (
                                <div
                                    key={index}
                                    className="position-relative"
                                    style={{ paddingLeft: '60px', marginBottom: '30px' }}
                                >
                                    {/* Step Indicator */}
                                    <div
                                        className="position-absolute"
                                        style={{
                                            left: '0',
                                            top: '0',
                                            // display: 'flex',
                                            // flexDirection: 'column',
                                            // alignItems: 'center'
                                            height: '100%',
                                            width: '50px',
                                        }}
                                    >
                                     {/* Step Circle */}
    <div
        className="d-flex align-items-center justify-content-center"
        style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor:
                status === '✔ DONE'
                    ? '#17c666'
                    : status === '● IN PROGRESS'
                    ? '#5e6dd3'
                    : 'rgb(249 241 242)',
            color: status === 'LOCKED' ? '#c3c3c3' : 'white',
            fontWeight: 'bold',
            fontSize: '18px',
            border:
                status === 'LOCKED'
                    ? '2px solid rgb(250 253 253)'
                    : 'none',
            position: 'relative',
            zIndex: 2,
            margin: '0 auto',
            opacity: isLocked ? 0.5 : 1,
        }}
    >
        {isCompleted ? '✓' : index + 1}
    </div>

                                     {index < projectData.length - 1 && (
        <div
            style={{
                position: 'absolute',
                top: '50px',           
                left: '50%',
                transform: 'translateX(-50%)',
                width: '1px',
                height: 'calc(100% - 45px)', 
               backgroundColor:
                index === 1
                    ? '#3454d1' // BLUE line after step 2
                    : projectData[index + 1].status === 'DONE'
                    ? 'rgba(23,198,102,0.5)'
                    : projectData[index + 1].status === '● IN PROGRESS'
                    ? 'rgba(23,198,102,0.5)'
                    : 'rgb(250 253 253)',
                borderRadius: '4px',
            }}
        />
    )}      
   
                                    </div>

                                    {/* Step Card */}
                                    <div
                                        className={`p-3 white-opa rounded-3 ${
          statusColor === 'success'
            ? 'step-status-success-bg'
            : statusColor === 'primary'
            ? 'step-status-progress-bg'
            : 'step-status-bg'
    }`}
                                        style={{
                                            opacity: isLocked ? 0.6 : 1,
                                            cursor: isLocked ? 'not-allowed' : 'pointer',
                                            transition: 'all 0.3s ease'
                                        }}
                                    >
                                        {/* Status Badge */}
                                        <div className="mb-3 d-flex justify-content-end">
                                            <span
                                                className={`white-opa badge fs-12 fw-medium 
                                                    ${statusColor === 'success' ? 'step-status-success' : ''}
                                                    ${statusColor === 'primary' ? 'bg-primary' : ''}
                                                    ${statusColor === 'secondary' ? 'bg-secondary' : ''}
                                                `}
                                            >
                                                {status}
                                            </span>
                                        </div>

                                        {/* Content */}
                                        <div className="hstack gap-4">
                                            {/* <div
                                                className="d-flex align-items-center justify-content-center flex-shrink-0"
                                                style={{
                                                    width: '40px',
                                                    height: '40px',
                                                    borderRadius: '50%',
                                                    backgroundColor: iconBg,
                                                    fontSize: '28px',
                                                    color: 'white'
                                                }}
                                            >
                                                {icon}
                                            </div> */}

                                            <div className="flex-grow-1">
                                                <div className='d-flex justify-between gap-3'>
                                                     <div
                                                className="d-flex align-items-center justify-content-center flex-shrink-0"
                                                style={{
                                                    width: '40px',
                                                    height: '40px',
                                                    borderRadius: '50%',
                                                    backgroundColor: iconBg,
                                                    fontSize: '28px',
                                                    color: 'white'
                                                }}
                                            >
                                                {icon}
                                            </div>
                                                  <div>
                                                     <h5 className="text-dark">{project_name}</h5>
                                                <div className="fs-14 text-muted">{deadiline}</div>
                                                </div>
                                               
                                                </div>


                                          
                                                <div>
                                                {/* <p className="fs-12 text-muted mt-2 mb-0">{item.paragraph}</p> */}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Tools */}
                                        {tools && (
                                            <div className="mt-3 ps-80 d-flex flex-wrap gap-2">
                                                {tools.map((tool, idx) => (
                                                    <span key={idx} className="white-opa fs-12 px-3 py-1">
                                                        {tool}
                                                    </span>
                                                ))}
                                            </div>
                                        )}

                                        {/* Buttons */}
                                        {buttons && (
                                            <div className="mt-3 ps-80 d-flex gap-2">
                                                {buttons.map((btn, idx) => (
                                                    <button
                                                        key={idx}
                                                        className={`btn btn-sm fw-medium ${
                                                            btn.variant === 'primary'
                                                                ? 'btn-primary'
                                                                : 'btn-outline-secondary'
                                                        }`}
                                                    >
                                                        {btn.label}
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProjectDateLineMiscellaneous
