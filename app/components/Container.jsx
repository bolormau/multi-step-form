'use client';

import { useState, useEffect } from "react";
import { Header } from "./Header"; 
import { StepPage } from "./StepPage2";
import { Button } from "./Button2";
import { initStates } from "../utils/constants";


// step next back


export const Container = () => {
  // INITIAL DATAS

  // const init = localStorage.setItem("init", 1);

  // STATE
  const [currStep, steCurrStep] = useState(0);

  const [step, setStep] = useState(initStates); 

  // USEFUL VARIABLES 
  // TESTING
  const totalStepCount = Object.keys(initDatas).length;
  console.log("1. total step count: " + totalStepCount);
  
  const allKeysArr = [initDatas.flatMap(Object.keys)];
    // above works because Object.keys is expecting parameter which should be an object and 
    // our array map/flatMap running through every object in array, 
    // so it gives object that needed in Object.keys automatically, bc that needed value is matching to what map gives it.
    // flatMap => makes an flat array like combining(like spread) all mapped stuffs.
  console.log("2. All keys' array: ");
  console.log(allKeysArr);

  console.log("3. All Step Datas: ");
  console.log(step);

  const currStepDatas = step.datas[step.currStep];
  console.log("4. Current Step Datas Only: ");
  console.log(currStepDatas);

  const currStepKeys = Object.keys(currStepDatas).map(field => field);
  console.log("5. Current Step Keys Only: ");
  console.log(currStepKeys);


  // CURRENT ERROR === INIT ERROR CHECKER
  const errorComparer = (currErrors, initErrors) => {
    if(currErrors.length !== initErrors.length) return false;
    
    return currErrors.every((currErrorObj, i) =>{ 
      const initErrorObj = initErrors[i];
      const currErrorsValues = Object.values(currErrorObj);
      const initErrorsValues = Object.values(initErrorObj);
      return currErrorsValues.every((currErrorsValue, j) => currErrorsValue === initErrorsValues[j]);
    });
  };

  console.log("6. Curr error === initError: ");
  console.log(errorComparer(step.errors, initErrors));


  // DATA VALIDATION CHECKER
  // const validateData = (datas) => {
  //   if(!datas.firstName) setStep({...step, (step.errors[step.currStep]): "First name is required"});
  //   else errors[0].firstName = "";

  //   if(!datas.email) step.errors[1].email = "Email is required"; 
  //   else errors[1].email = "";

  //   if(!datas.dateOfBirth) errors.stepThree.dateOfBirth = "Date of birth is required"; 
  //   else errors.stepThree.dateOfBirth = "";

  //   if(errorComparer(step.errors, initErrors)) return true;
  // }


  // FORM ONSUBMIT HANDLER (ERROR OR CONTINUE)
  console.table(step.errors,' current errors');
  
  const formOnSubmitHandler = (e) => {
    console.log("working onsubmit handler: ");
    e.preventDefault();
    console.log("working");

    const formDatas = new FormData(e.target);
    console.log("Testing: ");
    
    console.log(formDatas.get('firstName'), 'firstname')
    const newErros = [...step.errors];
    newErros[step.currStep].firstName = 'firstname is required';
    setStep({ ...step, errors: newErros});

    // const currStepUpdatedValues = currStepKeys.map(currStepDataField => formDatas.get(currStepDataField));
    // console.log(currStepUpdatedValues);

    // // const currStepUpdatedValuesState2 = Object.fromEntries(stepDataKeys.map((stepDataKey, i) => [stepDataKey, stepDatas[i]]));

    // // reduce for updating all data by updated curr step's data.
    // const allStepUpdatesValues = currStepKeys.reduce((currStepDatas, key, i) => {
    //   currStepDatas[key] = currStepUpdatedValues[i]; 
    //   return currStepDatas;
    //   }, {}
    // );

    // console.log("Updated steps: ");
    // console.log(allStepUpdatesValues);


    // if(errorComparer(step.errors, initErrors)) {
    //   setStep({...step, currStep: (step.currStep + 1), });
    //   // console.log("updated step:");
    //   // console.log({...step, currStep: (step.currStep + 1), });
    //   // datas[step.currStep]: allStepUpdatesValues
    // }
    // else console.log("error");
  }

  const backOnClickHandler = () => {
    console.log("back working");
    setStep({...step, currStep: (step.currStep - 1) });
  };

  console.log("Current All Errors: ");
  console.log(step.errors);
  console.log("Init Errors: ");
  console.log(initErrors);

  console.log("7. All Step Datas: ");
  console.log(step);

  return (
    <div className="w-120 h-[655px] flex flex-col place-content-between items-center bg-[#FFFFFF] rounded-[8px] p-8 gap-7">
      <div className="flex flex-col gap-7">
        <Header/>
        <StepPage currStepDatas={currStepDatas} formOnSubmitHandler={formOnSubmitHandler}/>
      </div>
      <div className="w-104 flex gap-2">
        {
          step.currStep > 0 && <Button isContinue={false} currStep={step.currStep + 1} backOnClickHandler={() => backOnClickHandler}/>
        }
        <Button isContinue={true} currStep={step.currStep + 1} totalStepCount={totalStepCount}/>
      </div>
    </div>
  );
};




































  // const buttonOnclickHandler = (isContinue) => {
  //   if(isContinue) setStep({...step, [step.currStep]: (step.currStep + 1)});
  //   else setStep({...step, [step.currStep]: (step.currStep - 1)});
  // }



  // const stepMap = Object.keys(step).map((key, i) => {
  //   if(key === "currStep") return key + ": " + step[key] + "\n";
  //   else return ( step[key].map((field, i) => {
  //     return (
  //       Object.keys(field).map((fieldKey, i) => {
  //         return fieldKey + ": " + field[fieldKey] + "\n";
  //       }));
  //   }));
  // });

  // console.log(stepMap);





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
