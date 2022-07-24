import { animate, AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { Button, Card } from "../../components/base";
import useMeasure from "react-use-measure";

const NewPost = () => {
  const [input, setInput] = useState("");
  const [focused, setFocused] = useState(false);
  const [ref, { height }] = useMeasure();
  console.log(height, "height");
  return (
    <Card>
      <label htmlFor="NewPost" className="text-lg font-semibold">
        New Post
      </label>
      <input
        id="NewPost"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type={"text"}
        placeholder="What are you posting today, James?"
        className="h-10 w-full rounded-full bg-gray-200   pl-4"
        onFocus={() => setFocused(true)}
        onBlur={() => input || setFocused(false)}
      />
      <AnimatePresence exitBeforeEnter>
        {focused && (
          <motion.div
            className="mt-2 flex justify-end"
            exit={{ height: 0,transition: { delay: 0.4,type: "spring",duration:0.2 } }}
            ref={ref}
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            transition={{ type: "spring",duration: 0.2 }}
          >
            <Button
              as={motion.button}
              size="md"
              shape="rounded"
              disabled={!input}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.2,
                type: "spring",duration: 0.2,
              }}
              exit={{ opacity: 0, transition: { type: "spring",duration: 0.2 } }}
            >
              Post
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
};

export default NewPost;
