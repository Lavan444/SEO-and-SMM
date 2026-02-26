import React, { useState } from 'react'
import CardHeader from '@/components/shared/CardHeader'
import { FiCamera, FiClipboard, FiEdit, FiGrid, FiMail, FiMapPin, FiMoreHorizontal, FiMoreVertical, FiPhoneCall } from 'react-icons/fi'
import CircleProgress from '@/components/shared/CircleProgress'
import SelectDropdown from '@/components/shared/SelectDropdown'
import { projectsData } from '@/utils/fackData/projectsData'
import ImageGroup from '@/components/shared/ImageGroup'
import getIcon from '@/utils/getIcon'
import useCardTitleActions from '@/hooks/useCardTitleActions'
import CardLoader from '@/components/shared/CardLoader'

const projectStatusOptions = [
    { value: 'inprogress', label: 'Inprogress', color: 'blue' },
    { value: 'pending', label: 'Pending', color: 'gray' },
    { value: 'completed', label: 'Completed', color: 'green' },
    { value: 'rejected', label: 'Rejected', color: 'red' },
    { value: 'upcoming', label: 'Upcoming', color: 'orange' },
];

const   ProjectLeads = () => {
    const data = projectsData.leadsProject.map((proj) => {
        return ({ ...proj, options: projectStatusOptions })
    })
    const { refreshKey, isRemoved, isExpanded, handleRefresh, handleExpand, handleDelete } = useCardTitleActions();

    if (isRemoved) {
        return null;
    }
    return (
        <div className="col-lg-12">
            <div className={`card stretch stretch-full ${isExpanded ? "card-expand" : ""} ${refreshKey ? "card-loading" : ""}`}>
                {/* <CardHeader title={"Brand Recommendations"} refresh={handleRefresh} remove={handleDelete} expanded={handleExpand}  /> */}

                <div>
                    
                </div>
                <div className='card-body custom-card-action'>
                    {
                        data.map(({ title, salesReps, count, label, id, address, email, phone, revenue, advance, icon, options }, index) => (
                            <NeedleCard
                                key={id}
                                count={count}
                                label={label}
                                title={title}
                                badge={id}
                                phone={phone}
                                email={email}
                                address={address}
                                revenue={revenue}
                                salesReps={salesReps}
                                projectStatus="primary"
                                options={options}
                                index={index}
                                advance={advance}
                                icon={icon}
                            />
                        ))
                    }
                </div>
                <CardLoader refreshKey={refreshKey} />
            </div>
        </div>
    )
}

export default ProjectLeads


const NeedleCard = ({ index, count, label, title, badge, phone, email, address, revenue, salesReps, advance, icon, projectStatus, options }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const values = ["inprogress", "completed", "upcoming"]
    const defaultValue = options.find(option => option.value === values[index]);

    return (
        <div className={`row g-0 align-items-center ${index === projectsData.leadsProject.length - 1 ? "mb-0" : "mb-4"} lead-card-${index + 1}`}>
          
            <div className="col-lg-12 offset-lg-2 p-3">
                  <div className="d-flex flex-column text-dark mt-3">
                                                                                                        <h6 to="#" className="fs-16 mb-0 ">
                                                                                                            {/* <FiGlobe size={34} className="me-1" style={{boxShadow:" 1px 0px 0px -4px #eee",
                    border: "1px solid #eee",
                    padding: "5px",
                    borderRadius:"6px"}}/> */}
                     Brand Analysis</h6>
                                                                                                       <div className="d-flex align-items-center gap-1 mt-2 text-muted text-primary">
                                                                                                       
                                                                {/* <FiGlobe size={14} className="me-1" /> */}
                                                                {/* <span className="fs-14 fw-normal">asdfsdf</span> */}
                                                                 {/* <FiExternalLink size={16} className="opacity-75 ms-2" /> */}
                                                            </div>
                                                                                                    </div>
            </div>
        </div>
    );
};
