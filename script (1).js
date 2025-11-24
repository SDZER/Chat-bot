document.addEventListener('DOMContentLoaded', () => {
    const openChatButton = document.getElementById('open-chat-button');
    const closeChatButton = document.getElementById('close-chat');
    const chatContainer = document.getElementById('chat-container');
    const sendButton = document.getElementById('send-btn');
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');

    // Toggle chat window
    openChatButton.addEventListener('click', () => {
        chatContainer.classList.add('open');
        openChatButton.classList.add('hidden');
    });

    closeChatButton.addEventListener('click', () => {
        chatContainer.classList.remove('open');
        openChatButton.classList.remove('hidden');
    });

    // Function to send a message
    const sendMessage = () => {
        const message = chatInput.value.trim();
        if (message === '') return;

        // Display user message
        appendMessage(message, 'user');
        chatInput.value = '';

        // Simulate bot response
        setTimeout(() => {
            const botResponse = generateBotResponse(message);
            appendMessage(botResponse, 'bot');
        }, 1000); // 1-second delay to simulate thinking
    };

    // Event listeners for sending messages
    sendButton.addEventListener('click', sendMessage);
    chatInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });

    // Function to append messages to the chat
    function appendMessage(message, sender) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', `\${sender}-message`);
        messageElement.textContent = message;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight; // Auto-scroll to the latest message
    }

    // Simple keyword-based bot logic
    function generateBotResponse(userMessage) {
        const lowerCaseMessage = userMessage.toLowerCase();

        if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) {
            return 'Hello! How can I assist you today?';
        } else if (lowerCaseMessage.includes('help')) {
            return 'Sure, I can help you. You can ask me about our services, hours, or contact info.';
        } else if (lowerCaseMessage.includes('service')) {
            return 'We offer 24/7 automated support and instant answers to FAQs.';
        } else if (lowerCaseMessage.includes('hours')) {
            return 'Our website is available 24/7. For human support, please contact us between 9 AM and 5 PM,