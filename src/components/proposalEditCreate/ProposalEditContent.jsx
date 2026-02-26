import React, { useEffect, useState } from 'react'
import DatePicker from "react-datepicker";
import SelectDropdown from '@/components/shared/SelectDropdown'
import MultiSelectImg from '@/components/shared/MultiSelectImg'
import MultiSelectTags from '@/components/shared/MultiSelectTags'
import Loading from '@/components/shared/Loading'
import AddProposal from './AddProposal'
import { currencyOptionsData } from '@/utils/fackData/currencyOptionsData'
import useDatePicker from '@/hooks/useDatePicker';
import { addDays } from 'date-fns';
import { timezonesData } from '@/utils/fackData/timeZonesData';
import { propasalLeadOptions, propsalDiscountOptions, propsalRelatedOptions, propsalStatusOptions, propsalVisibilityOptions, taskAssigneeOptions, taskLabelsOptions } from '@/utils/options';
import useLocationData from '@/hooks/useLocationData';
import { Link } from 'react-router-dom';
import { FiPlay, FiZap } from 'react-icons/fi';

const previtems = [
    {
        id: 1,
        product: "Website design and development",
        qty: 1,
        price: 250
    },
    {
        id: 2,
        product: "Search engine optimization (SEO) optimization",
        qty: 2,
        price: 300
    },
]

const ProposalEditContent = () => {
    const [selectedOption, setSelectedOption] = useState(null); 
    const { startDate, endDate, setStartDate, setEndDate, renderFooter } = useDatePicker();
    const { countries, states, cities, loading, error, fetchStates, fetchCities,} = useLocationData();


    useEffect(() => {
        setStartDate(new Date())
        setEndDate(addDays(new Date(), 2))
    }, []);


    return (
        <>
            {loading ? <Loading /> : ""}

            <div className="col-xl-12 card white-opa" style={{height: "550px",}}>

                <div className='row mt-5'>
                    <div className='col-xl-8 m-auto'>
                         <div className=" stretch stretch-full">
                    <div className="card-body">

                        <div className='text-center'>
                            <h2 className="mb-1" style={{lineHeight: "44px"}}>Add Website to Start the</h2> <h2 className="mb-3" style={{lineHeight: "44px"}}>AI SEO and SMM Automation</h2>
                            <div class="fs-14 text-muted mb-0 mb-4"><span class="text-dark fw-medium"></span> Launch powerful SEO and social media campaigns in minutes with our AI automation platform. Launch powerful SEO and social media campaigns in minutes.</div>
                        </div>
                        <div className="mb-2">
                            {/* <label className="form-label">Subject <span className="text-danger">*</span></label> */}
                            <input type="text" className="form-control" style={{padding: "17px", borderRadius: "15px"}}  placeholder="Enter your website URL" defaultValue="" />
                        </div>

                      

                       
                      

                       
                    
                    
                   
                    </div>
                </div>
                    </div>

                    <div className='col-xl-7 m-auto g-4'>

                        <div className='d-flex justify-content-center gap-5 flex-wrap mb-5 mt-3'>

                              <Link to="#" className="custom-btn"><FiZap size={14} className='me-1' /> Start AI Scan</Link>

                            <Link to="#" className="custom-btn"><FiPlay size={14} className='me-2' /> Watch Demo</Link>

                           
                        </div>


                          {/* <div className='d-flex justify-content-around gap-2 flex-wrap mb-5 border-top mt-5 mb-0'>

                            
         <div className="card-body">
        
                                <div className='text-center mb-2'>
                                    <h3 className="mb-1 mt-4" style={{lineHeight: "44px"}}>Try with a Demo Website</h3>
                                    <div class="fs-14 text-muted"><span class="text-dark fw-medium"></span> Explore a Demo project with sample data</div>
                                </div>
                                   <div className="card-footer border-0 p-0 mt-4 text-center">
                                                                                         <Link to="#" className="custom-btn m-auto">Try with a Demo Website</Link>
                                                                                     </div>
        
                              
        
                               
                              
        
                               
                            
                            
                           
                            </div>
                                                      

                        </div> */}


                    </div>
                </div>
               
            </div>
          
            <AddProposal previtems={previtems} />
        </>
    )
}

export default ProposalEditContent