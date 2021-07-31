import React from 'react';
import  CARD_IMG from "../../images/self-improvement-books.jpg"

const PRODUCT_CHAT_CARD = () => {
    return (
        <div id="Product_ChatCard">
           <div className="thumbnail-area">

            

            <img className="img-fluid product-img" src={CARD_IMG} alt="" />
           </div>
           <div className="description-area">
               <div className="title">
                   <h5>Hard-drive and Ram Issue</h5>
               </div>
               <div className="requestor">
                   <span>requested by</span><span>Adam-clard</span>
               </div>
               <div className="team row w-100">
                   <div className="col-6">
                       <span>Team : </span> <span>IT</span>
                   </div>
                   <div className="col-6">
                       <span>Site Id : </span> <span>xyz123</span>
                   </div>
               </div>

               <div className="location">
                   <span>Location : </span> <span>Mumby Maharastra</span>
               </div>
               <div className="status row w-100">
                   <div className="col-8">
                       <span>Status : </span> <span>Created</span>
                   </div>
                   <div className="col-4">
                        <span className="text-secondary small">2 hours ago</span>
                   </div>
               </div>
               <div className="time">
                   <p className="small text-end"><span>04</span> : <span>50</span> </p>
               </div>
           </div>
        </div>
    );
};

export default PRODUCT_CHAT_CARD;