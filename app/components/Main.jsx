'use client'

// import { useState } from "useState";
import { Header } from './Header';
import { Button1 } from './Button1';
import { StepPage1 } from './StepPage1';
import { constants } from '../utils/constants';
import { useState } from 'react';


const [stepChange, setStepChange] = useState(0);
const [errors, setErrors] = useState(constants.initErrors);
console.log(constants.initErrors);

const totalSteps = 3;

const validater = (datas) => {

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
        <StepPage1 formOnSubmitHandler={formOnSubmitHandler}/>
      </div>
      <div className="w-104 flex gap-2">
        {
          <Button1 isContinue={"false"} backOnClickHandler={backOnClickHandler}/>
        }
        <Button1 isContinue={"true"} currStep={currStep} totalSteps={totalSteps}/>
      </div>
    </div>
  );
};