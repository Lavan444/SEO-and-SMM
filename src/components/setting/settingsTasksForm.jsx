import React, { useState } from 'react'
import PageHeaderSetting from '@/components/shared/pageHeader/PageHeaderSetting'
import PerfectScrollbar from 'react-perfect-scrollbar'
import Footer from '@/components/shared/Footer'
import SelectDropdown from '@/components/shared/SelectDropdown'
import { taskPriorityOptions, taskStatusOptions } from '@/utils/options'
import { settingOptions } from './settingsEmailForm'
import KeywordVolumeAnalysis from '../widgetsTables/KeywordVolumeAnalysis'


const roundOptions = [
    { value: "don't-round-up", label: "Don't Round Up" },
    { value: "round-up", label: "Round Up" },
    { value: "round-down", label: "Round Down" },
    { value: "round-to-nearest", label: "Round to Nearest" },
]

const SettingsTasksForm = () => {
    const [selectedOption, setSelectedOption] = useState(null)
    const priority = taskPriorityOptions
    const status = taskStatusOptions
    const options = settingOptions
    return (
        <div className="content-area" data-scrollbar-target="#psScrollbarInit">
            <PerfectScrollbar>
                {/* <PageHeaderSetting /> */}
                <div className="content-area-body">
                    {/* <div className="card mb-0"> */}
                        {/* <div className="card-body"> */}
                           
                           
                           
                        <KeywordVolumeAnalysis />
                        
                          
                           
                          
                           
                        {/* </div> */}
                    {/* </div> */}
                </div>
                {/* <Footer /> */}
            </PerfectScrollbar>
        </div>

    )
}

export default SettingsTasksForm