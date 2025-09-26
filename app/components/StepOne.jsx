'use client';

import { InputTab } from "./InputTab2";

export const StepOne = (props) => {
  const { states, inputOnchangeHandler } = props;
  const fields = [ "firstName", "lastName", "userName" ];

  return (
    <div className="flex flex-col gap-3">
      {
        fields.map(field => 
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