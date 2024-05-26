import React, { useState } from 'react';
import { TextField, IconButton } from '@mui/material';
import { fetchData } from '../SkillAI/script'; // Import the modified fetchData from another file
import "../../../Components/NewStyle/style.css";
import DashboardLayout from "../layout";
import { RiSendPlane2Line } from 'react-icons/ri';

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

  const appendMessage = (sender, message) => {
    // Split message by line breaks and add each line as a separate message
    const messageLines = message.split('\n');
    const newMessages = messageLines.map((line, index) => ({ sender, message: line }));

    setMessages(messages => [...messages, ...newMessages]);
  };

  return (
    <DashboardLayout>
      <div className="ai-body" style={{ marginTop: "0px", backgroundColor: 'transparent', border: '0px solid', height: '75vh', overflow: 'visible', display: 'flex', flexDirection: 'column', marginBottom: "25px" }}>
        <header className="">
          <div className="title">Skill AI</div>
        </header>
        <div className="flex-1 overflow-auto p-4">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.sender === 'User' ? 'justify-end' : ''}`}>
              <div className={`max-w-[75%] rounded-lg p-3 ${msg.sender === 'User' ? 'bg-gray-400 text-white' : 'bg-gray-300 text-white dark:bg-gray-700 dark:text-gray-200'}`}>
                {msg.message}
              </div>
            </div>
          ))}
          {isSending && <p>Sending...</p>}
        </div>
        <div className="flex h-14 shrink-0 items-center border-t border-[#1f2937] bg-[#1f2937] px-4 dark:border-[#f0f0f0] dark:bg-[#f0f0f0]" id="prompt">
          <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
            <TextField
              className="flex-1 text-sm focus:outline-none dark:text-gray-900"
              placeholder="Type your message..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={handleKeyDown}
              sx={{
                marginRight: '10px',
                width: '100%',
                backgroundColor: 'white',
                borderRadius: '6px',
                '& .MuiOutlinedInput-root': {
                  padding: '6px 12px', // Adjust the padding to make the height shorter
                  '& fieldset': {
                    border: 'none',
                  },
                },
                '& .MuiInputBase-input': {
                  color: 'black',
                },
              }}
              InputProps={{
                endAdornment: (
                  <IconButton onClick={handleSend} type="button" style={{ backgroundColor: 'transparent', padding: 0 }}>
                    <RiSendPlane2Line size={24} style={{ color: 'black' }} />
                  </IconButton>
                ),
              }}
            />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default SkillAI;
