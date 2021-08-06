import React from "react";
import ChatBot from "react-simple-chatbot";
import Info from "../component/chat/Info";
const ChatBotMain = () => {
  return (
    <div>
      <ChatBot
        headerTitle="Rokit HealthCare chatBot"
        recognitionEnable={true}
        steps={[
          {
            id: "name",
            message: "What is your name?",
            trigger: "2",
          },
          {
            id: "2",
            user: true,
            trigger: "3",
          },
          {
            id: "3",
            message: "Hi {previousValue}, nice to meet you!",
            trigger: "4",
          },
          {
            id: "4",
            message: "please Select Gender",
            trigger: "gender",
          },
          {
            id: "gender",
            options: [
              { value: "male", label: "Male", trigger: "info" },
              { value: "female", label: "Female", trigger: "info" },
            ],
          },
          {
            id: "info",
            component: <Info />,
            asMessage: true,
            waitAction: true,
            trigger: "name",
          },
        ]}
      />
    </div>
  );
};

export default ChatBotMain;
