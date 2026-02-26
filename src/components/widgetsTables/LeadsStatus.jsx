import React from 'react'
import CardHeader from '@/components/shared/CardHeader'
import Pagination from '@/components/shared/Pagination'
import { FiMoreVertical, FiSettings } from 'react-icons/fi'
import { Link } from 'react-router-dom'
// import { contactLeadsData } from '@/utils/fackData/contactLeadsData'
import CardLoader from '@/components/shared/CardLoader'
import useCardTitleActions from '@/hooks/useCardTitleActions'

export const contactLeadsData = [
  {
    id: 1,
    user_img: "/images/avatar/2.png",
    user_name: "AI Content Optimization Strategy",
    user_email: "marketing@neurotechlabs.com",
    user_company: "NeuroTech Labs",
    user_status: "Completed",
    progress: 92,
    amount: "SEO & LLM Visibility Enhancement",
    badgeColor: "success",
    progressColor: "success",
    points: [
      "Optimized AI-generated blog structure",
      "Improved semantic keyword clustering"
    ]
  },

  {
    id: 2,
    user_img: "/images/avatar/3.png",
    user_name: "LLM Search Visibility Audit",
    user_email: "growth@digitalsphere.io",
    user_company: "DigitalSphere",
    user_status: "In Progress",
    progress: 68,
    amount: "LLM Ranking Optimization",
    badgeColor: "primary",
    progressColor: "primary",
    points: [
      "Analyzing AI citation mentions",
      "Tracking LLM keyword positioning"
    ]
  },

  {
    id: 3,
    user_img: "/images/avatar/4.png",
    user_name: "AI-Powered Technical SEO Review",
    user_email: "seo@cloudbridge.ai",
    user_company: "CloudBridge AI",
    user_status: "Completed",
    progress: 85,
    amount: "Technical SEO Improvements",
    badgeColor: "success",
    progressColor: "success",
    points: [
      "Resolved structured data errors",
      "Enhanced crawl efficiency"
    ]
  },

  {
    id: 4,
    user_img: "/images/avatar/5.png",
    user_name: "Generative AI Content Audit",
    user_email: "strategy@nextwaveanalytics.com",
    user_company: "NextWave Analytics",
    user_status: "Not Interested",
    progress: 40,
    amount: "Content Performance Analysis",
    badgeColor: "warning",
    progressColor: "warning",
    points: [
      "Low AI citation frequency",
      "Weak topical authority signals"
    ]
  },

  {
    id: 5,
    user_img: "/images/avatar/6.png",
    user_name: "Enterprise LLM Optimization Plan",
    user_email: "enterprise@quantumgrowth.io",
    user_company: "Quantum Growth",
    user_status: "Completed",
    progress: 97,
    amount: "Enterprise AI Visibility",
    badgeColor: "success",
    progressColor: "success",
    points: [
      "High authority domain citations",
      "Strong multi-LLM presence"
    ]
  }
];


const LeadsStatus = ({ title, progressFullHeight }) => {
    const { refreshKey, isRemoved, isExpanded, handleRefresh, handleExpand, handleDelete } = useCardTitleActions();

    if (isRemoved) {
        return null;
    }
    return (
        <div className="col-lg-12">
            <div className={`card stretch stretch-full ${isExpanded ? "card-expand" : ""} ${refreshKey ? "card-loading" : ""}`}>
                <div>

                <CardHeader  title={title} refresh={handleRefresh} remove={handleDelete} expanded={handleExpand} />
                </div>

                <div className="card-body custom-card-action p-0">
                    <div className="table-responsive">
                        <table className="table table-hover mb-0">
                            <thead>
                                <tr className="border-b">
                                    <th scope="row">Keyword</th>
                                    <th>Engine</th>
                                    <th>Topic</th>
                                    <th>Probability</th>
                                    <th className="wd-250">Missing Factors</th>
                                    {/* <th className="text-end">Actions</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    contactLeadsData.map(({ amount, id, progress, user_email, user_img, user_name, user_status, user_company, badgeColor, progressColor }) => (
                                        <tr key={id}>
                                            <td>
                                                <div className="d-flex align-items-center gap-3">
                                                   
                                                    <Link href="#">
                                                        <span className="d-block text-muted">{user_name}</span>
                                                        {/* <span className="fs-12 d-block fw-normal text-muted">{user_email}</span> */}
                                                    </Link>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="text-dark">{user_company}</span>
                                            </td>
                                            <td>${amount} USD</td>
                                            <td className='text-center'>
                                               <span className=" text-dark text-center">{progress}</span>
                                            </td>
                                            <td>
                                                <span className='ms-2'>Project for the main problem for tg </span>
                                                 <ul className={`list-disc ml-6 mt-0 mb-0`}>
                                                    <li>Improves content automation efficiency</li>
                                                    <li>Boosts SEO ranking visibility</li>
                                                </ul>
                                            </td>
                                            {/* <td className="text-end">
                                                <Link to="#"><i><FiMoreVertical /></i></Link>
                                            </td> */}
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="card-footer"> <Pagination /></div>
                <CardLoader refreshKey={refreshKey} />
            </div>
        </div>
    )
}

export default LeadsStatus
