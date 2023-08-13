import React from 'react';
import Chat from './chat/Chat'; // Import the Chat component
import './ChatSection.css'; // Import the ChatSection.css file

function ChatSection({messages}) {
  return (
    <div className="chat-section">
      {messages.map((message, index) => (
        <Chat user={message.user} message={message.message} />
      ))}
    </div>
  );
}

export default ChatSection;
