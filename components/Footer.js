import Link from "next/link";
import styles from '../styles/Footer.module.css'
function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`contenedor ${styles.content}`}>
                <nav className={styles.nav}>
                    <Link href="/">Home</Link>
                    <Link href="/store">Store</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/aboutus">About Us</Link>
                </nav>
                <p className={styles.copyright}>All Rights Reserved</p>
            </div>
        </footer>
    );
}

export default Footer;