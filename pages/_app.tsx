import "../styles/globals.css";
import type {AppProps} from "next/app";
import GuestLayout from "../components/layouts/GuestLayout";
import Script from "next/script";

function MyApp({Component, pageProps}: AppProps) {

    return (
        <>
            
            <Script strategy="lazyOnload"
                    type="text/javascript" src="/js/hs-ui.bundle.js"></Script>

            {/*<Head>
                <script type="text/javascript"
                        dangerouslySetInnerHTML={{
                            __html: ` alert("Hello! I am an alert box!!");
`
                        }}></script>
            </Head>*/}
            {/* <NextSeo
                title="Wield"
                titleTemplate="Wield"
                defaultTitle="Wield"
                description=""
            />*/}
            <GuestLayout>
                <Component {...pageProps} />
            </GuestLayout>

        </>
    );
}

export default MyApp;
