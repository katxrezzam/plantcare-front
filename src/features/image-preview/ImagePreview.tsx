import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./ImagePreview.module.css"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { Dispatch, FormEvent, useState } from "react"
import { predicImage } from "../../services/predictImage"
import getDiagnostic from "../../services/generateDiagnostic"
import { Message } from "../../pages/chat/components/chat-content/hook/useChatContent"


interface Props {
  onClose: () => void
  imageUrl: string
  image: File | null
  setMessageList: Dispatch<(prevMessages: Message[]) => Message[]>
  messages: Message[]
}

export default function ImagePreview({ onClose, imageUrl, image, setMessageList}: Props) {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!image) return
    setIsLoading(true)
    try {
      const p = await predicImage(image)
      const diagnostic = await getDiagnostic(p.disease) as string
      console.log(diagnostic)
      setMessageList((prevMessages: Message[]) => {
        return [
          ...prevMessages,
          {
            content: <img src={imageUrl} alt={"image-preview"} />,
            message:'',
            sender: 'user',
            isUserMessage: false
          },
          {
            message: `Su planta fue diagnosticada con  ${p.disease}`,
            sender: 'bot',
            isUserMessage: false
          },
          {
            message: diagnostic,
            sender: 'bot',
            isUserMessage: false
          }
        ];
      });

      onClose()
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={styles.ImagePreview}>
      <form onSubmit={handleSubmit} className={styles.FormContainer}>
        <div className={styles.ImageContainer}>
          {imageUrl && (
            <div className={styles.imageLoadedContainer}>
              <img src={imageUrl} alt={"image-preview"} />
            </div>
          )}
          <button className={styles.ButtonClose} onClick={onClose}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        {isLoading ? (
          <p>Cargando...</p>
        ) : (
          <button className={styles.Predict}>Predict</button>
        )}
      </form>
    </div>
  )
}
