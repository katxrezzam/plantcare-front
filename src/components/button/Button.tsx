import { ReactNode } from "react";
import styles from './Button.module.css'

interface Props {
  children: ReactNode;
  className?: string;
}

export default function Button({ children, className }: Props) {
  return <button className={`${className} ${styles.Button}`}>{children}</button>;
}
