import { ReactNode } from "react"
import styles from "./ChatBubble.module.css"

interface Props {
  children: ReactNode
  className: string
}

export default function ChatBubble({ children, className }: Props) {
  return (
    <li className={`${className} ${styles.ChatBubble}`}>
      {children}
    </li>
  )
}
