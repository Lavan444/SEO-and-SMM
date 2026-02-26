import React from 'react'
import ForecastRevenueMiscellaneous from '@/components/widgetsMiscellaneous/ForecastRevenueMiscellaneous'
import PageHeader from '@/components/shared/pageHeader/PageHeader'
import PageHeaderWidgets from '@/components/shared/pageHeader/PageHeaderWidgets'
import Footer from '@/components/shared/Footer'
import LeadsStatus from '@/components/widgetsTables/LeadsStatus'
import SalesPipelineChart from '@/components/widgetsCharts/SalesPipelineChart'
import EstimateStatisticsTwo from '@/components/widgetsStatistics/EstimateStatisticsTwo'
import ProjectAssingeMiscellaneous from '@/components/widgetsMiscellaneous/ProjectAssingeMiscellaneous'
import EstimateAreaChartThree from '@/components/widgetsCharts/EstimateAreaChartThree'
import ProjectDateLineMiscellaneous from '@/components/widgetsMiscellaneous/ProjectDateLineMiscellaneous'
import ProposalEditContent from '@/components/proposalEditCreate/ProposalEditContent'

const ReportsSales = () => {
  return (
    <>
      {/* <PageHeader>
        <PageHeaderWidgets />
      </PageHeader> */}

      <div className="main-content" style={{
        // background: "linear-gradient(to bottom right, rgba(209, 232, 240, 0.20) 0%, rgba(223, 253, 237, 0.20) 25%, rgba(213, 217, 244, 0.20) 38%, rgba(238, 209, 215, 0.20) 50%) bottom right / 50% 50% no-repeat, linear-gradient(to bottom left, rgba(209, 232, 240, 0.20) 0%, rgba(223, 253, 237, 0.20) 25%, rgba(213, 217, 244, 0.20) 38%, rgba(238, 209, 215, 0.20) 50%) bottom left / 50% 50% no-repeat, linear-gradient(to top left, rgba(209, 232, 240, 0.20) 0%, rgba(223, 253, 237, 0.20) 25%, rgba(213, 217, 244, 0.20) 38%, rgba(238, 209, 215, 0.20) 50%) top left / 50% 50% no-repeat, linear-gradient(to top right, rgba(209, 232, 240, 0.20) 0%, rgba(223, 253, 237, 0.20) 25%, rgba(213, 217, 244, 0.20) 38%, rgba(238, 209, 215, 0.20) 50%) top right / 50% 50% no-repeat, var(--Background-Secondary, #F8FAFC)",
        background: "linear-gradient(157deg, rgb(239 200 200 / 1%) 0%, rgb(255 223 223 / 81%) 51%, rgb(210 242 247 / 18%) 100%)",
        
        }}>
        <div className="row justify-content-between g-4">

          {/* LEFT STATS */}
          <div className="col-lg-3 col-md-4 ">
            <ProjectDateLineMiscellaneous />
          </div>

          <div className="col-lg-9 col-md-4 ">

            <div className='row'>
            
              {/* CENTER CHART */}
                <div className="col-lg-9 col-md-8">
                  {/* <SalesPipelineChart isFooterShow={true} /> */}
                  <ProposalEditContent />
                </div>

                {/* RIGHT STATS */}
                <div className="col-lg-3 col-md-4">
                  <EstimateStatisticsTwo />
                </div>

          </div>


          </div>

        

          {/*
          <ForecastRevenueMiscellaneous />
          <ProjectAssingeMiscellaneous />
          <EstimateAreaChartThree />
          <LeadsStatus title="Contact Leads" progressFullHeight={true} />
          */}
          
        </div>
      </div>

      {/* <Footer /> */}
    </>
  )
}

export default ReportsSales
