import React from 'react'
import CardHeader from '@/components/shared/CardHeader';
import useCardTitleActions from '@/hooks/useCardTitleActions';
import { FiArrowRight, FiClock, FiMessageSquare } from 'react-icons/fi';
import CardLoader from '@/components/shared/CardLoader';
import MultiSelectTags from '../shared/MultiSelectTags';

const meetings = [
    { color: 'primary', title: 'USA', time: '12:30 AM' },
    { color: 'success', title: 'India', time: '12:30 AM' },
    { color: 'danger', title: 'Canada', time: '12:30 AM' },
    { color: 'warning', title: 'Australia', time: '12:30 AM' },
    { color: 'dark', title: 'Japan', time: '12:30 AM' },
    { color: 'danger', title: 'UK', time: '12:30 AM' },
];

const permissionsOptions = [
    { label: "India", value: "India" },
    { label: "USA", value: "USA" },
    { label: "Canada", value: "Canada" },
    { label: "Australia", value: "Australia" },
    { label: "Support", value: "support" },
    { label: "Projects", value: "projects" },
]

const Meeting = ({ title }) => {

    const { refreshKey, isRemoved, isExpanded, handleRefresh, handleExpand, handleDelete } = useCardTitleActions();

    if (isRemoved) {
        return null;
    }
    return (
        <div className="col-xxl-4 col-lg-6">
            <div className={`card stretch stretch-full ${isExpanded ? "card-expand" : ""} ${refreshKey ? "card-loading" : ""}`}>
                <CardHeader title={title} refresh={handleRefresh} remove={handleDelete} expanded={handleExpand} />

                <div className="card-body custom-card-action">
                    {/* {meetings.map((meeting, index) => (
                        <div key={index}>
                            <MeetingItem color={meeting.color} title={meeting.title} time={meeting.time} />
                            {meetings.length - 1 === index ? "" : <hr className="border-dashed my-3" />}
                        </div>
                    ))} */}
                     <div className="mb-5">
                            {/* <label className="form-label">Default contact permissions </label> */}
                            <MultiSelectTags
                                options={permissionsOptions}
                                defaultSelect={[permissionsOptions[0], permissionsOptions[1], permissionsOptions[2], permissionsOptions[3],]}
                            />
                            {/* <small className="form-text text-muted">Default contact permissions [Ex: USD/EUR/RUB]</small> */}
                        </div>
                        <div className="map-container mt-4">
  <iframe
    title="Meeting Locations"
    src="https://www.google.com/maps?q=India&output=embed"
    width="100%"
    height="auto"
    style={{ border: 0, borderRadius: '10px' }}
    allowFullScreen
    loading="lazy"
  />
</div>
                </div>
                
                {/* <a href="#" className="card-footer fs-11 fw-bold text-uppercase text-center">Update: 20 Min Ago</a> */}
                <CardLoader refreshKey={refreshKey} />
            </div>
        </div>

    )
}

export default Meeting

const MeetingItem = ({ color, title, time }) => {
    return (
        <div>
            {/* <div className="hstack gap-3"> */}
                {/* <div className={`wd-5 ht-6`} /> */}
                <div className={`ps-3 border-start border-3 border-${color} rounded`}>
                    <a href="#" className="fw-semibold mb-1 text-truncate-1-line">{title}</a>
                    {/* <a href="#" className="fs-12 text-muted">
                        <i className="lh-1 fs-10 me-1"><FiMessageSquare /></i>
                        <span className="fw-normal">Google Meet</span>
                    </a> */}
                </div>
            {/* </div> */}
            {/* <div className="hstack gap-2">
                <div className="avatar-text avatar-md" data-bs-toggle="tooltip" data-bs-trigger="hover" title={time}><FiClock /></div>
                <a href="#" className="avatar-text avatar-md"><FiArrowRight /></a>
            </div> */}
        </div>
    );
};
