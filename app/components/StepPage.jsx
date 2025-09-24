'use client';

import { InputTab } from "./InputTab";

export const StepPage = (props) => {
  const { fields, states, inputOnchangeHandler } = props;
  // const fields = [ "dateOfBirth", "profileImage" ];

  return (
    <div className="flex flex-col gap-3">
      {
        fields.map(field => {
          let type = "";
          if(field.toLowerCase().includes("date")) type="date";
          else if(field.toLowerCase().includes("number")) type="number";
          else if(field.toLowerCase().includes("password")) type="password";
          else if(field.toLowerCase().includes("image") || field.toLowerCase().includes("picture")) type="image";

          return (
            <div className="w-104 gap-3" key={field}>
              <InputTab
                type={type}
                field={field}
                placeholder={field.replace(/([A-Z])/g, " $1").toLowerCase().replace(/^./, (c) => c.toUpperCase())}
                inputValue={states.field}
                inputOnchangeHandler={(e) => inputOnchangeHandler(e, field)}></InputTab>
            </div>);
          })
      }
    </div>
  );
};