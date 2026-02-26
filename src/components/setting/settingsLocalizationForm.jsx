import React, { useState } from 'react'
import PageHeaderSetting from '@/components/shared/pageHeader/PageHeaderSetting'
import { settingOptions } from './settingsEmailForm'
import SelectDropdown from '@/components/shared/SelectDropdown'
import { timezonesData } from '@/utils/fackData/timeZonesData'
import MultiSelectTags from '@/components/shared/MultiSelectTags'
import { languagesData } from '@/utils/fackData/languagesData'
import useLocationData from '@/hooks/useLocationData'
import PerfectScrollbar from 'react-perfect-scrollbar'
import Footer from '@/components/shared/Footer'
import LlmAuditOptimization from '../widgetsList/LlmAuditOptimization'
import LeadsStatus from '../widgetsTables/LeadsStatus'
import Browser from '../widgetsList/Browser'
import RankTracking from './RankTracking'

const dateFormatOptions = [
    { value: "d-m-Y", label: "d-m-Y" },
    { value: "d/m/Y", label: "d/m/Y" },
    { value: "m-d-Y", label: "m-d-Y" },
    { value: "m.d.Y", label: "m.d.Y" },
    { value: "m/d/Y", label: "m/d/Y" },
    { value: "y-m-d", label: "y-m-d" },
    { value: "d.m.y", label: "d.m.y" },
]
const SettingsLocalizationForm = () => {
    const { countries, states, cities, loading, error, fetchStates, fetchCities } = useLocationData();
    const [selectedOption, setSelectedOption] = useState(null)
    const options = settingOptions
    return (
        <div className="content-area">
            <PerfectScrollbar>
                <PageHeaderSetting />
                <div className="content-area-body">
                    <div className="card mb-0" style={{ background: "transparent", boxShadow: "none" }}>
                        <div className="card-body">
                            <div className='row justify-content-center align-items-center'>
                                <div className='col-4'>

                                 <Browser title={"Domain Performance"} />
                                </div>
                                 <div className='col-8'>

                                 <RankTracking title={"Rank Tracking"} />
                                </div>
                                <div className='col-12'>

                                 <LeadsStatus title="AI Overview" progressFullHeight={true} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <Footer /> */}
            </PerfectScrollbar>
        </div>

    )
}

export default SettingsLocalizationForm