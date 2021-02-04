import styles from '../styles/SocialMedia.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';

const SocialMedia = () => {
  return (
    <div className="container">
      <h1 className="heading">Check Us Out on Social Media!</h1>
      <div id={styles.icons}>
        <FontAwesomeIcon className={styles.icon} icon={faFacebookSquare}></FontAwesomeIcon>
        <FontAwesomeIcon className={styles.icon} icon={faInstagramSquare}></FontAwesomeIcon>
      </div>
    </div>
  )
}

export default SocialMedia;