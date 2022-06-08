import { FC, ReactNode, useState, useEffect, SetStateAction, Dispatch } from "react";
import { Step1, Step2, Step3, Step4 } from "../carousel";
import Navbar from "../inc/Navbar";
interface AuthForm {
  children: ReactNode;
}

const AuthFormLayout: FC<AuthForm> = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const CarouselImages = [Step1, Step2, Step3, Step4];
  const CurrentImage: FC = CarouselImages[activeIndex];
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((index) => {
        if (index === 3) {
          return 0;
        }
        return index + 1;
      });
    }, 20000);
    return () => {
      clearInterval(interval);
    };
  }, [activeIndex]);
  return (
    <main className="bg-background overflow-hidden">
      <div className="container mx-auto px-4 min-h-screen flex flex-col">
        <Navbar/>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 w-full flex-1 items-center gap-x-10">
          <div className="xl:col-span-3 md:flex-col md:h-full order-2 md:order-1 hidden md:flex">
            <div className="md:flex-[4] md:items-end flex items-center justify-center">
                <CurrentImage />
            </div>
            <div className="md:flex-[2] ">
                <div className="flex  items-center w-full justify-center gap-4">
                  {CarouselImages.map((image, index) => (
                    <Dots active={activeIndex === index} setActive={setActiveIndex} index={index} key={index} />
                  ))}
                </div>
            </div>
          </div>
          <div className="xl:col-span-2 order-1 md:order-2 h-full">{children}</div>
        </div>
      </div>
    </main>
  );
};
interface DotsProps {
  active: boolean;
  index:number;
  setActive:Dispatch<SetStateAction<number>>;
}
const Dots: FC<DotsProps> = ({ active,setActive,index }) => {
  if (active) {
    return <div onClick={()=>{setActive(index)}} className="h-6 w-6 bg-white rounded-full"></div>;
  }
  return <div onClick={()=>{setActive(index)}} className="h-4 w-4 bg-gray-400 rounded-full"></div>;
};
export default AuthFormLayout;
