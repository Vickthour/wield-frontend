import React, { useState, useRef, useContext } from "react";
import { useMid } from "../utils/hooks/useMediaQuery";

import { Card, Avatar, Button, IconButton } from "../base";
import { Camera, Coin, Crown, Plus } from "../icons";
import Link from 'next/link'
import { motion } from "framer-motion";
import { TabContext } from "../layouts/AccountLayout";
import { useRouter } from "next/router";
const AccountHeader = () => {
  const isMid = useMid();
  return (
    <Card
      className=" col-span-1 pb-0 md:col-span-9 lg:col-span-12"
      px={isMid ? "lg" : "sm"}
      py={isMid ? "lg" : "sm"}
    >
      <header className="flex flex-col items-center gap-6 mid:flex-row">
        <div className="relative inline-flex">
          <Avatar.Story src="/img/avatar.png" size="xl" padding="md" />
          <IconButton
            icon={<Camera size="lg" />}
            color="primary"
            className=" absolute right-0 bottom-0"
          />
        </div>
        <div className="flex flex-1 flex-col mid:flex-row">
          <div className="flex flex-1 flex-col items-center mid:flex-row">
            <div className="flex flex-col ">
              <div className="flex items-center justify-between mid:justify-start">
                <h1 className="text-xl font-semibold">Ajayi Ayobami Joshua</h1>
                <Button icon={<Crown />} iconPosition="left" color="pink">
                  <span className="font-semibold text-primaryColor">Lv 1</span>
                </Button>
              </div>
              <h3 className="text-lg text-gray-500">@ayobami22</h3>
              <p>UI/UX Designer, UI Developer, full blooded Man Utd fan.</p>
            </div>
            <Button size="md" className="mb-4 mid:mb-0 ">
              EDIT PROFILE
            </Button>
          </div>
          <div className="flex flex-1 items-center justify-around   ">
            <Button
              color="pink"
              iconPosition="right"
              as="div"
              icon={
                <IconButton
                  size="xs"
                  icon={<Plus size="sm" />}
                  color="primary"
                />
              }
            >
              <span className="flex flex-col">
                <div className="text-sm text-gray-500">Wallet Balance</div>
                <div className="font-semibold ">N245,000.00</div>
              </span>
            </Button>
            <Button
              color="pink"
              iconPosition="right"
              as="div"
              icon={
                <IconButton
                  size="xs"
                  icon={<Plus size="sm" />}
                  color="primary"
                />
              }
            >
              <span className="flex flex-col">
                <div className="text-sm text-gray-500">Coin Balance</div>
                <div className="flex items-center gap-0.5 font-semibold">
                  <Coin size="sm" />
                  2000
                </div>
              </span>
            </Button>
          </div>
        </div>
      </header>
      <Tab></Tab>
    </Card>
  );
};

export default AccountHeader;

const TabItems = [
  {
    name: "Posts",
    link:"/app/account/"
  },
  {
    name: "Bookmarks",
    link:"/app/account/bookmarks"
  },
  {
    name: "Settings",
    link:"/app/account/settings"
  },
];

// const Tab = () => {
//   const [tabBoundingBox, setTabBoundingBox] = useState<any>(null);
//   const [wrapperBoundingBox, setWrapperBoundingBox] = useState<any>(null);
//   const [highlightedTab, setHighlightedTab] = useState<any>(null);
//   const [isHoveredFromNull, setIsHoveredFromNull] = useState(true);
//   const { active, setActive } = { ...useContext(TabContext) };

//   const highlightRef = React.useRef(null);
//   const wrapperRef = React.useRef<any>(null);

//   const repositionHighlight = (
//     e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
//     tab: any
//   ) => {
//     setTabBoundingBox(e.currentTarget.getBoundingClientRect());
//     setWrapperBoundingBox(wrapperRef.current.getBoundingClientRect());
//     setIsHoveredFromNull(!highlightedTab);
//     setHighlightedTab(tab);
//   };

//   const resetHighlight = () => setHighlightedTab(null);

//   const highlightStyles: React.CSSProperties = {};

//   if (tabBoundingBox && wrapperBoundingBox) {
//     highlightStyles.transitionDuration = isHoveredFromNull ? "0ms" : "150ms";
//     highlightStyles.opacity = highlightedTab ? 1 : 0;
//     highlightStyles.width = `${tabBoundingBox.width}px`;
//     highlightStyles.transform = `translate(${
//       tabBoundingBox.left - wrapperBoundingBox.left
//     }px)`;
//   }
//   return (
//     <footer className="py-1">
//       <div
//         className="relative mx-auto flex max-w-3xl"
//         ref={wrapperRef}
//         onMouseLeave={resetHighlight}
//       >
//         <div
//           className="absolute left-0 z-0 h-full rounded-lg bg-[#fb60524a]"
//           ref={highlightRef}
//           style={highlightStyles}
//         ></div>
//         {TabItems.map((item, index) => {
//           return (
//             <button
//               key={index}
//               className={` relative z-10 flex-1 border-b-2 py-3 text-xs font-medium transition-all duration-500 `}
//               onMouseOver={(ev) => repositionHighlight(ev, item)}
//               onClick={() => setActive?.(item.name)}
//             >
//               {item.name}
//               {active === item.name ? (
//                 <motion.div
//                   className=" absolute -bottom-1 left-0 right-0
//                    h-1 bg-primaryColor z-10"
//                   layoutId="underline"
//                 ></motion.div>
//               ) : null}
//             </button>
//           );
//         })}
//       </div>
//     </footer>
//   );
// };
const Tab = () => {
  const router=useRouter()
  const {pathname}=router
  const processRoutes=(routes:string)=>{
    const splittedRoutes=routes.split('/')
    const route=splittedRoutes[splittedRoutes.length-1]
  return  route==='account'?'Posts':route.charAt(0).toUpperCase()+route.slice(1)
  }
  const [hoveredTab,setHoveredTab] = useState<string|null>(null);
  const resetHover=()=>setHoveredTab(null);
  const hoverItem=(name:string)=>setHoveredTab(name);
  return (
    <footer className="py-1">
      <div
        className="relative mx-auto flex max-w-3xl"
    
      >
        {TabItems.map((item, index) => {
          return (
            <Link href={item.link} key={index}>
              <button
                className={`relative z-10 flex-1 border-b-2 py-3 text-xs font-medium transition-all duration-500 `}
                // onClick={() => setActive?.(item.name)}
                onMouseOver={() => hoverItem(item.name)}
                onMouseLeave={resetHover}
              >
                {item.name}
                {hoveredTab === item.name ? (
                  <motion.div
                    className=" absolute inset-0 -z-10 rounded-lg bg-[#fb60524a]"
                    layoutId="bg"
                  ></motion.div>
                ) : null}
                {processRoutes(pathname) === item.name ? (
                  <motion.div
                    className=" absolute -bottom-0.5 left-0 right-0
                     z-10 h-0.5 bg-primaryColor"
                    layoutId="underline"
                  ></motion.div>
                ) : null}
              </button>
            </Link>
          );
        })}
      </div>
    </footer>
  );
};
