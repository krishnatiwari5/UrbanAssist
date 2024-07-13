import React, { useState } from 'react'
import "../Searchpage/searchresult.css"
import Hotels from  "../../data/hotels.json"
import {Link} from "react-router-dom"
import {BiSolidPhoneCall } from "react-icons/bi"
import {BiSolidDirectionLeft} from "react-icons/bi"
import {BsFillInfoCircleFill} from "react-icons/bs"

function Searchresult() {

    const [page, setPage] = useState(1);

    const selectPageHandler = (selectedPage) => {
        if (selectedPage >= 1 && selectedPage <= Math.ceil(Hotels.length / 4) && selectedPage !== page) {
          setPage(selectedPage)
        }
      }
  return (
    <div className="sresultimgcon">
    <div className='sresultcon'>
                    { Hotels && Hotels.slice(page * 4 - 4, page * 4).map(hotel => {
                        return (
                          // <div className="sresultseccon">
                            // <div className="sresultthird" key={hotel.name}  >
                            // <div className="srinforatecon"  >
                            <div className="sresult" key={hotel.name} >
                            <div className="srimgcon">
                                <img className='srimg' src={hotel.image} alt="" />
                            </div>
                            <div className="srinforatecon">
                                <div className="srinfo">
                                <h3 className="rname">{hotel.name}</h3>
                                <div className="radd">
                                <p className='raddadd'>{hotel.address}</p>
                                <p className='radddis'>{hotel.away} Km from your location</p>
                                <button className="srdirection"> <Link to={hotel.direction} target='_blank'><BiSolidDirectionLeft classname="srinfoicon"/> Direction </Link> </button>
                              <a  href="tel:+91-93271-20122"   target='_blank' ></a>  <button className="srcall"><BiSolidPhoneCall classname="srinfoicon"/> Call</button>
                                </div>
                                </div>
                                <div className="srrate">
                                    <p>Starting at</p>
                                    <h3 className='srprice'>Rs.1955.00</h3>
                                    <p> &#9733; &#9733; &#9733; &#9733; &#9733;</p>
                                    <button className="moreinfobtn"><Link to={`moreinfo/${hotel.name}`} state={{data : hotel}} ><BsFillInfoCircleFill/> More Info </Link></button>
                                </div>
                            </div>
                        {/* </div>  */}
                        {/* </div> */}
                        {/* </div> */}
                        </div>
                        )
                    })}
           
        { Hotels.length > 0 && <div className="pagination">

        <span onClick={() => selectPageHandler(page - 1)} className={page > 1 ? "" : "pagination__disable"}>◀</span>
        {[...Array(Math.ceil(Hotels.length / 4))].map((_, i) => {
          return <span key={i} className={page === i + 1 ? "pagination__selected" : ""} onClick={() => selectPageHandler(i + 1)}>{i + 1}</span>
        })}
<span onClick={() => selectPageHandler(page + 1)} className={page < Math.ceil(Hotels.length / 4) ? "" : "pagination__disable"}>▶</span>
      </div>
      }

           </div>
    <div className="spright">
    <img src="../images/traveller4.jpg" alt="" />
    <h2>Hurry Up! <br /> Let's go!</h2>
</div>
   
    </div>
  )
}

export default Searchresult