import type {NextPage} from 'next'
import Link from "next/link";

const Home: NextPage = () => {
    return (
        <>

            <main className="dark:bg-gray-800 bg-[url('/img/bg.png')]  relative overflow-hidden h-screen">
                <header className="h-24 sm:h-32 flex items-center z-30 w-full">
                    <div className="container mx-auto px-6 flex items-center justify-between">
                        <div className="uppercase text-gray-800 dark:text-white font-black text-3xl">
                            <img src='./img/logo-white.png'/>
                        </div>
                        {/*
                <div className="flex items-center">
                    <nav
                        className="font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden">
                        <a href="#" className="py-2 px-6 flex text-indigo-500 border-b-2 border-indigo-500">
                            Home
                        </a>
                        <a href="#" className="py-2 px-6 flex hover:text-indigo-500">
                            Watch
                        </a>
                        <a href="#" className="py-2 px-6 flex hover:text-indigo-500">
                            Product
                        </a>
                        <a href="#" className="py-2 px-6 flex hover:text-indigo-500">
                            Contact
                        </a>
                        <a href="#" className="py-2 px-6 flex hover:text-indigo-500">
                            Carrer
                        </a>
                    </nav>
                    <button className="lg:hidden flex flex-col ml-4">
                    <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                    </span>
                        <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                    </span>
                        <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                    </span>
                    </button>
                </div>
*/}

                        <Link href="/login" passHref>
                            <a href="#"
                               className="uppercase py-2 px-4 bg-transparent border-2 border-white text-white text-md mr-4 hover:bg-gray-900 rounded-2xl">
                                Get started
                            </a>
                        </Link>

                    </div>
                </header>
                <div className="dark:bg-gray-800 flex relative z-20 items-center">
                    <div className="container mx-auto px-6 flex flex-col justify-between items-center relative py-8">
                        <div className="flex flex-col">
                            <h1 className="font-mono w-full  text-center text-4xl sm:text-5xl text-white leading-[85.33px]">
                                Connecting People brand and influencing
                            </h1>
                            <h2 className="font-light max-w-2xl mx-auto w-full text-xl text-white text-center py-8">
                                Promote brand, share contents and earn money
                                Join thousands of people to decentralized social
                                media influencing.
                            </h2>
                            <div className="flex items-center justify-center mt-4">
                                <a href="#"
                                   className="uppercase py-2 px-4 bg-primaryColor border-2 border-transparent text-white text-md mr-4 hover:bg-gray-900 rounded-2xl">
                                    Get started
                                </a>
                            </div>
                        </div>
                        <div className="block w-full mx-auto mt-6 md:mt-0 relative">
                            <img src="./img/landing-page-img-one.png" className="max-w-xs md:max-w-2xl m-auto"/>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home
