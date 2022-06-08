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
      <main className="bg-gray-900 bg-no-repeat bg-cover  relative overflow-hidden min-h-screen font-montserrat flex flex-col">
        <Image
          src="/../public/img/bg.png"
          alt="gradient background"
          width={1080}
          height={900}
          layout="fill"
          quality={90}
          objectFit="cover"
          objectPosition={"center"}
          priority
        />
        <header className="h-24 sm:h-32 flex items-center z-30 w-full">
          <div className="container mx-auto px-6 flex items-center justify-between">
            <div className="uppercase text-gray-800 dark:text-white font-black text-3xl">
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
                className="hidden md:inline uppercase py-1.5 px-2 text-sm md:py-2 md:px-4 bg-transparent border-2 border-white text-white hover:text-black hover:font-semibold active:scale-95 origin-center hover:bg-white transition-all md:text-base mr-4 hover:bg-primaryLighterColor rounded-full"
              >
                Get started
              </a>
            </Link>
          </div>
        </header>
        <div className=" px-6 flex flex-col justify-between relative pt-8 h-full items-center flex-1">
          <div className="flex flex-col gap-4">
            <h1 className="font-semibold w-full text-4xl  text-center md:text-5xl  text-white xl:leading-[85.33px] xl:text-[70px] max-w-[830px]">
              Connecting People brand and influencing
            </h1>
            <p className="font-light max-w-[490px] mx-auto w-full text-xl text-white text-center py-8">
              Promote brand, share contents and earn money Join thousands of
              people to decentralized social media influencing.
            </p>
            <div className="flex items-center justify-center mb-8">
              <a
                href="#"
                className="uppercase py-2 px-4 bg-primaryColor hover:bg-primaryLightColor active:scale-95 origin-center border-2 border-transparent text-white text-md mr-4  rounded-full"
              >
                Get started
              </a>
            </div>
          </div>
          <div className="mt-6 md:mt-0   flex items-end justify-center w-[85vw] max-w-[1015px] xl:max-w-[1140px] glow">
            <div className="mid:hidden relative">
              <Image
                src="/img/product_preview(mobile).png"
                className="w-[90vw] max-w-6xl mx-auto "
                alt="product preview"
                height={2913}
                width={4096}
                quality={60}
                
              />
            </div>
            <div className="hidden mid:block relative">
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
