import Image from 'next/image'
import styles from './contactus.module.scss'
import {
  Button,
  FormControl,
  InputLabel,
  Select,
  TextField,
} from '@mui/material'
import PlaceIcon from '@mui/icons-material/Place'

export default function ContactUs() {
  return (
    <div className={styles.contactusContainer}>
      <div className={styles.banner}></div>
      <div className={styles.contactUsForm}>
        <form>
          <div className={styles.formFieldWrapper}>
            <TextField type="text" label="First Name" fullWidth />
            <TextField type="text" label="Last Name" fullWidth />
          </div>
          <div className={styles.formFieldWrapper}>
            <TextField type="email" label="Email" fullWidth />
            <TextField type="text" label="Phone" fullWidth />
          </div>
          <TextField
            multiline
            placeholder="Type your message  in here...."
            maxRows={6}
            minRows={6}
            fullWidth
          />
          <Button type="submit" variant="contained">
            Send Message
          </Button>
        </form>
        <div className={styles.detailsWrapper}>
          <div>
            <h3>Company Email/Phone</h3>
            <p>info@NEP.in</p>
            <p>
              <a href="tel:1800-120-2454">1800-120-2555</a>
            </p>
          </div>
          <div>
            <h3>Company Address</h3>
            <p>
              2nd Floor, Tower B, Logix Cyber Park, Sector 67, Noida, Uttar
              Pradesh 201301
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
