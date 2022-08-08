import "../styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import type { NextPage } from "next";
import { ReactElement, ReactNode, useMemo, useState, useEffect } from "react";
import React from "react";
import * as portals from "react-reverse-portal";
import modalContext from "../components/context/modalContext";
import Head from "next/head";

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const [shouldRenderModal, setShouldRenderModal] = useState(false);
  useEffect(() => {
    setShouldRenderModal(true);
  }, []);

  const portalNode = useMemo(() => {
    if (!shouldRenderModal) {
      return null;
    }

    return portals.createHtmlPortalNode({attributes:{id:'modal-root'}});
  }, [shouldRenderModal]);

  return (
    <>
      <modalContext.Provider value={{ shouldRenderModal, portalNode }}>
        {portalNode && <portals.OutPortal node={portalNode} />}
        {getLayout(
          <>
            <Script
              strategy="lazyOnload"
              type="text/javascript"
              src="/js/hs-ui.bundle.js"
            ></Script>
            <Head>
              <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                  <link
                      href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap"
                      rel="stylesheet"/>
            </Head>
            <Component {...pageProps} />
          </>
        )}
      </modalContext.Provider>
    </>
  );
}

export default MyApp;
