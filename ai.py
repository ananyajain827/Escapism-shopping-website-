import nltk
from nltk.chat.util import Chat, reflections
import time

# Ensure necessary NLTK resources are downloaded
nltk.download('punkt')

# Define pairs of patterns and responses
patterns_and_responses = [
    (r"hi|hello|hey", ["Hello!", "Hi there!", "Hey! How can I help you?"]),
    (r"how are you?", ["I'm doing great, thank you!", "I'm good, how about you?"]),
    (r"what is your name?", ["I'm a chatbot. You can call me ChatBot!"]),
    (r"bye|goodbye", ["Goodbye!", "See you later!"]),
    (r"tell me a joke", ["Why don't scientists trust atoms? Because they make up everything!", 
                        "Why did the computer go to the doctor? It had a virus!"]),
    (r"help|assist", ["How can I assist you today?", "What do you need help with?"]),
    (r"(.*)", ["Sorry, I didn't quite understand that. Could you rephrase?"]),
    (r"what is the current time", [time.ctime()])  # Dynamically fetch current time
]

# Create a chatbot
chatbot = Chat(patterns_and_responses, reflections)

# Start the conversation
def chat():
    print("ChatBot: Hi! How can I help you today?")
    while True:
        user_input = input("You: ")
        if user_input.lower() in ["bye", "goodbye", "exit"]:
            print("ChatBot: Goodbye!")
            break
        response = chatbot.respond(user_input)
        print("ChatBot:", response)

# Run the chatbot
if __name__ == "__main__":
    chat()
