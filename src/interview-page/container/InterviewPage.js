import React, { useState } from 'react';
import speakTts from 'speak-tts';
import './InterviewPage.css'; 
import ChatSection from '../components/chat-section/ChatSection';
import ChatInput from '../components/chat-input/ChatInput';

function InterviewPage() {
  const initialMessages = [
    { user: "user", message: "You will take my technical interview on designing a URL shortener system. You need to ask me for my step-by-step approach to designing the URL shortener instead of providing the solution. Ask me to answer I thing at a time if you think my answer is correct then go to the next step" },
    { user: "interviewer", message: "Of course, I'd be happy to help you with your technical interview on designing a URL shortener system. Let's begin step by step:\nStep 1: Requirements Gathering\nCan you please explain what the main requirements are for your URL shortener system? This would involve understanding factors like expected user load, scalability needs, security considerations, and any specific features you have in mind." },
    // { user: "user", message: "Hello, AI!" },
    // { user: "interviewer", message: "Hi there! How can I help you today?" },
    // { user: "user", message: "Hello, AI!" },
    // { user: "interviewer", message: "Hi there! How can I help you today?" },
  ];

  const speech = new speakTts();
  speech.init({
    lang: 'en',
    rate: 0.9,
    pitch: 1,
    voice: 'Google US English',
    splitSentences: true,
  });

  const sendMessageToApi = async (message) => {
    try {
      const response = await fetch('http://localhost:8080/v1/interview/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });
  
      if (!response.ok) {
        throw new Error('API request failed');
      }
  
      const data = await response.json();
      console.log("data", data)
      return data; // Extract the response message
    } catch (error) {
      console.error('API request error:', error);
      return 'API request failed';
    }
  };
  

  const [messages, setMessages] =  useState(initialMessages);
  const handleSendMessage = async (message) => {
    const newUserMessage = { user: 'user', message };
    const responseMessage = await sendMessageToApi(message);

    const newInterviewerMessage = { user: 'interviewer', message: responseMessage };

    // Create an updated array of messages
    const updatedMessages = [...messages, newUserMessage, newInterviewerMessage];

    // Update the state with the updated array of messages
    setMessages(updatedMessages);

    // Speak the interviewer's response message
    speech.speak({
      text: responseMessage,
    });
};
  return (
    <div className="interview-page">
      <ChatSection messages={messages}/>
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
}

export default InterviewPage;
