import styles from "./Step.module.css";

interface Props {
  text: string;
  label: string;
  description: string;
}

export default function Step({ text, label, description }: Props) {
  return (
    <div className={styles.Step}>
      <div className={styles.StepContainer}>{text}</div>
      <h3>{label}</h3>
      <p>{description}</p>
    </div>
  );
}
