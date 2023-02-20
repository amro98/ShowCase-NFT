import React from 'react'
import styles from '../styles/Global';

const Button = ({assetUrl,link}) => {
  return (
    <div className={styles.btnBlack} onClick={() => window.open(link,"_blank")} >
      <img src={assetUrl} alt="expo_icon" className={styles.btnIcon} />
      <div className="ms-3">
        <p className={`${styles.btnText} fs-6 mb-0`}>View it on</p>
        <p className={`${styles.btnText} fw-bold text-sm-start mb-1`}>Expo Store</p>
      </div>
    </div>
  )
}

export default Button