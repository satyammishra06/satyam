import openai

# Set your OpenAI API key
openai.api_key = 'your-api-key'

# Function to interact with the GPT-3.5 model
def chat_with_bot(prompt):
    response = openai.Completion.create(
        engine="text-davinci-003",  # Choose the GPT model
        prompt=prompt,
        temperature=0.7,
        max_tokens=150
    )
    return response.choices[0].text.strip()

# Main function to interact with the chatbot
def main():
    print("Welcome to the ChatBot!")
    while True:
        user_input = input("You: ")
        if user_input.lower() == 'exit':
            print("Goodbye!")
            break
        response = chat_with_bot(user_input)
        print("ChatBot:", response)

if __name__ == "__main__":
    main()
