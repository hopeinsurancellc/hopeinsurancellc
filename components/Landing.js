import styles from '../styles/Landing.module.css';

const Landing = () => {
  return (
    <div id={styles.landingDiv}>
      <div id={styles.innerContainer}>
        <h1 id={styles.header}>Get the right coverage for you</h1>
        <p id={styles.tagline}>From car to business insurance, we've got it all.<br/>Hope is dedicated to getting you the insurance you need.</p>
      </div>
    </div>
  );
}

export default Landing;