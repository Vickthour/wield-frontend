import React from "react";
import { Card, IconButton } from "../base";
import Avatar from "../base/Avatar";
import {
  Bookmark,
  Download,
  HeartFilled,
  Heart,
  Meatball,
  Share,
} from "../icons";
import Image from "next/image";
import Button from "../base/Button";
import { useMid } from "../utils/hooks/useMediaQuery";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";

const Post = () => {
  const [liked, setLiked] = React.useState(false);
  const [showMenu,setShowMenu] = React.useState(false);
  const mid=useMid()
  return (
    <div className="font-montserrat w-full rounded-lg bg-white">
      <header className="flex items-center gap-1.5 p-2 md:gap-4  md:px-4 md:py-3">
        <Avatar.Story
          src="/img/avatar.png"
          state="notviewed"
          size="sm"
          alt="avatar"
        />
        <div className="flex flex-1 flex-col">
          <h1 className="text-lg font-medium md:text-xl">Ella Ray</h1>
          <h3 className="text-xs text-gray-400 md:text-base">Lagos,Nigeria</h3>
          <p className="hidden text-gray-400 md:block md:text-xs">
            28 March, 2022.
          </p>
        </div>
        <div className="relative">
          <IconButton icon={<Meatball />} color="white" onClick={()=>setShowMenu(!showMenu)} />
          <AnimatePresence exitBeforeEnter>
            {
              showMenu && (
                <Menu/>
              )
            }
          </AnimatePresence>
        </div>
      </header>
      <main>
        <div className="relative aspect-video w-full">
          {/* <img src="/img/post.png" alt="hey" className='w-full'/>
           */}
          <Image
            src="/img/post.png"
            alt="a post"
            layout="fill"
            objectFit="cover"
            objectPosition={"center"}
          />
        </div>
        <div className="relative  z-10 flex bg-gray-300 px-2 py-1.5 md:px-4">
          <div className="flex-1">
            <h3 className="text-[8px] font-light mid:text-base uppercase">
              WWW.Nairaland.com
            </h3>
            <h1 className="flex-1 text-[10px] mid:text-base font-semibold">
              Best Way to Sell Your Product to Many Clients
            </h1>
          </div>
          <Button color="gray" size="xs" shape="rounded">
            Learn More
          </Button>
        </div>
        <footer className="p-2 md:p-4">
          <div className="flex">
            <div className="flex flex-1">
              <IconButton
                icon={liked ? <HeartFilled size={mid ? "lg" : "md"} /> : <Heart size={mid ? "lg" : "md"} />}
                onClick={() => setLiked(!liked)}
                color="white"
                size={mid ? "md" : "sm"}
                />
              <IconButton
                icon={<Download size={mid ? "lg" : "md"} />}
                color="white"
                size={mid ? "md" : "sm"}
                />
              <IconButton icon={<Share size={mid ? "md" : "sm"} />} 
                color="white"
                size={mid ? "md" : "sm"}
                
                />
            </div>
            <IconButton
                color="white"
              icon={<Bookmark size={"sm"} />}
              size={mid ? "md" : "sm"}
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <Avatar.Group
                images={[
                  { src: "/img/avatar.png", alt: "emmanuel-9040" },
                  { src: "/img/avatar.png", alt: "emmanuel-9040" },
                  { src: "/img/avatar.png", alt: "emmanuel-9040" },
                ]}
                size={mid ? "md" : "sm"}
                space={mid ? "lg" : "md"}
                border="white"
              />
              <p className="text-xs md:text-base">
                Liked by <span className="font-semibold">Kemi Smallz</span> and{" "}
                <span className="font-semibold">1,002 others</span>
              </p>
            </div>
            <div className="text-sm md:text-base">
              <span className="font-semibold">EllaRay</span> Those who will
              continue to make money are the ones that refused to consume all
              they earned but invested for their tomorrow.
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Post;

const Menu= ()=>{
  return (
    <motion.div
      className="absolute right-0 z-10 "
      initial={{ opacity: 0, y: "-20%" }}
      animate={{ opacity: 1, y: "0" }}
      exit={{ opacity: 0, y: "-20%" }}
    >
      <Card className="flex w-52 flex-col divide-y border shadow-lg  " px={'sm'}>
        <h3 className="rounded-md py-2 px-1 hover:bg-[#ff695b21] font-medium">Bookmark Post</h3>
        <h3 className="rounded-md py-2 px-1 hover:bg-[#ff695b21] font-medium">Hide Post</h3>
        <h3 className="rounded-md py-2 px-1 hover:bg-[#ff695b21] font-medium">Mute notification</h3>
        <h3 className="rounded-md py-2 px-1 hover:bg-[#ff695b21] font-medium">Report Post</h3>
      </Card>
    </motion.div>
  );
}