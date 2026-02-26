import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import NavigationManu from '@/components/shared/navigationMenu/NavigationMenu'
import useBootstrapUtils from '@/hooks/useBootstrapUtils'
import SettingSidebar from '@/components/setting/SettingSidebar'
import ProfileSidebar from '@/components/setting/ProfileSidebar'
import Header from '@/components/shared/header/Header'


const LayoutProfile = () => {
    const pathName = useLocation().pathname
    useBootstrapUtils(pathName)

    return (
        <>
            <Header />
            <NavigationManu />
            <main className="nxl-container apps-container">
                <div className="nxl-content without-header nxl-full-content">
                    <div className='main-content d-flex'>
                        <ProfileSidebar/>
                        <Outlet />
                    </div>
                </div>
            </main>
        </>
    )
}

export default LayoutProfile