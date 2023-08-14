const handleSendMessage = async (message) => {
  const newUserMessage = { user: 'user', message };

  // Send the user's message to the API and receive a response
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
