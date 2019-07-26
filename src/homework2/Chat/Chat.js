import React, { Component } from 'react';
import './Chat.css';
import Message from 'homework2/Message';

class Chat extends Component {

    state = {
        messages: [],
        messageInput: ''
    };

    sendMessageOnEnter = event => {
        const value = this.state.messageInput;
        if (event.key === 'Enter') {
            this.setState(state => ({
                messages: [...this.state.messages, { text: value }],
                messageInput: ''
            }))
        }
    };

    changeInputMessage = event => {
        const value = event.target.value;
        this.setState(state => ({
            messageInput: value
        }))
    }

    render() {
        return (
            <div className="chat">
                <div className="message-list">
                    <div className="messages">
                        {this.state.messages.map((element, id) => {
                            return <Message text={element.text} key={id} />;
                        })}
                    </div>
                </div>
                <input
                    className="input-message"
                    onChange={this.changeInputMessage}
                    onKeyPress={this.sendMessageOnEnter}
                    value={this.state.messageInput}
                />
            </div>
        );
    }
}




export default Chat;