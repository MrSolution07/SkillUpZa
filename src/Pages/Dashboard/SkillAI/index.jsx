import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { fetchData } from './script';
import Homeheader from "../../../Components/Social/Header";
import "../../../Components/NewStyle/style.css";
import { RiSendPlane2Line } from 'react-icons/ri';

function SkillAI() {
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [isSending, setIsSending] = useState(false);

  const handleSend = async () => {
    if (!userInput.trim()) return;
    appendMessage('User', userInput);
    setUserInput('');
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
      e.preventDefault();
      handleSend();
    }
  };

  const appendMessage = (sender, message) => {
    const messageLines = message.split('\\\\\\\\n');
    const newMessages = messageLines.map((line, index) => ({ sender, message: line }));
    setMessages(messages => [...messages, ...newMessages]);
  };

  return (
    <>
      <Homeheader />
      <div className="ai-body" style={{ backgroundColor: 'transparent', border: '0px solid', height: '80vh', overflow: 'visible', display: 'flex', flexDirection: 'column', marginBottom: "25px" }}>
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
              className="flex-1 rounded-md py-2 px-3 text-sm focus:outline-none dark:text-gray-900"
              placeholder="Type your message..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={handleKeyDown}
              sx={{
                marginRight: '10px',
                width: '100%',
                borderRadius: "6px",
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    border: 'none',
                  },
                  backgroundColor: 'white',
                  color: 'white',
                },
                '& .MuiInputBase-input': {
                  color: 'black', // 
                },
                '& .MuiOutlinedInput-input': {
                  padding: '10px 14px',
                },
              }}
              InputProps={{
                endAdornment: (
                  <Button onClick={handleSend} type="button" variant="contained" color="primary" disableElevation style={{ backgroundColor: 'transparent' }}>
                    <RiSendPlane2Line size={24} style={{ color: 'black' }} />
                  </Button>
                ),
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SkillAI;
