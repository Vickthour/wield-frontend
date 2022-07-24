import { motion } from "framer-motion";
import { ArrowLeft } from "../icons";

type sub =
  | {
      sub?: false;
      onSubClick?: never;
    }
  | {
      sub: true;
      onSubClick: () => void;
    };
const SettingHeader = ({
  title,
  p,
  onSubClick,
  sub,
  children,
}: {
  title: string;
  p?: string;
  children: React.ReactNode;
} & sub) => {
  if (sub) {
    return (
      <motion.div
        // initial={{ x: "15%", opacity: 0 }}
        // animate={{ x: 0, opacity: 1 }}
        exit={{ x: "15%", opacity: 0 ,}}
        
        className=""
      >
        <div
          className="mt-5 flex cursor-pointer items-center gap-8 py-2"
          onClick={onSubClick}
        >
          <ArrowLeft size="sm" />
          <h1 className="font-montserrat   text-xl font-semibold">{title}</h1>
        </div>
        <p>{p}</p>
        <div className="max-w-3xl   mr-auto">{children}</div>
      </motion.div>
    );
  }
  return (
    <motion.div
      initial={{ x: "15%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "15%", opacity: 0 }}
      className=""
    >
      <h1 className="font-montserrat mt-5 py-2  text-xl font-semibold">
        {title}
      </h1>
      <p>{p}</p>
      <div className="mr-auto   max-w-3xl">{children}</div>
    </motion.div>
  );
};

export default SettingHeader;
