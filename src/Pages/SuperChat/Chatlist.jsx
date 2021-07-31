import { InlineIcon } from "@iconify/react";
import React from "react";
import TricketCard from "../../Components/TricketCar/TricketCard";

const Chatlist = ({ className }) => {
    return (
        <section className={className}>
            <div className="searchbar-area w-100 m-0 row align-content-center">
                <div class="col-10 input-group ">
                    <span class="input-group-text" id="basic-addon1">
                        {" "}
                        <InlineIcon icon="fe:search" />{" "}
                    </span>
                    <input type="text" class="form-control" placeholder="Username" />
                </div>

                <div className="upper-down d-flex flex-column col-2">
                    <button>
                        <InlineIcon icon="fluent:chevron-up-12-filled" />
                    </button>
                    <button>
                        <InlineIcon icon="fluent:chevron-down-12-filled" />
                    </button>
                </div>
            </div>

            <div className="chatTabs-area">
                <ChatTabs />
            </div>

            <div className="rise-tricket">
                <button>
                    <InlineIcon icon="bi:plus-lg" />
                    <span>Rise a New Tricket</span>
                </button>
            </div>

            <div className="filter-buttons-group">
                <button className="active" >new</button>
                <button className="" >all</button>
                <button className="" >ongoing</button>
                <button className="" >closed</button>
            </div>


            <section id="all-tricket-wrapper">
                <TricketCard/>
                <TricketCard/>
                <TricketCard/>
                <TricketCard/>
                <TricketCard/>
              
            </section>


        </section>
    );
};



const ChatTabs = () => {


    return (
        <>
            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">
                        Chat
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">
                        Tricket
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">
                        <InlineIcon icon="bi:patch-question-fill" />
                    </button>
                </li>
            </ul>
        </>
    );

}









export default Chatlist;
