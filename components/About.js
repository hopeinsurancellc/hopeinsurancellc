import styles from '../styles/About.module.css'

const About = () => {
  return (
    <div className="container">
      <h1 className="heading">About</h1>
      <p className="desc">Starting in 2021, Hope Insurance is a Cameroon-based insurance company offering a multitude of insurance options. We currently offer car, health, life, liability, house, business, school, and personal property insurance.</p>
      <img id={styles.img} src="img/agency.jpg" alt="agency"/>
    </div>
  )
}

export default About;