import React from 'react';
import Chat from './chat/Chat'; // Import the Chat component
import './ChatSection.css'; // Import the ChatSection.css file

function ChatSection() {
  return (
    <div className="chat-section">
    <Chat user="user" message="Hello, AI!" />
    <Chat user="interviewer" message="Hi there! How can I help you today?" />
    </div>
  );
}

export default ChatSection;
