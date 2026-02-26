import React from 'react'
import { Link } from 'react-router-dom'
import CardHeader from '@/components/shared/CardHeader'
import useCardTitleActions from '@/hooks/useCardTitleActions'
import CardLoader from '@/components/shared/CardLoader'
import { FiPlus } from 'react-icons/fi'
import getIcon from '@/utils/getIcon'

const socialLinks = [
    { icon: 'feather-globe', link: 'https://www.facebook.com/', text: 'Facebook', followers: '9.47K' },
    { icon: 'feather-globe', link: 'https://www.twitter.com/', text: 'Twitter', followers: '8.38K' },
    { icon: 'feather-globe', link: 'https://www.github.com/', text: 'GitHub', followers: '4.57K' },
    { icon: 'feather-globe', link: 'https://www.linkedin.com/', text: 'LinkedIn', followers: '5.68K' },
    { icon: 'feather-globe', link: 'https://www.gitlab.com/', text: 'GitLab', followers: '3.78K' },
    { icon: 'feather-globe', link: 'https://www.figma.com/', text: 'Figma', followers: '2.47K' }
];

const Socal = ({ title }) => {
    const { refreshKey, isRemoved, isExpanded, handleRefresh, handleExpand, handleDelete } = useCardTitleActions();

    if (isRemoved) {
        return null;
    }
    return (
        <div className="col-xxl-4">
            <div className={`card stretch stretch-full ${isExpanded ? "card-expand" : ""} ${refreshKey ? "card-loading" : ""}`}>
                <CardHeader title={title} refresh={handleRefresh} remove={handleDelete} expanded={handleExpand} />
                <div className="card-body custom-card-action">
                    {socialLinks.map(({ followers, icon, link, text }, index) => (
                        <div key={index} className="d-flex align-items-center mb-4 pb-2">
                          
                            {/* <span className="mx-2 text-gray-400"></span> */}
                            
                            <a href={link} target="_blank" className="text-truncate-1-line">{text}<span className="text-gray-500"></span></a>
                             <span className="mx-2 ">{link}</span>
                              <div className="avatar-text bg-gray-100">
                                {React.cloneElement(getIcon(icon), { size: "16" })}
                            </div>
                            {/* <span className="badge bg-gray-200 text-dark ms-auto">{followers}</span> */}
                        </div>
                    ))}
                </div>

                {/* <Link to="#" className="card-footer fs-11 fw-bold text-uppercase text-center py-4"> <i className="me-2"><FiPlus size={16} /></i> Add New</Link> */}
            </div>
            <CardLoader refreshKey={refreshKey} />
        </div>
    )
}

export default Socal
