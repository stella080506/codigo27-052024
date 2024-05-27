import React, { useState } from 'react';
import './chat.css';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [isUpperCase, setIsUpperCase] = useState(true);
  const [users] = useState(['User1', 'User2', 'User3']); // Example user list
  const [selectedUser, setSelectedUser] = useState('User1'); // Default selected user

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const toggledMessage = {
        original: newMessage,
        modified: isUpperCase ? newMessage.toUpperCase() : newMessage.toLowerCase()
      };
      setMessages([...messages, { user: selectedUser, text: toggledMessage.modified }]);
      setNewMessage('');
      setIsUpperCase(!isUpperCase);
    }
  };

  return (
    <div className="chat-app">
      <div className="sidebar">
        <div className="user-list">
          {users.map((user, index) => (
            <div
              key={index}
              className={`user ${user === selectedUser ? 'selected' : ''}`}
              onClick={() => setSelectedUser(user)}
            >
              {user}
            </div>
          ))}
        </div>
      </div>
      <div className="chat-container">
        <div className="messages">
          {messages
            .filter((msg) => msg.user === selectedUser)
            .map((msg, index) => (
              <div key={index} className="message">
                {msg.text}
              </div>
            ))}
        </div>
        <div className="input-container">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Digite sua mensagem..."
          />
          <button onClick={handleSendMessage}>Enviar</button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
