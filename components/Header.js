import Link from "next/link";
import styles from '../styles/Header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <div className="contenedor">
                <div>
                    <nav className={styles.nave}>
                        <Link href="/">Home</Link>
                        <Link href="/store">Store</Link>
                        <Link href="/blog">Blog</Link>
                        <Link href="/aboutus">About Us</Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;