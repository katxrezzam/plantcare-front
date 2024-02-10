import { ChatInput, ChatList } from '../../../../features';
import  styles from './ChatContent.module.css'
import { useChatContent } from './hook/useChatContent';

export default function ChatContent() {

  const { messages,setMessageList, message, isLoading, setMessage, sendMessage } = useChatContent();

  return (
    <>
      <div className={styles.ChatContent}>
        <ChatList isLoading={isLoading} messageList={messages} />
      </div>
      <ChatInput
        message={message}
        setMessage={setMessage}
        sendMessage={sendMessage}
        messages={messages}
        setMessageList={setMessageList}
      />
    </>
  );
}