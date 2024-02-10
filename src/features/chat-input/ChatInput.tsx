import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./ChatInput.module.css"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { Dispatch } from "react"
import { ImagePreview, InputFIle } from ".."
import useInputFile from "../input-file/hook/useInput"
import { Message } from "../../pages/chat/components/chat-content/hook/useChatContent"

interface Props {
  setMessage: Dispatch<string>
  message: string
  sendMessage: () => void
  setMessageList: Dispatch<(prevMessages: Message[]) => Message[]>
  messages: Message[]
}

export default function ChatInput({ setMessage, message, sendMessage, setMessageList, messages }: Props) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const { handleChange, image, imageUrl, resetImage, inputRef } = useInputFile()

  return (
    <div className={styles.ChatInput}>
      <InputFIle handleChange={handleChange} inputRef={inputRef} />
      <textarea
        className={styles.InputText}
        placeholder="Escriba un mensaje"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button className={styles.SendMessage} onClick={sendMessage}>
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
      {image && <ImagePreview setMessageList={setMessageList} messages={messages} imageUrl={imageUrl} image={image} onClose={resetImage} />}
    </div>
  )
}
