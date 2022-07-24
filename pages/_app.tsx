import "../styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import type { NextPage } from "next";
import { ReactElement, ReactNode, useMemo, useState, useEffect } from "react";
import React from "react";
import * as portals from "react-reverse-portal";
import modalContext from "../components/context/modalContext";

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
            <Component {...pageProps} />
          </>
        )}
      </modalContext.Provider>
    </>
  );
}

export default MyApp;
