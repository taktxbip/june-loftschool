import React, { Component } from 'react';
import './Chat.css';
import Message from 'homework2/Message';

class Chat extends Component {
    render() {
        return (
        <div className="Chat">
            <div className="Messages">

            </div>
                <input type="text" placeholder="Message"></input>
        </div>
        );
    }
}

export default Chat;