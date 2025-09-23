'use client';

import { InputTab } from "./InputTab";

export const StepOne = (props) => {
  const { state, inputOnchangeHandler } = props;
  const fields = [ "firstName", "lastName", "userName" ];

  return (
    <div className="flex flex-col gap-3">
      {
        fields.map(field => {
          let placeholder = "";
          if(field === "firstName") placeholder = "First name";
          else if(field === "lastName") placeholder = "Last name";
          else if (field === "userName") placeholder = "User name";

          console.log("placeholder: " + placeholder);

          return (
            <div className="w-104 gap-3" key={field}>
              <InputTab
                // key={field}
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