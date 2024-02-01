import styles from './HowItWorks.module.css'
import { Step } from './components'

export default function HowItWorks() {
  return (
    <section className={styles.HowItWorks}>
      <div className={styles.HowItWorksContainer}>
        <div className={styles.HowItWorksTitle}>
          <h1 className={styles.Title}>¿Cómo funciona?</h1>
          <div className={styles.HowItWorksDescription}>
            <p className={styles.Paragraph}>
              Carga una foto donde se aprecie claramente el estado de la hoja y el algoritmo realizará la predicción y te dirá si esta padece de alguna enfermedad.
            </p>
          </div>
          <div className={styles.HowItWorksSteps}>
            <Step text='1' label='Elige' description='Sube la imagen de la hoja'/>
            <Step text='2' label='Chatea' description='Pregunta lo que quieras a nuestro amigo Tayta'/>
            <Step text='3' label='Procesa' description='Analiza la salud de planta'/>
          </div>
        </div>
      </div>
    </section>
  )
}
