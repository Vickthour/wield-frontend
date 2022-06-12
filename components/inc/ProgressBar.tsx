import React, { FC } from "react";
import { StepWizardChildProps } from "react-step-wizard";

export const ProgressBar: FC<Partial<StepWizardChildProps>> = ({
  totalSteps,
  currentStep,
  goToStep,
}) => {
  const bar = [];

  for (let i = 1; i <= 3; i++) {
    if (i === 3) {
      bar.push(
        <div
          onClick={() => ((currentStep || 1) >= i ? goToStep?.(i) : null)}
          key={i}
          className={`${
            i <= (currentStep || 1) ? "bg-primaryColor" : "bg-white"
          } h-4 w-4 rounded-full md:h-6 md:w-6`}
        ></div>
      );
    } else {
      bar.push(
        <React.Fragment key={i}>
          <div
            className={`${
              i <= (currentStep || 1) ? "bg-primaryColor" : "bg-white"
            } h-4 w-4 rounded-full md:h-6 md:w-6`}
            onClick={() => ((currentStep || 1) >= i ? goToStep?.(i) : null)}
          ></div>
          <div className="h-0.5 flex-1 bg-white">
            <div
              className={`${
                i < (currentStep || 1)
                  ? "w-full bg-primaryColor"
                  : "w-0 bg-white"
              } h-full transition-all`}
            ></div>
          </div>
        </React.Fragment>
      );
    }
  }

  return (
    <div className="mt-2 px-8">
      <div className="flex w-full items-center">{bar}</div>
      <div className="flex w-full justify-between text-xs md:text-base">
        <h1 className="max-w-[64px] translate-x-[-50%] text-center">
          Personal Details
        </h1>
        <h1>Account Details</h1>
        <h1 className="max-w-[64px] translate-x-[50%] text-center">
          Social Details
        </h1>
      </div>
    </div>
  );
};
