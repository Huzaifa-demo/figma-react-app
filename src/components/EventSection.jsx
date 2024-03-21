import React from 'react'
import boxone from './images/box-1.png';
import boxtwo from './images/box-2.png';
import boxthree from './images/box-3.png';


const EventSection = () => {
  return (
    <div>
        <div className="events-sec">
        <h2>Top Event Lists </h2>

        <div className="events">
            <div className="evevnt-box">
                <img className="border-blue" src={boxone} alt="" />
                <img src={boxtwo} alt="" />
                <img src={boxthree} alt="" />

            </div>
        </div>
    </div>
    </div>
  )
}

export default EventSection
