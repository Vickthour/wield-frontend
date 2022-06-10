import {
  FC,
  ReactNode,
  useState,
  useEffect,
  SetStateAction,
  Dispatch,
} from "react";
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
    <main className="overflow-hidden bg-background">
      <div className="container mx-auto flex min-h-screen flex-col px-4">
        <Navbar />
        <div className="grid w-full flex-1 grid-cols-1 items-center gap-x-10 md:grid-cols-2 xl:grid-cols-5">
          <div className="order-2 hidden md:order-1 md:flex md:h-full md:flex-col xl:col-span-3">
            <div className="flex items-center justify-center md:flex-[4] md:items-end">
              <CurrentImage />
            </div>
            <div className="md:flex-[2] ">
              <div className="flex  w-full items-center justify-center gap-4">
                {CarouselImages.map((image, index) => (
                  <Dots
                    active={activeIndex === index}
                    setActive={setActiveIndex}
                    index={index}
                    key={index}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="order-1 h-full md:order-2 xl:col-span-2">
            {children}
          </div>
        </div>
      </div>
    </main>
  );
};
interface DotsProps {
  active: boolean;
  index: number;
  setActive: Dispatch<SetStateAction<number>>;
}
const Dots: FC<DotsProps> = ({ active, setActive, index }) => {
  if (active) {
    return (
      <div
        onClick={() => {
          setActive(index);
        }}
        className="h-6 w-6 rounded-full bg-white"
      ></div>
    );
  }
  return (
    <div
      onClick={() => {
        setActive(index);
      }}
      className="h-4 w-4 rounded-full bg-gray-400"
    ></div>
  );
};
export default AuthFormLayout;
