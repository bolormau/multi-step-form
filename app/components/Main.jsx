'use client'

// import { useState } from "useState";
import { Header } from './Header';
import { Button1 } from './Button1';
import { StepPage1 } from './StepPage1';
import * as constants from '../utils/constants';
import { useState } from 'react';

const initErrors = { 
  firstName: "", 
  lastName: "", 
  userName: "", 
  email: "", 
  phoneNumber: "", 
  password: "",  
  confirmPassword: "", 
  dateOfBirth: "", 
  profileImage: "", 
};
const fields = [
  ["firstName", "lastName", "userName"],
  ["email", "phoneNumber", "password", "confirmPassword"],
  ["dateOfBirth", "profileImage"],
];


// const [step, setStep] = useState(0);
// const [errors, setErrors] = useState(initErrors);
console.log({initErrors});

const totalSteps = 3;

// const errorChecker()

const step1Validater = (datas) => {

} 

const step2Validater = (datas) => {

} 

const step3Validater = (datas) => {

} 

const formOnSubmitHandler = () => {

}

const backOnClickHandler = () => {
  
}

export const Main = () => {

  return (
    <div className="w-120 h-[655px] flex flex-col place-content-between items-center bg-[#FFFFFF] rounded-[8px] p-8 gap-7">
      <div className="flex flex-col gap-7">
        <Header/>
        <StepPage1 fields={fields[step]} formOnSubmitHandler={formOnSubmitHandler}/>
      </div>
      <div className="w-104 flex gap-2">
        {
          <Button1 isContinue={"false"} backOnClickHandler={backOnClickHandler}/>
        }
        <Button1 isContinue={"true"} currStep={step} totalSteps={totalSteps}/>
      </div>
    </div>
  );
};