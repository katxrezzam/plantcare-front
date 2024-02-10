import styles from "./Chat.module.css";
import { ChatAvatar, ChatContent } from "./components";

export default function Chat() {
  return (
    <section className={styles.Chat}>
      <div className="width-wrapper">
        <div className={styles.ChatContainer}>
          <ChatAvatar />
          <ChatContent />
        </div>
      </div>
    </section>
  );
}
