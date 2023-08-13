import React from 'react';
import './Chat.css'; // Import the Chat.css file

function Chat({ user, message }) {
  return (
    <div className={`chat ${user === 'user' ? 'user-chat' : 'interviewer-chat'}`}>
      <div className='chat-content c1'>
      <div className="logo">
        {user === 'user' ? <span>U</span> : <span>AI</span>}
      </div>
      <div className="message">
        {message}
      </div>
      </div>
    </div>
  );
}

export default Chat;
