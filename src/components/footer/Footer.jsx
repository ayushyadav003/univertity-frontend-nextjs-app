'use client'
import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  YouTube,
} from '@mui/icons-material'
import styles from './footer.module.scss'

export default function Footer() {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.footerLinks}>
        <div className={styles.inner1}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRderwOER19WoERh-drCaBuX1lE4qxIVmBK4g&usqp=CAU"
            alt="footerLogo"
          />
          <h3> Univertsity Head Quater</h3>
          <p>
            Address: 8th Floor, Tower B, Logix Cyber Park, Sector 62, Noida,
            Uttar Pradesh 201301
          </p>
        </div>
        <div className={styles.linkWrapper}>
          <h3>Colleges</h3>
          <a href="/contact-us#chandigarh">Chandigarh</a>
          <a href="/contact-us#chandigarh">Delhi</a>
          <a href="/contact-us#noida">Noida</a>
          <a href="/contact-us#lucknow">Lucknow</a>
          <a href="/contact-us#mumbai">Mumbai</a>
          <a href="/contact-us#cochin">Cochin</a>
          <a href="/contact-us#kerala">Kerala</a>
        </div>
        <div className={styles.linkWrapper}>
          <h3>Quick Links</h3>
          <a href="/about-us">About us</a>
          <a href="/contact-us">Contact Us</a>
          {/* <a href="/privacyPolicy">
            <p>Privacy Policy</p>
          </a> */}
        </div>
        <div className={styles.inner3}>
          <h3>Stay Connected</h3>
          <div>
            <a href="https://www.facebook.com/lrsservices" target="blank">
              <Facebook aria-label="Facebook Icon" />
            </a>
            {/* <Twitter/>*/}
            {/*<Instagram/>*/}
            <a
              href="https://www.linkedin.com/company/lrs-services-p-ltd"
              target="blank"
            >
              <LinkedIn aria-label="linkedIn Icon" />
            </a>
            {/*<YouTube/>*/}
          </div>
        </div>
      </div>

      <div className={styles.copyRightStrip}>
        <p>Copyright © 2023 | Software solution | All Right Reserved</p>
        {/* <p>
          <a href="/privacyPolicy">Privacy Policy</a> |{' '}
          <a href="/terms&condition">Terms & Conditions</a>
        </p> */}
      </div>
    </div>
  )
}
