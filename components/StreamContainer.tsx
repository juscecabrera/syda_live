import React from "react";

interface StreamWithChatProps {
  streamUrl: string;
  chatUrl: string;
}

const StreamWithChat: React.FC<StreamWithChatProps> = ({ streamUrl, chatUrl }) => {
  return (
    <div className="w-[80%] lg:w-full h-[45%] flex flex-row justify-center">
      <iframe 
        src={streamUrl} 
        allowFullScreen 
        className="w-[48%] h-full"
      ></iframe>
      <iframe 
        src={chatUrl} 
        allowFullScreen 
        className="w-1/4 h-full"
      ></iframe>
    </div>
  );
};

export default StreamWithChat;
