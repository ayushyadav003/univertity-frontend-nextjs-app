import { newToNEPData } from '../../utils/utils'
import styles from './newToNEP.module.scss'
import { ArrowRight } from '@mui/icons-material/'

export default function NewToNEP() {
  return (
    <div className={styles.newContainer}>
      <h2>Key Features of New to NEP</h2>
      <div className={styles.cardsWrapper}>
        {newToNEPData.map((data, i) => (
          <div key={i} className={styles.card}>
            <img src={data.image} alt="NEP" />
            <h3>{data.title}</h3>
            {data?.desc.map((desc, j) => (
              <div key={j}>
                <span>
                  <ArrowRight fontSize="small" />
                </span>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
