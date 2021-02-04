import styles from '../styles/Header.module.css';
import landingStyles from '../styles/Landing.module.css';

const Header = (props) => {

  const tagline = (props.tagline ? <span id={landingStyles.tagline}>{props.tagline}</span> : "");

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{props.title}</h1>
      {tagline}
    </div>
  )
}

export default Header;