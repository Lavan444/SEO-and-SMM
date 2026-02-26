const fs = require('fs');

const profileSidebar = `import React, { useContext } from 'react'
import { FiX } from 'react-icons/fi'
import { Link, useLocation } from 'react-router-dom'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { SidebarContext } from '../../contentApi/sideBarToggleProvider'
import getIcon from '@/utils/getIcon'

const navItems = [
    { label: "Profile Setting", path: "/profile/setting", icon: "feather-user" },
    { label: "Change Password", path: "/profile/change-password", icon: "feather-lock" },
    { label: "Data Management", path: "/profile/data-management", icon: "feather-database" },
]

const ProfileSidebar = () => {
    const { sidebarOpen, setSidebarOpen } = useContext(SidebarContext)
    const pathName = useLocation().pathname
    return (
        <div className={\`content-sidebar content-sidebar-md \${sidebarOpen ? "app-sidebar-open" : ""}\`}>
            <PerfectScrollbar>
                <div className="content-sidebar-body">
                    <ul className="nav flex-column nxl-content-sidebar-item">
                        {
                            navItems.map(({ label, path, icon }, index) => (
                                <li key={index} className="nav-item">
                                    <Link className={\`nav-link \${pathName === path ? "active" : ""}\`} to={path}>
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

export default ProfileSidebar`;

fs.writeFileSync('src/components/setting/ProfileSidebar.jsx', profileSidebar);
console.log('ProfileSidebar.jsx created');
