import "../styles/globals.css";
import type {AppProps} from "next/app";
import {NextSeo} from "next-seo";
import GuestLayout from "../components/layouts/GuestLayout";
import Script from "next/script";

function MyApp({Component, pageProps}: AppProps) {

    return (
        <>
            <NextSeo
                title="Wield"
                titleTemplate="Wield"
                defaultTitle="Wield"
                description=""
            />
            <GuestLayout>
                <Component {...pageProps} />
            </GuestLayout>
            <Script src="preline/dist/hs-ui.bundle.js"></Script>
        </>
    );
}

export default MyApp;
