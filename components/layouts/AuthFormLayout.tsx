import { FC, ReactNode, useState, useEffect } from "react";
import Image from "next/image";
import { Step1, Step2, Step3, Step4 } from "../carousel";
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
    <main className="container mx-auto px-4 min-h-screen flex flex-col">
      <div className="flex justify-center pt-12 md:justify-start  ">
        <div className="relative ">
          <Image src="/../public/img/logo.png" width={152} height={57} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:md:grid-cols-5 w-full flex-1 items-center">
        <div className="lg:col-span-3 flex flex-col md:h-full order-2 md:order-1">
          <div className="md:flex-[4] md:items-end flex items-center">
              <CurrentImage />
          </div>
          <div className="md:flex-[2]">
              <div className="flex  items-center w-full justify-center gap-4">
                {CarouselImages.map((image, index) => (
                  <Dots active={activeIndex === index} key={index} />
                ))}
              </div>
          </div>
        </div>
        <div className="lg:col-span-2 order-1 md:order-2">{children}</div>
      </div>
    </main>
  );
};
interface DotsProps {
  active: boolean;
}
const Dots: FC<DotsProps> = ({ active }) => {
  if (active) {
    return <div className="h-6 w-6 bg-gray-200 rounded-full"></div>;
  }
  return <div className="h-4 w-4 bg-gray-400 rounded-full"></div>;
};
export default AuthFormLayout;
