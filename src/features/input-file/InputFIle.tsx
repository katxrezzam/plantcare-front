import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./InputFile.module.css"
import { faPaperclip } from "@fortawesome/free-solid-svg-icons"
import { ChangeEvent, RefObject } from "react"

interface Props {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
  inputRef: RefObject<HTMLInputElement>
}

export default function InputFIle({ handleChange, inputRef }: Props) {
  return (
    <div className={styles.InputFile}>
      <input type="file" id="fileInput" style={{ display: "none" }} onChange={handleChange} ref={inputRef}/>
      <label htmlFor="fileInput">
        <FontAwesomeIcon icon={faPaperclip} />
      </label>
    </div>
  )
}
