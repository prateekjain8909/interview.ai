import React, { useState } from 'react';
import './InterviewPage.css'; 
import ChatSection from '../components/chat-section/ChatSection';
import ChatInput from '../components/chat-input/ChatInput';

function InterviewPage() {
  const initialMessages = [
    { user: "user", message: "Hello, AI!" },
    { user: "interviewer", message: "Hi there! How can I help you today?" }
  ];

  const [messages, setMessages] = useState(initialMessages);
  const handleSendMessage = (message) => {
    const newUserMessage = { user: 'user', message };
    const newInterviewerMessage = { user: 'interviewer', message: "Message received" };

    // Create an updated array of messages
    const updatedMessages = [...messages, newUserMessage, newInterviewerMessage];

    // Update the state with the updated array of messages
    setMessages(updatedMessages);
  };
  return (
    <div className="interview-page">
      <ChatSection messages={messages}/>
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
}

export default InterviewPage;
