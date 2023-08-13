import React from 'react';
import './InterviewPage.css'; 
import ChatSection from '../components/chat-section/ChatSection';
import InputSection from '../components/input-section/InputSection';

function InterviewPage() {
  return (
    <div className="interview-page">
      <ChatSection/>
      <InputSection/>
    </div>
  );
}

export default InterviewPage;
