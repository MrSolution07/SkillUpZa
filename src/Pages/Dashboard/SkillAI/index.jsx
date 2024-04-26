import React, { useState } from 'react';
import DashboardLayout from "../layout";
import { fetchData } from './script';  // Import the modified fetchData from another file

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
    setMessages(messages => [...messages, { sender, message }]);
  };

  return (
    <DashboardLayout>
      <div className="">
        <header className="">
          <div className="">Skill AI</div>
        </header>
        <div className="flex-1 overflow-auto p-4">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.sender === 'User' ? 'justify-end' : ''}`}>
              <div className={`max-w-[75%] rounded-lg p-3 ${msg.sender === 'User' ? 'bg-gray-400 text-white' : 'bg-gray-200 dark:bg-gray-800 dark:text-gray-200'}`}>
                <p>{msg.message}</p>
              </div>
            </div>
          ))}
          {isSending && <p>Sending...</p>}
        </div>
        <div className="flex h-14 shrink-0 items-center border-t border-[#1f2937] bg-[#1f2937] px-4 dark:border-[#f0f0f0] dark:bg-[#f0f0f0]">
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
            {/* well... this icon is not wor */}
            <SendIcon />
            <span className="">Send</span>
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default SkillAI;

function SendIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 2L11 13"></path>
      <path d="M22 2L15 22 11 13 2 9 22 2z"></path>
    </svg>
  );
}


