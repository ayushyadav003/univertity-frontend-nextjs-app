import { useContext, useState } from 'react'
import { Drawer } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import EastIcon from '@mui/icons-material/East'
import { HeaderContext } from '../../../context/HeaderContext'
import styles from './sidebar.module.scss'
import { endOptions, initialOptions } from '../../../utils/headerData'
import Services from '../services/Services'
import Link from 'next/link'

export default function Sidebar({ open, setOpen, options }) {
  return (
    <Drawer anchor={'left'} open={open}>
      <div className={styles.sidebarContainer}>
        <div className={styles.actionWrapper}>
          <CloseIcon
            style={{ marginLeft: 'auto' }}
            onClick={() => handleSidebar({ label: 'header' })}
          />
        </div>
        <div className={styles.options}>
          {options.map((option, i) => (
            <Link key={i} href={option.link}>
              <span key={i}>
                {option?.label} <EastIcon style={{ color: '#023D74' }} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </Drawer>
  )
}
