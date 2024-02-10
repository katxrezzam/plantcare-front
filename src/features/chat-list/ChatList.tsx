import { useEffect, useRef } from "react"
import { ChatBubble } from ".."
import { Message } from "../../pages/chat/components/chat-content/hook/useChatContent"
import styles from "./ChatList.module.css"

interface Prop {
  messageList: Message[]
  isLoading: boolean
}

const placeHolder =
  "Hola, soy Tayta. Tu asistente virtual puedes preguntarme lo que necesites."
export default function ChatList({ messageList, isLoading }: Prop) {
  const endOfChatRef = useRef<HTMLLIElement>(null)
  useEffect(() => {
    if (endOfChatRef && endOfChatRef.current) {
      endOfChatRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messageList])
  return (
    <ul className={styles.ChatList}>
      <ChatBubble className="Bot">
        <p className="children">{placeHolder}</p>
      </ChatBubble>
      {messageList.map((message, index) => (
        <ChatBubble
          className={message.sender == "bot" ? "Bot" : "User"}
          key={index}
        >
          <p className="children">{message.content ?? message.message}</p>
        </ChatBubble>
      ))}
      {isLoading && (
        <ChatBubble className="Bot">
          <p className="children">Cargando...</p>
        </ChatBubble>
      )}
      <li ref={endOfChatRef}></li>
    </ul>
  )
}
