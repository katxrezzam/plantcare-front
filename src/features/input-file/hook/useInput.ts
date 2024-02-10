import { useState, ChangeEvent, useRef, RefObject } from "react"
import { v4 as uuidv4 } from "uuid"

interface InputFileHook {
  image: File | null
  label: string
  imageUrl: string
  newFileName: string
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
  resetImage: () => void
  inputRef: RefObject<HTMLInputElement>
}

const useInputFile = (): InputFileHook => {
  const [image, setImage] = useState<File | null>(null)
  const [label, setLabel] = useState<string>("")
  const [imageUrl, setImageUrl] = useState<string>("")
  const [newFileName, setNewFileName] = useState<string>("")
  const inputRef = useRef<HTMLInputElement>(null)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files?.[0]
    if (!uploadedFile) {
      setLabel("")
      setImageUrl("")
      return
    }
    setLabel(uploadedFile.name)
    setImageUrl(URL.createObjectURL(uploadedFile))
    setImage(uploadedFile)
    setNewFileName(newNameBuilder(uploadedFile.name))
  }

  const newNameBuilder = (fileName: string): string => {
    return `${uuidv4()}.${fileName.split(".").pop()}`
  }
  const resetImage = () => {
    setImage(null)
    if (inputRef.current) {
      inputRef.current.value = ""
    }
  }

  return {
    image,
    label,
    imageUrl,
    handleChange,
    newFileName,
    resetImage,
    inputRef,
  }
}

export default useInputFile
