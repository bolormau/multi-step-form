'use client';

import { useReducer } from "react";
import { Header } from "./Header"; 
import { StepOne } from "./StepOne";
import { StepTwo } from "./StepTwo";
import { StepThree } from "./StepThree";
import * as Buttons from "./Buttons";

export const Container = () => {
  const initState = {step: 0, error: "", firstName: "", lastName: "", userName: "", email: "", phoneNumber: 0};
  const formReducer = (state, action) => {
    switch (action.type) {
      case "UPDATE_FIELD": 
        return {...state, [action.field]: action.value};
      case "NEXT_STEP":
        return {...state, step: (action.step + 1)};
      case "PREV_STEP": 
        return {...state, step: (action.step - 1)};
      case "ERROR": 
        return {...state, [action.error]: action.errorMsg};
      case "RESET":
        return initState;
      default: 
        return state;
    };
  };

  // action is in dispatch
  // state is in initState 

  const inputOnchangeHandler = (e, field) => {
    dispatch({
      type: "UPDATE_FIELD", 
      field: field, 
      value: e.target.value,
    })
  };

  const [state, dispatch] = useReducer(formReducer, initState);

  const CurrentStep = [StepOne, StepTwo, StepThree][state.step];
  
  return (
    <div className="w-120 h-[655px] flex flex-col bg-[#FFFFFF] rounded-[8px] p-8 gap-7">
      <Header/>
      <CurrentStep state={state} inputOnchangeHandler={inputOnchangeHandler}/>
      {/* Buttons */}
    </div>
  );





  // const [currentStepIndex, setCurrentStepIndex] = useState(0);
  // const steps = [StepOne, StepTwo, StepThree];
  // const CurrentStep = steps[currentStepIndex];

  // return (
  //   <div className="w-120 h-[655px] flex flex-col bg-[#FFFFFF] p-8">
  //     {
  //       currentStepIndex < steps.length ? 
  //       <div className="form-container h-full flex flex-col place-content-between items-center">
  //         <CurrentStep value={"jvug"}/>

  //         <div className="w-full flex place-content-center gap-2">
  //           {
  //             currentStepIndex > 0 && 
  //               <Buttons.BackButton backOnclickHandler={() => {setCurrentStepIndex(currentStepIndex - 1)}}/>
  //           }
  //           {
  //             currentStepIndex < steps.length ?
  //               <Buttons.ContinueButton 
  //                 type={ currentStepIndex === (steps.length - 1) ? "Submit" : "Continue" }
  //                 currentStep={currentStepIndex + 1}
  //                 allStep={steps.length}
  //                 continueOnclickHandler={() => setCurrentStepIndex(currentStepIndex + 1)}
  //               />
  //             :
  //             <p>submit succeed</p>
  //           }
  //         </div>
  //       </div>
  //     :
  //       <p>submit succeed</p>
  //     }
  //   </div>
  // );
}