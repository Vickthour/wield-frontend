import React from "react";
import { IconButton } from "../base";
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

const Post = () => {
  const [liked, setLiked] = React.useState(false);
  return (
    <div className="font-montserrat w-full rounded-lg bg-white">
      <header className="flex items-center gap-4 px-4 py-3">
        <Avatar.Story
          src="/img/avatar.png"
          state="notviewed"
          size="md"
          alt="avatar"
        />
        <div className="flex flex-1 flex-col">
          <h1 className="text-2xl font-medium">Ella Ray</h1>
          <h3 className="text-gray-400">Lagos,Nigeria</h3>
          <p className="text-xs text-gray-400">28 March, 2022.</p>
        </div>
        <IconButton icon={<Meatball />} />
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
        <div className="relative z-10 flex bg-gray-300 px-4 py-2.5">
          <div className="flex-1">
            <h3 className="font-light">WWW.Nairaland.com</h3>
            <h1 className="flex-1 font-semibold">
              Best Way to Sell Your Product to Many Clients
            </h1>
          </div>
          <Button color="gray" size="md" shape="rounded">
            Learn More
          </Button>
        </div>
        <footer className="p-4">
          <div className="flex">
            <div className="flex flex-1">
              <IconButton
                icon={liked ? <HeartFilled size="lg" /> : <Heart size="lg" />}
                onClick={() => setLiked(!liked)}
              />
              <IconButton icon={<Download size="lg" />} />
              <IconButton icon={<Share size="md" />} />
            </div>
            <IconButton icon={<Bookmark size="md" />} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <Avatar.Group
                images={[
                  { src: "/img/avatar.png", alt: "emmanuel-9040" },
                  { src: "/img/avatar.png", alt: "emmanuel-9040" },
                  { src: "/img/avatar.png", alt: "emmanuel-9040" },
                ]}
                size="md"
                space="lg"
                border="white"
                
              />
              <p>
                Liked by <span className="font-semibold">Kemi Smallz</span> and{" "}
                <span className="font-semibold">1,002 others</span>
              </p>
            </div>
            <div>
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
