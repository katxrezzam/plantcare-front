import styles from './ChatAvatar.module.css'

export default function ChatAvatar() {
  return (
    <div className={styles.ChatAvatar}>
      <div className={styles.AvatarImageContainer}>
        <img className={styles.AvatarImage} src="https://i.etsystatic.com/25857281/r/il/ee4b0c/4756646574/il_fullxfull.4756646574_c2hu.jpg" alt="avatar-image" />
      </div>
      <div className={styles.AvatarName}>
        <h1>Tayta</h1>
      </div>
    </div>
  )
}
