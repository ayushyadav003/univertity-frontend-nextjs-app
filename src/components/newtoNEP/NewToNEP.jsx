import { newToNEPData } from '../../utils/utils'
import styles from './newToNEP.module.scss'

export default function NewToNEP() {
  return (
    <div className={styles.newContainer}>
      <h2>Key Features of New to NEP</h2>
      <div className={styles.cardsWrapper}>
        {newToNEPData.map((data, i) => (
          <div key={i} className={styles.cards}>
            <img src={data.image} alt="NEP" />
            <div>
              <p>{data.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
