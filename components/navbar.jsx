import Button from "./Button";
import styles from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (

    <div className={styles.container}>
            <div className={styles.navbar_toggle} id="mobile-menu">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
           
            <ul className={styles.navbar_menu}>
                <Link href="/" className={styles.navbar_links}>Home</Link>
                <Link href="/" className={styles.navbar_links}>About</Link>
                <Link href="/" className={styles.navbar_links}>Contact</Link>
                <Link href="/" className={styles.navbar_links}>Sign In</Link>
            </ul>
        </div>

        

  );
}
