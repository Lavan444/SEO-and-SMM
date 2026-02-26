import React, { useState } from 'react'
import PageHeaderSetting from '@/components/shared/pageHeader/PageHeaderSetting'
import InputTopLabel from '@/components/shared/InputTopLabel'
import TextAreaTopLabel from '@/components/shared/TextAreaTopLabel'
import Footer from '@/components/shared/Footer'
import SelectDropdown from '@/components/shared/SelectDropdown'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { settingOptions } from './settingsEmailForm'
import Schedule from '../widgetsList/Schedule'
import Project from '../widgetsList/Project'
import Progress from '../widgetsList/Progress'
import Meeting from '../widgetsList/Meeting'
import UsersList from '../widgetsList/UsersList'
import Todos from '../widgetsList/Todos'
import Trending from '../widgetsList/Trending'
import Accounts from '../widgetsList/Accounts'
import Notifications from '../widgetsList/Notifications'
import Feedback from '../widgetsList/Feedback'
// import { Activity } from 'react'
import ActivityTwo from '../widgetsList/ActivityTwo'
import Profile from '../widgetsList/Profile'
import Socal from '../widgetsList/Social'
import Suggestions from '../widgetsList/Suggestions'
import Browser from '../widgetsList/Browser'
import Tickets from '../widgetsList/Tickets'
import ScheduleTwo from '../widgetsList/ScheduleTwo'
import InvoiceOverview from '../widgetsList/InvoiceOverview'
import ProjectLeads from '../widgetsList/ProjectLeads'
import Upgrade from '../widgetsList/Upgrade'
import { upcomingEventsData } from '@/utils/fackData/upcomingEventsData'
import TechanicalAuditReport from './TechanicalAuditReport'



const SettingsTagsForm = () => {
    const [selectedOption, setSelectedOption] = useState(null)
    const options= settingOptions
    return (
        <div className="content-area setting-form">
            <PerfectScrollbar>
                {/* <PageHeaderSetting /> */}
                <div className='main-content' style={{padding: "30px 30px 5px"}}>
                <div className='row justify-content-center align-items-center'>
        <div className='col-6'>
        </div>
                 
                    {/* <Schedule title={"Website Analysis Complete"} />
                    <Notifications title={"Business Model"} />
                     <Todos title={"Services / Products"} />
                     <Todos title={"Keywords Identified"} />
                     <Meeting title={"Location"} />
                      <Socal title={"Competitors"}/>
                    
                    <InvoiceOverview title={"Brand Analysis"}/>
                    <InvoiceOverview title={"Core Analysis Results"}/>
                    <ProjectLeads/> */}

                     {/* <InvoiceOverview title={"Brand Analysis"}/> */}

                     <TechanicalAuditReport title={"Technical Audit Report"} />

                    
                </div>
            </div>
            </PerfectScrollbar>
        </div>

    )
}

export default SettingsTagsForm