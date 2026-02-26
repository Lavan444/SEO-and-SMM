import React from 'react';
import { Link } from 'react-router-dom';
import { reportSalesStatisticsData } from '@/utils/fackData/reportSalesStatisticsData';
import getIcon from '@/utils/getIcon';
import { FiArrowRight  } from 'react-icons/fi';
import { Tooltip } from "bootstrap";


const iconBgColors = [
  "#3454d1ba", // blue
  "#17c666a1", // green
  "rgb(255 162 29 / 61%)", // orange
  "rgb(234 77 77 / 53%)"  // red
];

const EstimateStatisticsTwo = () => {
    return (
        <>
            {
                reportSalesStatisticsData.map(({ id, last_month_sales, revenue, running_month_sales, title, icon }, index) => {

                    const bgColor = iconBgColors[index % iconBgColors.length];
                    
                    const parseSales = (sales) => {
                        if (typeof sales === 'string') {
                            const parsed = parseInt(sales.replace(/,/g, ''), 10);
                            return isNaN(parsed) ? 0 : parsed;
                        }
                        return sales || 0;
                    };

                    const last = parseSales(last_month_sales);
                    const running = parseSales(running_month_sales);

                    const isRunningGreater = running > last;
                    const badgeClass = isRunningGreater ? 'bg-soft-success text-success' : 'bg-soft-danger text-danger';
                    const symbol = isRunningGreater ? '+' : '-';

                    return (
                        <div key={id} className="col-xxl-12 col-md-12">
                            <div className="card stretch stretch-full white-opa">
                              <div className="card-body">
    <div className="vstack gap-3">
        <div>
                          


            <div className="hstack gap-2 mb-3 align-items-start">
                {React.cloneElement(getIcon(icon), { size: "40", strokeWidth: "1",  color: "#ffffff", style: { backgroundColor: bgColor, borderRadius: "15px", padding: "8px", } })}
                {/* <span className="fw-semibold text-dark">{title}</span> */}

                <div>
                 <h5 className="mt-2">{title}</h5>
                     <span className="fs-14 text-muted mb-0">{last_month_sales}</span>

                </div>
            </div>

         
                          <div className="d-flex align-items-center justify-content-end mb-0">
                                    <Link
                                        to="#"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        title="Preview"
                                        className="d-inline-flex align-items-center gap-1"
                                    
                                    >
                                    
                                    <FiArrowRight  style={{fontSize: "16px"}}  />
                                </Link>
                               </div>

            {/* <p className="fs-12 text-muted mb-2">
                vs last month:
                <span className="fw-semibold text-dark ms-1">
                    ${last_month_sales} USD
                </span>
            </p> */}
        </div>

        {/* <Link to="#" className={`badge align-self-start ${badgeClass}`}>
            {symbol} {revenue}%
        </Link> */}
    </div>
</div>

                            </div>
                        </div>
                    )
                }
                )
            }
        </>
    );
};

export default EstimateStatisticsTwo;
