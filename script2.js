document.getElementById("send-btn").addEventListener("click", function() {
    const userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") return;

    // Add user's message to the chat
    const chatBox = document.getElementById("chat-box");
    const userMessage = document.createElement("div");
    userMessage.className = "user-message";
    userMessage.textContent = userInput;
    chatBox.appendChild(userMessage);

    // Generate bot's reply
    const botReply = getBotReply(userInput);
    const botMessage = document.createElement("div");
    botMessage.className = "bot-message";
    botMessage.textContent = botReply;
    chatBox.appendChild(botMessage);

    // Scroll to the bottom of the chat
    chatBox.scrollTop = chatBox.scrollHeight;

    // Clear the input field
    document.getElementById("user-input").value = "";
});

// Function to generate bot replies
function getBotReply(message) {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes("return policy")) {
        return "We accept returns within 30 days of purchase. Make sure the product is unused!";
    } else if (lowerMessage.includes("shipping")) {
        return "We offer free shipping on orders above $50!";
    } else if (lowerMessage.includes("store hours")) {
        return "Our online store is open 24/7!";
    } else if (lowerMessage.includes("coupons")) {
        return "shop minimum $50 and get upto $10 cashback";
    } else {
        return "I’m sorry, I didn’t understand that. Could you please rephrase?";
    }
}

