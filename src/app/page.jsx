'use client'
import Image from 'next/image'
import Carousel from 'react-multi-carousel'
import styles from './page.module.scss'
import { homeBanner, homeBannerResponsive } from '@/utils/utils'
import IntroSection from '../components/introSection/IntroSection'
import NewToNEP from '../components/newtoNEP/NewToNEP'

export default function Home() {
  return (
    <main>
      <div className={styles.homePageContainer}>
        <div className={styles.bannerWrapper}>
          <Carousel
            swipeable={false}
            draggable={false}
            // showDots={true}
            responsive={homeBannerResponsive}
            infinite
            autoPlay
            autoPlaySpeed={2000}
            removeArrowOnDeviceType={['tablet', 'mobile']}
          >
            {homeBanner.map((item, i) => (
              <div key={i} className={styles.banner}>
                <Image src={item.image} alt="banner" fill />
              </div>
            ))}
          </Carousel>
        </div>
        <IntroSection />
        <NewToNEP />
      </div>
    </main>
  )
}
