'use client';

import { useReducer, useState } from "react";
import { Header } from "./Header"; 
import { StepPage } from "./StepPage";
import { Button } from "./Button";

export const Container = () => {
  const initDatas = [
    { firstName: "", lastName: "", userName: "", },
    { email: "", phoneNumber: "", password: "",  confirmPassword: "", },
    { dateOfBirth: "", profileImage: "", },
  ];

  const initErrors = [
    {firstName: "", lastName: "", userName: "", },
    { email: "", phoneNumber: "", password: "",  confirmPassword: "", },
    { dateOfBirth: "", profileImage: "", },
  ];

  const initStates = { currStep: 0, datas: initDatas, errors: initErrors };

  const [step, setStep] = useState(initStates); 

  const totalStep = Object.keys(initDatas).length;
  console.log("total step: " + totalStep);

  const currStepDatas = step.datas[step.currStep];
  console.log("current page fields: ");
  console.log(currStepDatas);

  const currStepDataFields = Object.keys(currentStepDatas).map(field => field);

  const validateData = (datas) => {
    if(!datas.firstName) errors[0].firstName = "First name is required"; 
    else errors[0].firstName = "";

    if(!datas.email) errors[1].email = "Email is required"; 
    else errors[1].email = "";

    // if(!datas.dateOfBirth) errors.stepThree.dateOfBirth = "Date of birth is required"; 
    // else errors.stepThree.dateOfBirth = "";

    if(errors === initErrors) return true;
    console.log("Errors: ");
    console.log(errors);
  }

  const formOnSubmitHandler = (e) => {
    e.preventDefault();
    console.log("working");

    const formDatas = new FormData(e.target);
    console.log("Testing: ");

    const currStepUpdatedDataValues = currStepDataFields.map(currStepDataField => formDatas.get(currStepDataField));
    console.log(currStepUpdatedDataValues);

    // const currStepUpdatedDataValuesState2 = Object.fromEntries(stepDataKeys.map((stepDataKey, i) => [stepDataKey, stepDatas[i]]));

    const updatedDatas = currStepDataFields.reduce((currentStepDatas, key, i) => {
      currStepDatas[key] = currStepUpdatedDataValues[i]; 
      return currStepDatas;
      }, {}
    );

    console.log("updated objects: ");
    console.log(updatedDatas);
    if(validateData(currStepUpdatedDataValues)) setStep({...step, [step.datas[step.currStep]]: updatedDatas, [step.currStep]: (step.currStep + 1)});
    // else error;
  }

  const buttonOnclickHandler = (isContinue) => {
    if(isContinue) setStep({...step, [step.currStep]: (step.currStep + 1)});
    else setStep({...step, [step.currStep]: (step.currStep - 1)});
  }


  return (
    <div className="w-120 h-[655px] flex flex-col place-content-between items-center bg-[#FFFFFF] rounded-[8px] p-8 gap-7">
      <div className="flex flex-col gap-7">
        <Header/>
        <StepPage currentStepDatas={currentStepDatas} formOnSubmitHandler={formOnSubmitHandler}/>
      </div>
      <div className="w-104 flex gap-2">
        {
          step.currStep > 0 && <Button isContinue={false} currStep={step.currStep + 1} buttonOnclickHandler={() => buttonOnclickHandler(false)}/>
        }
        <Button isContinue={true} currStep={step.currStep + 1} totalStep={totalStep} buttonOnclickHandler={() => buttonOnclickHandler(true)}/>
      </div>
    </div>
  );
















// const fieldsCollection = [["firstName", "lastName", "userName"], [ "email", "phoneNumber", "password", "confirmPassword" ], [ "dateOfBirth", "profileImage" ]];

  // const initDatas1 = {
  //   stepOne: { firstName: "", lastName: "", userName: "", },
  //   stepTwo: { email: "", phoneNumber: "", password: "",  confirmPassword: "", },
  //   stepThree: { dateOfBirth: "", profileImage: "", },
  // }


// const data = {firstName: "", lastName: "", userName: "", email: "", phoneNumber: 0 };


  // console.log("object: ");
  // console.log({...step, hv: "kjh"});

  // const initStates = {step: 1, error: "", ...data};
  // { step, errors, data }

  // action is in dispatch
  // states is in initstates 



  // TESTING
  // console.log("states: " + states);
  // Object.keys(states).map(key => {
  //   console.log(key + ": " + states[key] + "\n");
  // })


  // const formReducer = (states, action) => {
  //   switch (action.type) {
  //     case "UPDATE_FIELD": 
  //       return {...states, [action.field]: action.value};
  //     case "NEXT_STEP":
  //         if(states.step < fieldsCollection.length - 1) return {...states, step: (states.step + 1)};
  //         return states;
  //     case "PREV_STEP": 
  //       if(states.step > 0) return {...states, step: (states.step - 1)};
  //         return states;
  //     case "ERROR": 
  //       return {...states, [action.error]: action.errorMsg};
  //     case "RESET":
  //       return initStates;
  //     default: 
  //       return states;
  //   };
  // };



  // const inputOnchangeHandler = (e, field) => {
  //   dispatch({
  //     type: "UPDATE_FIELD", 
  //     field: field, 
  //     value: e.target.value,
  //   })
  // };


  // const buttonOnclickHandler = (isContinue, ) => {
  //   if(isContinue) dispatch({type: "NEXT_STEP"});
  //   else dispatch({type: "PREV_STEP"});
  // }


  // const [states, dispatch] = useReducer(formReducer, initStates);


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