import React, { useState } from 'react'
import Footer from '@/components/shared/Footer'
import PageHeaderSetting from '@/components/shared/pageHeader/PageHeaderSetting'
import SelectDropdown from '@/components/shared/SelectDropdown'
import InputTopLabel from '@/components/shared/InputTopLabel'
import TextAreaTopLabel from '@/components/shared/TextAreaTopLabel'
import { FiInfo } from 'react-icons/fi'
import PerfectScrollbar from 'react-perfect-scrollbar'
import SeoAuditOptimization from '../widgetsList/SeoAuditOptimization'

const mailEngine = [
    { value: "HPMailer", label: "HPMailer" },
    { value: "codeIgniter", label: "CodeIgniter" },
]
const mailProtocol = [
    { value: "Mail", label: "Mail" },
    { value: "SMTP", label: "SMTP" },
    { value: "Sendmail", label: "Sendmail" },
]
export const settingOptions = [
    { value: "yes", label: "Yes", icon: "feather-check", iconClassName: "text-success" },
    { value: "no", label: "No", icon: "feather-x", iconClassName: "text-danger" },
]

const SettingsEmailForm = () => {
    const [selectedOption, setSelectedOption] = useState(null)
    const options = settingOptions
    return (
        <div className="content-area">
            <PerfectScrollbar>
                {/* <PageHeaderSetting /> */}
                <div className="content-area-body">
                    <div className="card mb-0" style={{background: "transparent",}}>
                        <div className="card-body">
                          
                           <SeoAuditOptimization />
                       
                          
                        </div>
                    </div>
                </div>
                {/* <Footer /> */}
            </PerfectScrollbar>
        </div>

    )
}

export default SettingsEmailForm