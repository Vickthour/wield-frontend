import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
const Home: NextPage = () => {
  return (
    <>
      {/* TODO: Added head and meta tags */}
      <Head>
        <title>Wield | connecting people brand and influencers</title>
        <meta
          name="description"
          content="Promote brand,  share contents and earn money
Join thousands of people to decentralized social
media influencing."
        ></meta>
        <meta name="theme-color" content="#0a0701" />
        <link rel="shortcut icon" href="./wield.svg" type="image/x-icon" />
        <meta property="og:url" content="https://wield-frontend.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Wield Landing page" />
        <meta property="og:image" content="./logo.png" />
        <meta property="og:image:alt" content="Wield banner image" />
        <meta
          property="og:description"
          content="Promote brand,  share contents and earn money
Join thousands of people to decentralized social
media influencing.e"
        />
        <meta property="og:site_name" content="Wield" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:author" content="" />
      </Head>
      <main className="font-montserrat relative flex  min-h-screen flex-col overflow-hidden bg-gray-900 bg-cover bg-no-repeat">
        <Image
          src="/../public/img/bg.png"
          alt="gradient background"
          layout="fill"
          quality={90}
          objectFit="cover"
          objectPosition={"center"}
          priority
        />
        <header className="z-30 flex h-24 w-full items-center sm:h-32">
          <div className="container mx-auto flex items-center justify-between px-6">
            <div className="text-3xl font-black uppercase text-gray-800 dark:text-white">
              <Image
                src="/../public/img/logo-white.png"
                alt="wield white Logo"
                width={152}
                height={57}
              />
            </div>
            <Link href="/login" passHref className="">
              <a
                href="#"
                className="hover:bg-primaryLighterColor mr-4 hidden origin-center rounded-full border-2 border-white bg-transparent py-1.5 px-2 text-sm uppercase text-white transition-all hover:bg-white hover:font-semibold hover:text-black active:scale-95 md:inline md:py-2 md:px-4 md:text-base"
              >
                Get started
              </a>
            </Link>
          </div>
        </header>
        <div className=" relative flex h-full flex-1 flex-col items-center justify-between px-6 pt-8">
          <div className="flex flex-col gap-4">
            <h1 className="w-full max-w-[830px] text-center  text-4xl font-semibold  text-white md:text-5xl xl:text-[70px] xl:leading-[85.33px]">
              Connecting People brand and influencing
            </h1>
            <p className="mx-auto w-full max-w-[490px] py-8 text-center text-xl font-light text-white">
              Promote brand, share contents and earn money Join thousands of
              people to decentralized social media influencing.
            </p>
            <div className="mb-8 flex items-center justify-center">
              <a
                href="#"
                className="text-md mr-4 origin-center rounded-full border-2 border-transparent bg-primaryColor py-2 px-4 uppercase text-white hover:bg-primaryLightColor  active:scale-95"
              >
                Get started
              </a>
            </div>
          </div>
          <div className="glow mt-6   flex w-[85vw] max-w-[1015px] items-end justify-center md:mt-0 xl:max-w-[1140px]">
            <div className="relative mid:hidden">
              <Image
                src="/img/product_preview(mobile).png"
                className="mx-auto w-[90vw] max-w-6xl "
                alt="product preview"
                height={2913}
                width={4096}
                quality={60}
              />
            </div>
            <div className="relative hidden mid:block">
              <Image
                src="/img/product_preview.png"
                className=" mx-auto "
                alt="product preview"
                height={2124}
                width={4556}
                quality={60}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;

//                            <img src="./img/product_preview(mobile).png" className=""/>
