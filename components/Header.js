import Link from "next/link";
import styles from '../styles/Header.module.css'
import Image from "next/image";

function Header() {
    return (
        <header className={styles.header}>
            <div className="contenedor">
<div className={styles.bar}>
    <div>
        <Link href="/">
            <Image width={400} height={100} src="/img/logo.svg" alt="Image Logo" />
        </Link>
    </div>
    <div>
        <nav className={styles.nav}>
            <Link href="/">Home</Link>
            <Link href="/store">Store</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/aboutus">About Us</Link>
        </nav>
    </div>
</div>
            </div>
        </header>
    );
}

export default Header;