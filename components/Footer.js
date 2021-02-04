import styles from '../styles/Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer id={styles.footer}>
        <span id={styles.content}>&copy; 2021 Hope Insurance. Developed by <a href="https://jordanbaron.dev">Jordan Baron</a></span>
    </footer>
  );
}

export default Footer;