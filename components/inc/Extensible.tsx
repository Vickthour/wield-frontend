import React, { createRef, FC, ReactNode, useEffect } from "react";
import { IconButton } from "../base";
import { ChevronLeft } from "../icons";

type ExtensibleProps = JSX.IntrinsicElements["div"] & {
  children?: React.ReactNode;
  Fragment?: boolean;
};
const Extensible: FC<ExtensibleProps> = ({
  children,
  Fragment,
  ...otherProps
}) => {
  const itemRef = createRef<HTMLDivElement>();
  const [isOverflowing, setIsOverflowing] = React.useState(false);
  useEffect(() => {
    setIsOverflowing(
      (itemRef.current?.scrollWidth || false) >
        (itemRef.current?.clientWidth || false)
    );
  }, [setIsOverflowing, itemRef]);
  if (Fragment) {
    return (
      <>
        <IconButton
          icon={<ChevronLeft size={"xs"} />}
          shadow
          color="white"
          size={"sm"}
          className={`${
            isOverflowing ? "absolute" : "hidden"
          } right-0 top-[50%] z-10 translate-y-[-50%] translate-x-[25%]`}
        />
        {React.Children.map<ReactNode, ReactNode>(children, (child, i) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              ...child?.props,
              ref: itemRef,
            });
          }
        })}
      </>
    );
  }
  return (
    <div {...otherProps} ref={itemRef}>
      <IconButton
        icon={<ChevronLeft size="xs" />}
        shadow
        color="white"
        size="sm"
        className={`${
          isOverflowing ? "absolute" : "hidden"
        } right-0 top-[50%] translate-y-[-50%] translate-x-[25%] z-20`}
      />
      {children}
    </div>
  );
};

export default Extensible;
