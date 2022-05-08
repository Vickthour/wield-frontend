import { FC } from "react";
import { RegisterComponent } from "../components/RegisterComponent";

const ForgotPassword: FC = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-0">
      <div className="col-span-2 md:h-screen"></div>
      <RegisterComponent
        HeadText="New Here?"
        PText="Sign up and discover a great amount of new opportunities"
        CTAText="Sign up"
        link="/register"
      />
    </div>
  );
};
export default ForgotPassword;
