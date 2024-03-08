import styles from './introSection.module.scss'
export default function IntroSection() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.inner}>
          <h2>National Education Policy</h2>
          <p>
            Education is fundamental for achieving full human potential,
            developing an equitable and justsociety, and promoting national
            development. Providing universal access to quality education is
            thekey to India’s continued ascent, and leadership on the global
            stage in terms of economic growth,social justice and equality,
            scientific advancement, national integration, and cultural
            preservation.Universal high-quality education is the best way
            forward for developing and maximizing ourcountry &apos s rich
            talents and resources for the good of the individual, the society,
            the country, and theworld. India will have the highest population of
            young people in the world over the next decade, andour ability to
            provide high-quality educational opportunities to them will
            determine the future of ourcountry.
            <br />
            <br />
            The world is undergoing rapid changes in the knowledge landscape.
            With various dramatic scientificand technological advances, such as
            the rise of big data, machine learning, and artificial
            intelligence,many unskilled jobs worldwide may be taken over by
            machines, while the need for a skilledworkforce, particularly
            involving mathematics, computer science, and data science, in
            conjunctionwith multidisciplinary abilities across the sciences,
            social sciences, and humanities, will beincreasingly in greater
            demand. With climate change, increasing pollution, and depleting
            naturalresources, there will be a sizeable shift in how we meet the
            world’s energy, water, food, andsanitation needs, again resulting in
            the need for new skilled labour, particularly in biology,
            chemistry,physics, agriculture, climate science, and social science.
            The growing emergence of epidemics andpandemics will also call for
            collaborative research in infectious disease management
            anddevelopment of vaccines and the resultant social issues heightens
            the need for multidisciplinarylearning. There will be a growing
            demand for humanities and art, as India moves towards becoming
            adeveloped country as well as among the three largest economies in
            the world.
          </p>
        </div>
        <div className={styles.inner2}></div>
      </div>
      <div className={styles.mobileCotainer}>
        <h2>National Education Policy</h2>

        <p>
          Education is fundamental for achieving full human potential,
          developing an equitable and justsociety, and promoting national
          development. Providing universal access to quality education is thekey
          to India’s continued ascent, and leadership on the global stage in
          terms of economic growth,social justice and equality, scientific
          advancement, national integration, and cultural preservation.Universal
          high-quality education is the best way forward for developing and
          maximizing ourcountry &apos s rich talents and resources for the good
          of the individual, the society, the country, and theworld. India will
          have the highest population of young people in the world over the next
          decade, andour ability to provide high-quality educational
          opportunities to them will determine the future of ourcountry.
        </p>
        <div
          className={styles.image}
          style={{
            backgroundImage: "url('images/intro1.jpg')",
          }}
        ></div>
        <p>
          {' '}
          The world is undergoing rapid changes in the knowledge landscape. With
          various dramatic scientificand technological advances, such as the
          rise of big data, machine learning, and artificial intelligence,many
          unskilled jobs worldwide may be taken over by machines, while the need
          for a skilledworkforce, particularly involving mathematics, computer
          science, and data science, in conjunctionwith multidisciplinary
          abilities across the sciences, social sciences, and humanities, will
          beincreasingly in greater demand. With climate change, increasing
          pollution, and depleting naturalresources, there will be a sizeable
          shift in how we meet the world’s energy, water, food, andsanitation
          needs, again resulting in the need for new skilled labour,
          particularly in biology, chemistry,physics, agriculture, climate
          science, and social science. The growing emergence of epidemics
          andpandemics will also call for collaborative research in infectious
          disease management anddevelopment of vaccines and the resultant social
          issues heightens the need for multidisciplinarylearning. There will be
          a growing demand for humanities and art, as India moves towards
          becoming adeveloped country as well as among the three largest
          economies in the world.
        </p>
      </div>
    </>
  )
}
