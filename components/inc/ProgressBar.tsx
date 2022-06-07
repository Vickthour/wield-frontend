import { FC } from "react";
import { StepWizardChildProps } from "react-step-wizard";

export const ProgressBar: FC<Partial<StepWizardChildProps>> = ({
  totalSteps,
  currentStep,
  goToStep
}) => {
  const bar = [];

  for (let i = 1; i <= 3; i++) {
    if (i === 3) {
      bar.push(
        <div
        onClick ={() =>(currentStep||1)>=i? goToStep?.(i):null}

          className={`${
            i <= (currentStep || 1) ? "bg-primaryColor" : "bg-white"
          } h-4 w-4 md:h-6 md:w-6 rounded-full`}
        ></div>
      );
    } else {
      bar.push(
        <>
          <div
            className={`${
              i <= (currentStep || 1) ? "bg-primaryColor" : "bg-white"
            } h-4 w-4 md:h-6 md:w-6 rounded-full`}
            key={i}
            onClick ={() =>(currentStep||1)>=i? goToStep?.(i):null}
          ></div>
          <div className="flex-1 bg-white h-0.5">
            <div
              className={`${
                i < (currentStep || 1)
                  ? "bg-primaryColor w-full"
                  : "bg-white w-0"
              } h-full transition-all`}
            ></div>
          </div>
        </>
      );
    }
  }

  return (
    <div className="px-8 mt-2">
      <div className="flex w-full items-center">{bar}</div>
      <div className="flex w-full justify-between text-xs md:text-base">
        <h1 className="translate-x-[-50%] max-w-[90px] lg:max-w-none text-center">
          Personal Details
        </h1>
        <h1>Account Details</h1>
        <h1 className="translate-x-[50%] max-w-[90px] lg:max-w-none text-center">
          Social Details
        </h1>
      </div>
    </div>
  );
};
