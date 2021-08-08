import React from "react";
import ChatBot from "react-simple-chatbot";
import Info from "../component/chat/Info";

const ChatBotMain = () => {
  return (
    <div>
      <ChatBot
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
            trigger: "info",
          },
          {
            id: "info",
            component: <Info />,
            asMessage: true,
            waitAction: true,
            trigger: "2",
          },
        ]}
      />
    </div>
  );
};

export default ChatBotMain;
