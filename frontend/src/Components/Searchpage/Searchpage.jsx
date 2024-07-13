import React from 'react'
import Spnav from './Spnav'
import "../Searchpage/searchpage.css"
import Searchresult from './Searchresult'



function Searchpage() {
  return (
    <div className="searchpageentire">
{/* <Spnav/> */}
        <div className='searchpage'>
            <div className="choicelist">
            <h3>Choose by Category</h3>
        <div className="choicecategoryList">
            <div className="listItem">
                <img src="../images/accomodation.png" alt="" className='categoryImg'/>
                <p>Accomodation</p>
                </div>
            <div className="listItem">
                <img src="../images/food&drink.png" alt="" className='categoryImg'/>
                <p>Food & Drink</p></div>
            <div className="listItem">
                <img src="../images/hospital.png" alt="" className='categoryImg'/>
                <p>Hospital</p></div>
            <div className="listItem">
            <img src="../images/shopping.png" alt="" className='categoryImg'/>
               <p>Shopping</p></div>
            <div className="listItem">
                <div className="imgbg">
            <img src="../images/history.png" alt="" className='categoryImg'/>
            </div>
                <p>Art & History</p>
                </div>
            <div className="listItem">
            <img src="../images/entertainment.png" alt="" className='categoryImg'/>
               <p>Entertainment</p> </div>
            <div className="listItem">
            <img src="../images/college.png" alt="" className='categoryImg'/>
               <p>Educational Institutes</p> </div>
            <div className="listItem">
            <img src="../images/park.png" alt="" className='categoryImg'/>
               <p>Park</p> </div>
        </div>
            </div>
            <div className="searchresult">
            <div className="spsearch">
            <select name="choicecat" id="choice">
  <option value="all">All</option>
  <option value="hotel">Hotel</option>
  <option value="resturant">Resturant</option>
  <option value="hospital">Hospital</option>
</select>
                <input type="text" placeholder='Hotels, Resturants, Hospital...'/>
                <button>Search</button>
                <div className="spfilter">
                    <button>filter</button>
                    <button>sort by</button>
                </div>

            </div>
           <Searchresult/>
            </div>

        </div>
    </div>
  )
}

export default Searchpage