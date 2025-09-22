'use client';

import { StepOne } from "./StepOne";
import { StepTwo } from "./StepTwo";
import { StepThree } from "./StepThree";
import * as Buttons from "./Buttons";

import { useState } from "react";

export const Container = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const steps = [StepOne, StepTwo, StepThree];
  const CurrentStep = steps[currentStepIndex];


  return (
    <div className="w-120 h-[655px] flex flex-col bg-[#FFFFFF] p-8">
      {
        currentStepIndex < steps.length ? 
        <div className="form-container h-full flex flex-col place-content-between items-center">
          <CurrentStep/>
          <div className="w-full flex place-content-center gap-2">
            {
              currentStepIndex > 0 && 
                <Buttons.BackButton backOnclickHandler={() => {setCurrentStepIndex(currentStepIndex - 1)}}/>
            }
            {
              currentStepIndex < steps.length ?
                <Buttons.ContinueButton 
                  type={ currentStepIndex === (steps.length - 1) ? "Submit" : "Continue" }
                  currentStep={currentStepIndex + 1}
                  allStep={steps.length}
                  continueOnclickHandler={() => setCurrentStepIndex(currentStepIndex + 1)}
                />
              :
              <p>submit succeed</p>
            }
          </div>
        </div>
      :
        <p>submit succeed</p>
      }
    </div>
  );
}

{/* <div>
  <label>first name</label>
  <input type="text" placeholder="jhg"/>
</div> */}