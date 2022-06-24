import Head from 'next/head'
import React from 'react'
import AppBody from '../components/inc/AppBody'
import AppNav from '../components/inc/AppNav'
import ButtomNav from '../components/inc/ButtomNav'

const app = () => {
  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="/preline/dist/hs-ui.bundle.js"
          defer
        />
      </Head>
      <AppNav />
      <AppBody />
      <ButtomNav/>
    </>
  );
}

export default app