import "../styles/globals.css";
import type { AppProps } from "next/app";
import GuestLayout from "../components/layouts/GuestLayout";
import Script from "next/script";
import type { NextPage } from "next";
import { ReactElement, ReactNode } from "react";

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(
    <>
      <Script
        strategy="lazyOnload"
        type="text/javascript"
        src="/js/hs-ui.bundle.js"
      ></Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
