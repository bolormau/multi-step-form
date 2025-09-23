'use client';

import { InputTab } from "./InputTab";

export const StepThree = (props) => {
  const { state, inputOnchangeHandler } = props;
  const fields = [ "firstName", "lastName", "userName" ];

  return (
    <div className="flex flex-col gap-3">
      {
        fields.map(field => {
          placeholder = () => {
            if(field === "firstName") return "First name";
            else if(field === "lastName") return "Last name";
            else if (field === "userName") return "User name";
          }

          return (
            <div className="w-104 gap-3">
              <InputTab
                key={field}
                field={field}
                placeholder={placeholder}
                inputValue={state.field}
                inputOnchangeHandler={(e) => inputOnchangeHandler(e, field)}></InputTab>
            </div>
          );
        })
      }
    </div>
  );
};