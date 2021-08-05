import React from 'react';
import ChatBot from 'react-simple-chatbot';
const ChatBotMain = () => {
    return (
        <div>
            <ChatBot
                headerTitle='Speech Recognition'
                recognitionEnable={true}
                steps={[
                    {
                        id: '1',
                        message: 'What is your name?',
                        trigger: '2',
                    },
                    {
                        id: '2',
                        user: true,
                        trigger: '3',
                    },
                    {
                        id: '3',
                        message: 'Hi {previousValue}, nice to meet you!',
                        trigger: '1',
                    },
                ]}
            />
        </div>
    );
};

export default ChatBotMain;
