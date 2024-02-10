import { ReactNode, useEffect, useState } from "react";
import getResponse from "../../../../../services/gpt";

export interface Message {
  message: string
  content?: ReactNode
  sender: string;
  isUserMessage: boolean;
}

export function useChatContent() {
  const [messages, setMessageList] = useState<Message[]>([]);
  const [message, setMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const sendMessage = () => {
    if (message.trim() !== "" && !isLoading) {
      const newMessage: Message = {
        message: message,
        sender: "user",
        isUserMessage: true,
      };
      setMessageList([...messages, newMessage]);
      setMessage("");
      setIsLoading(true);
    }
  };

  useEffect(() => {
    const lastMessage = messages[messages.length - 1];
    if (lastMessage && lastMessage.isUserMessage) {
      const fetchResponse = async () => {
        try {
          const reply = await getResponse(lastMessage.message);
          const botMessage: Message = {
            message: reply,
            sender: "bot",
            isUserMessage: false,
          };
          setMessageList([...messages, botMessage]);
        } catch (error) {
          console.error("Error al obtener respuesta:", error);
        } finally {
          setIsLoading(false);
        }
      };
      fetchResponse();
    }
  }, [messages]);

  return { messages, setMessageList ,message, isLoading, setMessage, sendMessage };
}