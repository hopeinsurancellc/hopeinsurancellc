import Link from 'next/link';
import styles from '../styles/Nav.module.css';

const Nav = () => {
  return (
    <nav id={styles.nav}>
      <h1 id={styles.brand}>HOPE INSURANCE</h1>
      <ul id={styles.navItems}>
        <li className={styles.navItem}><Link href="/">Home</Link></li>
        <li className={styles.navItem}><Link href="/about">About</Link></li>
        <li className={styles.navItem}><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;