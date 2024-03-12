'use client'
import { usePathname } from 'next/navigation'
import { headerData, topBarData } from '../../utils/utils'
import styles from './Header.module.scss'
import Link from 'next/link'
import { Menu } from '@mui/material'
function Header() {
  const path = usePathname()
  const currentPath = path.split('/')[1]
  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.topBar}>
          {topBarData.map((data, i) => (
            <a
              href={data.link}
              key={i}
              //   onClick={() => setOptionContent(false)}
            >
              <span key={i}>{data?.title}</span>
            </a>
          ))}
        </div>
        <div className={styles.header}>
          <div className={styles.logo}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRderwOER19WoERh-drCaBuX1lE4qxIVmBK4g&usqp=CAU"
              height="50"
              alt="logo"
            />
          </div>
          <div className={styles.linksWrapper}>
            {headerData.map((option, i) => {
              return (
                <Link
                  href={option.link}
                  key={i}
                  //   onClick={() => setOptionContent(false)}
                >
                  <span key={i}>{option?.title}</span>
                </Link>
              )
            })}
          </div>
        </div>
        <div className={styles.mobileHeader}>
          <div className={styles.logo}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRderwOER19WoERh-drCaBuX1lE4qxIVmBK4g&usqp=CAU"
              height="50"
              alt="logo"
            />
          </div>
          <Menu />
        </div>
      </div>
    </>
  )
}

export default Header
