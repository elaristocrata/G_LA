import Layout from "../components/Layout";
import Image from "next/image";

function AboutUs() {
    return (
        <Layout page='About Us'>
            <h1>About Us</h1>
            <Image width={400}  height={300} src="/img/nosotros.jpg"></Image>
        </Layout>

    );
}

export default AboutUs;