'use client'
import { useState } from 'react'
import { Button, InputAdornment, TextField } from '@mui/material'
import styles from './community.module.scss'
import IconButton from '@mui/material/IconButton'
import SendIcon from '@mui/icons-material/Send'

function Community() {
  const [replies, setReplies] = useState([])
  const [questions, setQuestion] = useState([
    { id: '01', desc: 'What is NEP?' },
    { id: '02', desc: "What's new in NEP 2020?" },
  ])

  return (
    <div className={styles.communityContainer}>
      <h1>Our Community</h1>
      <div className={styles.searchBar}>
        <TextField placeholder="Search..." fullWidth />
        <Button variant="contained">Add Question</Button>
      </div>
      <div className={styles.communityQuestionare}>
        {questions.length > 0 &&
          questions.map((item) => (
            <div key={item.id} className={styles.questionare}>
              <p>{item?.desc}</p>
              {/* {replies.map((reply, i) => {
                return <p key={i}></p>
              })} */}
              <div>
                <TextField placeholder="Search..." fullWidth />
                <Button variant="contained">Add Reply</Button>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Community
