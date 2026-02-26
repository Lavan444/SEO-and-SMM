import React from 'react'
import { Link } from 'react-router-dom'
import CardHeader from '@/components/shared/CardHeader'
// import { browserList } from '@/utils/fackData/browserList'
import useCardTitleActions from '@/hooks/useCardTitleActions'
import CardLoader from '@/components/shared/CardLoader'
import getIcon from '@/utils/getIcon'
import HorizontalProgress from '@/components/shared/HorizontalProgress'
import { FiSettings } from 'react-icons/fi'

const dataList = [
    {
        id: 1,
        month: "Jan 2026",
        browser_name: "34567",
        total_user: 90,
        iconColor:"primary",
        progressColor:"success",
        icon: "fa-chrome",
    },
    {
        id: 2,
         month: "Feb 2026",
        browser_name: "34567",
        total_user: 76,
        iconColor:"warning",
        progressColor:"primary",
        icon: "fa-firefox-browser"
    },
    {
        id: 3,
         month: "Mar 2026",
        browser_name: "34567",
        total_user: 50,
        iconColor:"info",
        progressColor:"warning",
        icon:"fa-safari"
    },
    {
        id: 4,
         month: "Apr 2026",
        browser_name: "34563",
        total_user: 20,
        iconColor:"success",
        progressColor:"secondary",
        icon:"fa-edge"
    },
    {
        id: 5,
         month: "May 2026",
        browser_name: "34565",
        total_user: 15,
        iconColor:"danger",
        progressColor:"danger",
        icon:"fa-opera"
    },
    {
        id: 6,
         month: "Jun 2026",
        browser_name: "34560",
        total_user: 12,
        iconColor:"explorer",
        progressColor:"teal",
        icon:"fa-internet-explorer"
    },
    {
        id: 7,
         month: "Jul 2026",
        browser_name: "34564",
        total_user: 6,
        iconColor:"deploy",
        progressColor:"dark",
        icon:"fa-octopus-deploy"
    },

]

const Browser = ({title}) => {
    const { refreshKey, isRemoved, isExpanded, handleRefresh, handleExpand, handleDelete } = useCardTitleActions();

    if (isRemoved) {
        return null;
    }
    return (
        <div className="col-xxl-12">
            <div className={`card stretch stretch-full ${isExpanded ? "card-expand" : ""} ${refreshKey ? "card-loading" : ""}`}>
                <CardHeader title={title} refresh={handleRefresh} remove={handleDelete} expanded={handleExpand} />
                <div className="card-body custom-card-action p-0">
                    <div className="table-responsive">
                        <table className="table table-hover mb-0">
                             <thead>
                                <tr className="border-b">
                                    <th scope="row">Month</th>
                                    <th>Mentions</th>
                                    <th>Audience</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    dataList.map(({ browser_name, id, total_user, icon, iconColor, progressColor, month }) =>
                                        <tr key={id}>
                                            <td>
                                                <Link to="#">
                                                  
                                                    <span style={{fontWeight: "500"}}>{month}</span>
                                                </Link>
                                            </td>
                                            <td>
                                                <span className="text-center d-flex align-items-center m-0">
                                                    <span className="me-0">{total_user}</span>
                                                   
                                                </span>
                                            </td>
                                             <td>
                                                <span className="text-end d-flex align-items-center m-0">
                                                    <span className="me-3">{browser_name}</span>
                                                  
                                                </span>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                  <Link to="#" className="card-footer fs-14   text-start"><i className='me-2 text-primary'><FiSettings /></i>AI Generated Results</Link>
                <CardLoader refreshKey={refreshKey} />
            </div>
        </div>
    )
}

export default Browser

