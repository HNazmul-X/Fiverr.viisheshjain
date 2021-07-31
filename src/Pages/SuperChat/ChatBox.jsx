import { InlineIcon } from "@iconify/react";
import React from "react";
import PRODUCT_CHAT_CARD from "../../Components/Product_ChatCard/Product_ChatCard";

const ChatBox = ({ className }) => {
    return (
        <section className={className}>
            <div className="rise-a-tricket m-0 row w-100">
                <div className="col-10">
                    <h5>Rise a Tricket</h5>
                </div>
                <div className="col-2">
                    <InlineIcon icon="clarity:times-circle-line" />
                </div>
            </div>
            <div className="chat-wrapper">
                <PRODUCT_CHAT_CARD />
            </div>

            <div className="massage-sender-options">
                <div class="input-group">
                    <span class="input-group-text emoji" id="basic-addon1">
                        <InlineIcon icon="bi:emoji-smile-fill" />
                    </span>
                    <input type="text" class="form-control" placeholder="Username" />
                    <span class="input-group-text camera" id="basic-addon1">
                        <InlineIcon icon="bi:camera" />
                    </span>
                    <span class="input-group-text attach" id="basic-addon1">
                        <InlineIcon icon="akar-icons:attach" />
                    </span>
                    <span class="input-group-text send" id="basic-addon1">
                        <InlineIcon icon="fluent:send-20-filled" />
                    </span>
                </div>
            </div>
        </section>
    );
};

export default ChatBox;
