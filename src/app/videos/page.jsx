import styles from './videos.module.scss'

function Videos() {
  return (
    <div className={styles.videoContainer}>
      <h1>Understand New Education Policies through videos</h1>
      <div>
        {[...Array(8)].map((item, i) => (
          <iframe
            key={i}
            width="360"
            height="215"
            src="https://www.youtube.com/embed/8tiQuiCdbkM?si=D1VS1VH7omO6wtb5"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        ))}
      </div>
    </div>
  )
}

export default Videos
