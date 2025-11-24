document.addEventListener('DOMContentLoaded', () => {
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');
    const chatWindow = document.getElementById('chat-window');

    // --- Core Functionality ---

    const sendMessage = () => {
        const messageText = messageInput.value.trim();
        if (messageText === '') return;

        // Add user message to chat
        addMessageToChat(messageText, 'user');
        messageInput.value = '';
        messageInput.style.height = 'auto'; // Reset textarea height

        // Show typing indicator and get bot response
        showTypingIndicator();
        setTimeout(() => {
            getBotResponse(messageText);
        }, 1000); // Simulate network delay
    };

    const addMessageToChat = (text, sender) => {
        hideTypingIndicator();
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', `\${sender}-message`);

        const avatar = document.createElement('img');
        avatar.src = sender === 'bot' ? 'https://i.imgur.com/TlJn4C7.png' : 'https://i.imgur.com/3V1xP4A.png';
        avatar.alt = `\${sender.charAt(0).toUpperCase() + sender.slice(1)} Avatar`;

        const messageParagraph = document.createElement('p');
        messageParagraph.textContent = text;

        messageElement.appendChild(avatar);
        messageElement.appendChild(messageParagraph);
        chatWindow.appendChild(messageElement);

        chatWindow.scrollTop = chatWindow.scrollHeight; // Auto-scroll to bottom
    };

    // --- Bot Logic (The "Power") ---

    const getBotResponse = async (userMessage) => {
        // THIS IS THE KEY