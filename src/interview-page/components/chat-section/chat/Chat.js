import React from 'react';
import './Chat.css'; // Import the Chat.css file

function Chat({ user, message }) {
  const formattedMessage = message.replace(/\n/g, '<br>');
  return (
    <div className={`chat ${user === 'user' ? 'user-chat' : 'interviewer-chat'}`}>
      <div className='chat-content c1'>
      <div className="logo">
        {user === 'user' ? <span>U</span> : <span>AI</span>}
      </div>
      <div className="message" dangerouslySetInnerHTML={{ __html: formattedMessage }}>
      </div>
      </div>
    </div>
  );
}

export default Chat;
