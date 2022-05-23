import Link from "next/link";


function Header() {
    return (
        <header>
            <div className="contenedor">
                <div>
                    <nav>
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