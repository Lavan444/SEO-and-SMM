import React, { useContext } from 'react'
import { FiX } from 'react-icons/fi'
import { Link, useLocation } from 'react-router-dom'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { SidebarContext } from '../../contentApi/sideBarToggleProvider'
import getIcon from '@/utils/getIcon'

const navItems = [
    { label: "Profile Setting", path: "/applications/chat", icon: "feather-user" },
    { label: "Change Password", path: "/applications/email", icon: "feather-lock" },
    { label: "Data Management", path: "/applications/tasks", icon: "feather-tag" },
    // { label: "LLMS Audit", path: "/settings/localization", icon: "feather-mail" },
    // { label: "Competitor Analysis", path: "/settings/tasks", icon: "feather-check-circle" },
    // { label: "Keyword Analysis", path: "/settings/leads", icon: "feather-crosshair" },
    // { label: "Content Generation", path: "/settings/support", icon: "feather-life-buoy" },
    // { label: "Content Calendar", path: "/settings/finance", icon: "feather-dollar-sign" },
    // { label: "Analytics and Reports", path: "/settings/gateways", icon: "feather-git-branch" },
    // { label: "Local SEO", path: "/settings/customers", icon: "feather-users" },
    // { label: "Localization", path: "/settings/localization", icon: "feather-globe" },
    // { label: "reCaptcha", path: "/settings/recaptcha", icon: "feather-shield" },
    // { label: "Miscellaneous", path: "/settings/miscellaneous", icon: "feather-cast" },
]
const ProfileSidebar = () => {
    const { sidebarOpen, setSidebarOpen } = useContext(SidebarContext)
    const pathName = useLocation().pathname
    return (
        <div className={`content-sidebar content-sidebar-md ${sidebarOpen ? "app-sidebar-open" : ""} `}>
            <PerfectScrollbar>
                {/* <div className="content-sidebar-header bg-white sticky-top hstack justify-content-between">
                    <h4 className="fw-bolder mb-0">Session Details</h4>
                    <a href="#" className="app-sidebar-close-trigger d-flex" onClick={()=>setSidebarOpen(false)}>
                        <FiX size={16} />
                    </a>
                </div> */}
                <div className="content-sidebar-body">
                    <ul className="nav flex-column nxl-content-sidebar-item">
                        {
                            navItems.map(({ label, path, icon }, index) => (
                                <li key={index} className="nav-item">
                                    <Link className={`nav-link ${pathName === path ? "active" : ""} `} to={path}>
                                        <i className='lh-1 fs-16'>{getIcon(icon)} </i>
                                        <span>{label}</span>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </PerfectScrollbar>
        </div>

    )
}

export default ProfileSidebar