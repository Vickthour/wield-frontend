import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NextSeo } from "next-seo";
import GuestLayout from "../components/layouts/GuestLayout";

function MyApp({ Component, pageProps }: AppProps) {
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
    </>
  );
}

export default MyApp;
