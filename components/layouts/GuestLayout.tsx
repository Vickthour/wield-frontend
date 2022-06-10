import { FC, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const GuestLayout: FC<LayoutProps> = ({ children }) => {
  return <>{children}</>;
};

export default GuestLayout;
