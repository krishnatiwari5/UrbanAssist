import React from 'react'
import "../Category/category.css"

function Category() {
  return (
    <div className='category'>
        <h3>Choose by Category</h3>
        <div className="categoryList">
            <div className="listItem">
                <img src="../images/accomodation.png" alt="" className='categoryImg'/>
                <p>Accomodation</p>
                </div>
            <div className="listItem">
                <img src="../images/food&drink.png" alt="" className='categoryImg'/>
                <p>Food & Drink</p></div>
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
         
               <p>Entertainment</p> 
               </div>
        </div>
    </div>
  )
}

export default Category