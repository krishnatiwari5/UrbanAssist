import React from 'react'
import "../Statisticbar/statisticbar.css"


function StatisticBar() {
  return (
    <div className="statisticbarcon">
    <div className='statisticbar'>
        <div className="shortabout statisticbarblock"> <b>UrbanAssist</b> has been providing guidance to people worldwide about their location for the past ten years.<br/><b>UrbanAssist</b> leading platform in the market for provinding best Assistance.</div>
        <div className="cusnum statisticbarblock">
            <p><b className='statenum'>111K+</b> <br />Satisfied Customer</p>
        </div>
        <div className="expnum statisticbarblock">
        <p><b className='statenum'>10+</b> <br />Year of Experience</p>

        </div>
        <div className="desnum statisticbarblock">
        <p><b className='statenum'>551+</b> <br />Location served</p>

        </div>
    </div>
    </div>
  )
}

export default StatisticBar