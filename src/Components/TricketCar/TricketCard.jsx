import { InlineIcon } from "@iconify/react";
import React from "react";
import styled from "styled-components";
import { Button } from "../../Styles/Styled-components/StyledComponets";

const TricketCard = ({
    isactive
}) => {
    return (
        <TricketCardSC className={`${isactive ? "active" : ""}trcketCard`}>
            <div className="row w-100">
                <div className="title col-10">
                    <InlineIcon className="fs-4" icon="bi:play-circle-fill" />
                    <span className="">HardWare and Ram Issue</span>
                </div>
                <div className="col-2 d-flex justify-content-evenly align-items-center p-0 text-align-end">
                    <span className="count ">2</span>
                    <InlineIcon className="three-dots iconify" icon="entypo:dots-three-vertical" />
                </div>
            </div>
            <div className="row align-items-center w-100">
                <div className="col-8">
                    <span className="text-secondary">requested by: </span>
                    <span>Adam Clark</span>
                </div>
                <div className="col-4 text-end p-0">
                    <InlineIcon className="call-icon" icon="fluent:call-28-filled" />
                </div>
                <div className="col-12">
                    <span className="text-secondary">Team: </span>
                    <span className="fw-bold">IT</span>
                </div>
            </div>
            <div className="row w-100">
                <div className="col-8">
                    <span className="text-secondary">Location: </span>
                    <span className="fw-bold">Mumby,Maharastra</span>
                </div>
                <div className="col-4 text-end p-0">
                    <span className="text-secondary ">Site Id: </span> <span>xyz123</span>
                </div>
            </div>
            <div className="row align-items-center w-100">
                <div className="col-8">
                    <Button color="white" padding="5px 20px !important" className="badge-btn red" border="none">
                        New
                    </Button>
                </div>
                <div className="col-4 text-end p-0">
                    <span className="text-secondary small"> 2 hours ago</span>
                </div>
            </div>
        </TricketCardSC>
    );
};

const TricketCardSC = styled.div`
    width: 100%;
`;

export default TricketCard;
