'use client';

import { InputTab } from "./InputTab";

export const StepTwo = (props) => {
  const { states, inputOnchangeHandler } = props;
  const fields = [ "email", "phoneNumber", "password", "confirmPassword" ];

  return (
    <div className="flex flex-col gap-3">
      {
        fields.map(field => 
          // console.log("ph: " + field.replace(/([A-Z])/g, " $1").toLowerCase().replace(/^./, (c) => c.toUpperCase()));(
            <div className="w-104 gap-3" key={field}>
              <InputTab
                field={field}
                placeholder={field.replace(/([A-Z])/g, " $1").toLowerCase().replace(/^./, (c) => c.toUpperCase())}
                inputValue={states.field}
                inputOnchangeHandler={(e) => inputOnchangeHandler(e, field)}></InputTab>
            </div>)
      }
    </div>
  );
};