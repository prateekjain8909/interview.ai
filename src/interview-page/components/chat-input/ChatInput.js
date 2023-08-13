import React, { useState } from 'react';
import './ChatInput.css'; // Import the ChatInput.css file

function ChatInput({ onSendMessage }) {
  const [inputMessage, setInputMessage] = useState('');

  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
  };

  const handleSendClick = () => {
    if (inputMessage.trim() !== '') {
      onSendMessage(inputMessage);
      setInputMessage('');
    }
  };

  return (
    <div className="chat-input c1">
      <input
        type="text"
        value={inputMessage}
        onChange={handleInputChange}
        placeholder="Send a message"
        className="input-field"
      />
      <button className="send-button" onClick={handleSendClick}>
      <div className="triangle"></div>
      </button>
    </div>
  );
}

export default ChatInput;
