import React, { useState } from 'react';
import DashboardLayout from '../layout';
import { fetchData } from './script'; // Import the modified fetchData from another file

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

  const appendMessage = (sender, message) => {
    // Split message by line breaks and add each line as a separate message
    const messageLines = message.split('\n');
    const newMessages = messageLines.map((line, index) => ({ sender, message: line }));

    setMessages(messages => [...messages, ...newMessages]);
  };

  return (
    <DashboardLayout>
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
    </DashboardLayout>
  );
}

export default SkillAI;

//Messages are now split by lines and not displayed as a single paragraph
//Styling is also improved but can be further improved


