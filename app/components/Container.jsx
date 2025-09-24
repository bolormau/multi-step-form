'use client';

import { useReducer } from "react";
import { Header } from "./Header"; 
import { StepPage } from "./StepPage";
import { Button } from "./Button";

export const Container = () => {
  const fieldsCollection = [["firstName", "lastName", "userName"], [ "email", "phoneNumber", "password", "confirmPassword" ], [ "dateOfBirth", "profileImage" ]];
  const initStates = {step: 0, error: "", firstName: "", lastName: "", userName: "", email: "", phoneNumber: 0};
  const formReducer = (states, action) => {
    switch (action.type) {
      case "UPDATE_FIELD": 
        return {...states, [action.field]: action.value};
      case "NEXT_STEP":
          if(states.step < fieldsCollection.length - 1) return {...states, step: (states.step + 1)};
          return states;
      case "PREV_STEP": 
        if(states.step > 0) return {...states, step: (states.step - 1)};
          return states;
      case "ERROR": 
        return {...states, [action.error]: action.errorMsg};
      case "RESET":
        return initStates;
      default: 
        return states;
    };
  };

  // action is in dispatch
  // states is in initstates 

  const inputOnchangeHandler = (e, field) => {
    dispatch({
      type: "UPDATE_FIELD", 
      field: field, 
      value: e.target.value,
    })
  };

  const buttonOnclickHandler = (isContinue, ) => {
    if(isContinue) dispatch({type: "NEXT_STEP"});
    else dispatch({type: "PREV_STEP"});
  }

  const [states, dispatch] = useReducer(formReducer, initStates);
  
  // TESTING
  console.log("states: " + states);
  Object.keys(states).map(key => {
    console.log(key + ": " + states[key] + "\n");
  })

  
  return (
    <div className="w-120 h-[655px] flex flex-col place-content-between items-center bg-[#FFFFFF] rounded-[8px] p-8 gap-7">
      <div className="flex flex-col gap-7">
        <Header/>
        <StepPage fields={fieldsCollection[states.step]} states={states} inputOnchangeHandler={inputOnchangeHandler}/>
      </div>
      <div className="w-104 flex gap-2">
        {
          states.step > 0 && <Button isContinue={false} currentStep={states.step + 1} buttonOnclickHandler={() => buttonOnclickHandler(false)}/>
        }
        <Button isContinue={true} currentStep={states.step + 1} totalStep={fieldsCollection.length}  buttonOnclickHandler={() => buttonOnclickHandler(true)}/>
      </div>
    </div>
  );



































  // {/* <CurrentStep states={states} inputOnchangeHandler={inputOnchangeHandler}/> */}
  // const [currentStepIndex, setCurrentStepIndex] = usestates(0);
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