import Head from "next/head";

const Layout = ({children,page}) => {
    return (

        <div>
            <Head>
                <title>GuitarLA - {page}</title>
                <meta name="description" content="Web page for guitar sales"/>
            </Head>
            {children}
        </div>
    );
};

export default Layout;
