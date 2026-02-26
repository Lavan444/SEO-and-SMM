import React, { useState } from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'

import Schedule from '../widgetsList/Schedule'
import Project from '../widgetsList/Project'
import Progress from '../widgetsList/Progress'
import Notifications from '../widgetsList/Notifications'

import UsersList from '../widgetsList/UsersList'
import Trending from '../widgetsList/Trending'
import Accounts from '../widgetsList/Accounts'
import Feedback from '../widgetsList/Feedback'

import ActivityTwo from '../widgetsList/ActivityTwo'
import Todos from '../widgetsList/Todos'
import ServiceProduct from '../widgetsList/ServiceProduct'
import Specialities from '../widgetsList/Specialities'
import LocationManagement from '../widgetsList/LocationManagement'
import CoreAnalysisResults from '../widgetsList/CoreAnalysisResults'
import CompetitorModal from '../widgetsList/CompetitorModal'
import WebsiteAnalysisSetup from './WebsiteAnalysisSetup'

const SettingSeoForm = () => {
    const [currentStep, setCurrentStep] = useState(1)
     const [showModal, setShowModal] = useState(false);

   


    const totalSteps = 4

    const nextStep = () => {
    // If on step 3 → open modal instead of navigating
    if (currentStep === 3) {
        setShowModal(true)
        return
    }

    if (currentStep < totalSteps) {
        setCurrentStep(prev => prev + 1)
    }
}

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(prev => prev - 1)
        }
    }

    const steps = [
        "Website Overview",
        "User & Engagement",
        "Services & Activity",
        "Location"
    ]

    return (
        <div className="content-area setting-form">
            <PerfectScrollbar>
                <div className='main-content' style={{ padding: "30px" }}>

                    {/* ================= STEP HEADER ================= */}
                    <div className="mb-4">
                        <div className="d-flex justify-content-between align-items-center">
                            {steps.map((label, index) => {
                                const stepNumber = index + 1
                                const isActive = currentStep === stepNumber
                                const isCompleted = currentStep > stepNumber

                                return (
                                    <div
                                        key={index}
                                        className="text-center flex-fill position-relative"
                                    >
                                        {/* <div
                                            className={`mx-auto mb-2 rounded-circle d-flex align-items-center justify-content-center`}
                                            style={{
                                                width: 40,
                                                height: 40,
                                                backgroundColor: isCompleted
                                                    ? "#17c666"
                                                    : isActive
                                                    ? "#3454d1"
                                                    : "#e9ecef",
                                                color: isCompleted || isActive
                                                    ? "#fff"
                                                    : "#6c757d",
                                                fontWeight: 600
                                            }}
                                        >
                                            {stepNumber}
                                        </div> */}
                                        {/* <div
                                            style={{
                                                fontSize: 14,
                                                fontWeight: isActive ? 600 : 400,
                                                color: isActive ? "#3454d1" : "#6c757d"
                                            }}
                                        >
                                            {label}
                                        </div> */}

                                        {/* Line Connector */}
                                        {/* {stepNumber !== totalSteps && (
                                            <div
                                                style={{
                                                    position: "absolute",
                                                    top: 20,
                                                    right: "-50%",
                                                    width: "100%",
                                                    height: 2,
                                                    backgroundColor:
                                                        currentStep > stepNumber
                                                            ? "#17c666"
                                                            : "#e9ecef",
                                                    zIndex: -1
                                                }}
                                            />
                                        )} */}
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    {/* ================= STEP CONTENT ================= */}
                    <div className='row'>


                      {showModal && (
                            <CompetitorModal
                                onClose={() => setShowModal(false)}
                                onContinue={() => {
                                    setShowModal(false)
                                    setCurrentStep(4)
                                }}
                            />
                        )}



                        {currentStep === 1 && (
                            <>
                         <WebsiteAnalysisSetup title="Brand Recommendations" />

                                {/* <Schedule title={"Website Analysis Complete"} />
                                <Notifications title={"Business Model"} />
                                <Project
                                    title={"Competitors"}
                                    borderShow={true}
                                    cardYSpaceClass={"hrozintioal-card"}
                                />
                                <Progress title={"Progress"} footerShow={true} />
                                <UsersList title={"Users"} />
                                <Trending title={"Trending"} />
                                <Accounts title={"Accounts"} />
                                <Feedback title={"Feedback"} /> */}
                            </>
                        )}

                        {currentStep === 2 && (
                            <>
                              <ActivityTwo title={"Activity"} />
                                <Todos title={"Services / Products"} />
                                <ServiceProduct title={"Services / Products"} />
                                <Specialities title={"Services / Products"} />
                            </>
                        )}

                        {currentStep === 3 && (
                            <>
                                  {/* {showModal && <CompetitorModal onClose={() => setShowModal(false)} />}  */}
                                    <LocationManagement title={"Suggestions"}/> 
                            </>
                        )}

                          {currentStep === 4 && (
                            <>
                               
                                 <CoreAnalysisResults /> 
                                    
                            </>
                        )}

                         {/* {currentStep === 5 && (
                            <>
                               
                                   
                                    
                            </>
                        )} */}

                    </div>

                    {/* ================= NAVIGATION BUTTONS ================= */}
                    <div className="d-flex justify-content-between mt-4 pt-3">
                        <button
                            className="transparent-btn"
                            onClick={prevStep}
                            disabled={currentStep === 1}
                        >
                            Back
                        </button>

                        <button
                            className="custom-btn border-0"
                            onClick={nextStep}
                            disabled={currentStep === totalSteps}
                        >
                            {currentStep === totalSteps ? "Next" : "Next"}
                        </button>
                    </div>

                </div>
            </PerfectScrollbar>
        </div>
    )
}

export default SettingSeoForm
