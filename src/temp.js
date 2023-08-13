import React, { useState } from 'react';
import Chat from './Chat';
import ChatInput from './ChatInput';

function ChatSection() {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (message) => {
    // Update the state to include the new message
    setMessages([...messages, { user: 'user', message }]);
  };

  return (
    <div className="chat-section">
      {messages.map((message, index) => (
        <Chat key={index} user={message.user} message={message.message} />
      ))}
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
}

export default ChatSection;
