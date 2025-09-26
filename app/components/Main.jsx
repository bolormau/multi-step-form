'use client'

// deifne regex matchers then use match

import { useState, useEffect, use } from 'react';
import { Header } from './Header';
import { Button } from './Button';
import { StepPage } from './StepPage';
// import * as constants from '../utils/constants';
// import { Italiana } from 'next/font/google';

// CONSTANTS
const fields = [
  ["firstName", "lastName", "userName"],
  ["email", "phoneNumber", "password", "confirmPassword"],
  ["dateOfBirth", "profileImage"],
];

const totalSteps = fields.length;

// REGEX 
const phoneNumberRegex = "/^\+?\d{8}$/";
const emailRegex = "/^[^\s@]+@[^\s@]+\.[^\s@]+$/";

export const Main = () => {
  // STATES
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const saved = localStorage.getItem("formDatas");
    console.log("After update - local storage: ");
    console.log(saved);
    if(saved) setFormData(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("formDatas", JSON.stringify(formData));
  }, [formData]);

  console.log("1. Current formData: ");
  console.log(formData);
  console.log("2. Current errors: ");
  console.log(errors);

  // FUNCTIONS
  const nextStep = () => {setStep((s) => Math.min(s + 1, totalSteps - 1))};
  const prevStep = () => {setStep((s) => Math.max(s - 1, 0)); console.log("working")};

  const validateStep = (data) => {
    const newErrors = {};
    console.log("first name data: ");
    console.log(data.get("firstName"));

    if(step === 0) {
      console.log("On step 1: ==== ");
      if(!data.get("firstName")?.trim()) {
        newErrors.firstName = "First name required";
        console.log(newErrors.firstName, "Error update - firstname");
      }
      if(!data.get("lastName")?.trim()) newErrors.lastName = "Last name required";
      if(!data.get("userName")?.trim()) newErrors.userName = "User name required";
    };

    if(step === 1) {

    };

    if(step === 2) {

    };

    console.log("Current errors: ");
    console.log(newErrors);
    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const formOnSubmitHandler = (e) => {
    e.preventDefault();
    const formDatas = new FormData(e.target);
    console.log("2. Current formDatas from local storage: ");
    console.log(formDatas);

    const currentStepData = {};   // for converting formDatas into obj data

    formDatas.forEach((value, key) => {
      currentStepData[key] = value;
    });

    console.log("Current local data in object form: ");
    console.log(currentStepData);

    if(validateStep(formDatas)) {
      console.log("Validated = true: No error")
      console.log("Prev data");
      console.log(formData);
      console.log("update data");
      console.log(currentStepData);
      setFormData((prev) => ({...prev, ...currentStepData}));

      if(step < totalSteps - 1) nextStep();
      else {
        console.log("submit jung...");
        console.log({...formData, ...currentStepData});
        localStorage.removeItem("formDatas");
        setStep(0);
        setFormData({});
        console.log("10. Datas in local storage: ");
        console.log(localStorage.getItem("formDatas"));
      }
    }
  }

  return (
    <div className="w-120 h-[655px] flex flex-col place-content-start items-center bg-[#FFFFFF] rounded-[8px] p-8 gap-7">
      <Header/>
      <form className="h-full flex flex-col place-content-between gap-7" onSubmit={formOnSubmitHandler} id="form">
        <StepPage 
          fields={fields[step]} 
          formData={formData}
          errors={errors}
        />
        <div className="w-104 flex gap-2">
          { step > 0 && <Button isContinue={false} prevStep={prevStep}/> }
          <Button isContinue={true} currStep={step + 1} totalSteps={totalSteps}/>
        </div>
      </form>
    </div>
  );
};