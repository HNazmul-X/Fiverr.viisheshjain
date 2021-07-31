import React from 'react';
import ChatBox from './ChatBox';
import ChatInfo from './ChatInfo';
import Chatlist from './Chatlist';

const SuperChat = () => {
    return (
        <section id="superchat-page">

            <Chatlist className="chatlist column"/>
            <ChatBox className="chatbox column"/>
            <ChatInfo className="chatInfo column"/>
            
        </section>
    );
};

export default SuperChat;