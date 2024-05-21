import React, { useState } from 'react';
import { fetchData } from './script'; // Import the modified fetchData from another file
import Homeheader from "../../../Components/Social/Header";
import "../../../Components/NewStyle/style.css";


function SkillAI() {
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [isSending, setIsSending] = useState(false);

  const handleSend = async () => {
    if (!userInput.trim()) return; // Prevent sending empty messages
    appendMessage('User', userInput); // Display user message immediately
    setUserInput(''); // Clear input field
    setIsSending(true);

    try {
      const botResponse = await fetchData(userInput);
      appendMessage('Bot', botResponse);
    } finally {
      setIsSending(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent the default form submission behavior
      handleSend();
    }
  };

  // Add the handleKeyDown event handler to the input element
  <input
    className="flex-1 rounded-md border border-[#1f2937] bg-transparent py-2 px-3 text-sm focus:border-gray-400 focus:outline-none dark:border-[#f0f0f0] dark:text-gray-900"
    placeholder="Type your message..."
    value={userInput}
    onChange={e => setUserInput(e.target.value)}
    onKeyDown={handleKeyDown} // Add the onKeyDown event handler
    type="text"
  />

  const appendMessage = (sender, message) => {
    // Split message by line breaks and add each line as a separate message
    const messageLines = message.split('\n');
    const newMessages = messageLines.map((line, index) => ({ sender, message: line }));

    setMessages(messages => [...messages, ...newMessages]);
  };

  return (
    <>
    <Homeheader />
      <div className="ai-body">
        <header className="">
          <div className="title">Skill AI</div>
        </header>
        <div className="flex-1 overflow-auto p-4">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.sender === 'User' ? 'justify-end' : ''}`}>
              <div className={`max-w-[75%] rounded-lg p-3 ${msg.sender === 'User' ? 'bg-gray-400 text-white' : 'bg-gray-200 dark:bg-gray-800 dark:text-gray-200'}`}>
                {/* Render each line of the message as a separate <div> */}
                {msg.message}
              </div>
            </div>
          ))}
          {isSending && <p>Sending...</p>}
        </div>
        <div className="flex h-14 shrink-0 items-center border-t border-[#1f2937] bg-[#1f2937] px-4 dark:border-[#f0f0f0] dark:bg-[#f0f0f0]" id="prompt">
          <input
            className="flex-1 rounded-md border border-[#1f2937] bg-transparent py-2 px-3 text-sm focus:border-gray-400 focus:outline-none dark:border-[#f0f0f0] dark:text-gray-900"
            placeholder="Type your message..."
            value={userInput}
            onChange={e => setUserInput(e.target.value)}
            onKeyDown={handleKeyDown} // Add the onKeyDown event handler
            type="text"
          />
          <button
            className=""
            onClick={handleSend}
            type="button"
          >
            <img src="public\assets\images\icons\send.svg" alt="sendicon" />
          </button>
        </div>
      </div>
      
    </>
      
  );
}

export default SkillAI;
