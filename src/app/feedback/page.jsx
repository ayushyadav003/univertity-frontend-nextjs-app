import Image from 'next/image'
import styles from './feedback.module.scss'
import {
  Button,
  FormControl,
  InputLabel,
  Select,
  TextField,
} from '@mui/material'

export default function Feeback() {
  return (
    <div className={styles.contactusContainer}>
      <div className={styles.banner}></div>
      <div className={styles.contactUsForm}>
        <h1>Feedback</h1>
        <form>
          <div className={styles.formFieldWrapper}>
            <TextField type="text" label="First Name" fullWidth />
            <TextField type="text" label="Last Name" fullWidth />
          </div>
          <div className={styles.formFieldWrapper}>
            <TextField type="text" label="Subject" fullWidth multiline />
            {/* <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                fullWidth
                id="demo-simple-select"
                // value={age}
                label="Category"
                // onChange={handleChange}
              ></Select>
            </FormControl> */}
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
      </div>
    </div>
  )
}
