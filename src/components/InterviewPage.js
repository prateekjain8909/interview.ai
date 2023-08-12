import React, { useState, useRef, useEffect } from 'react';
import './InterviewPage.css';

function InterviewChat() {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  const messageListRef = useRef(null);

  const handleUserMessage = () => {
    if (userInput.trim() !== '') {
      setMessages([...messages, { text: userInput, isUser: true }]);
      // Process user input and generate AI response
      // Add AI response message to messages state
      setUserInput('');
    }
  };

  useEffect(() => {
    // Scroll to the bottom of the message list
    messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
  }, [messages]);

  return (
    <div className="interview-chat">
      <div className="chat-header">AI Interviewer</div>
      <div className="message-list" ref={messageListRef}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.isUser ? 'user' : 'ai'}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="input-section">
        <input
          type="text"
          placeholder="Type your answer..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button onClick={handleUserMessage}>Send</button>
      </div>
    </div>
  );
}

export default InterviewChat;
