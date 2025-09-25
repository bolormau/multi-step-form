'use client';

import { InputTab } from "./InputTab";

export const StepPage = (props) => {
  const { currStepDatas, formOnSubmitHandler } = props;

  return (
    <form className="flex flex-col gap-3"
      onSubmit={formOnSubmitHandler}
      id="form"
    >
      {
        Object.keys(currStepDatas).map(field => {
          let type = "";
          if(field.toLowerCase().includes("date")) type="date";
          else if(field.toLowerCase().includes("number")) type="number";
          else if(field.toLowerCase().includes("email")) type="email";
          else if(field.toLowerCase().includes("password")) type="password";
          else if(field.toLowerCase().includes("image") || field.toLowerCase().includes("picture")) type="file";

          return (
            <div className="w-104 gap-3" key={field}>
              <InputTab
                type={type}
                field={field}
                
                placeholder={field.replace(/([A-Z])/g, " $1").toLowerCase().replace(/^./, (c) => c.toUpperCase())}
                // inputValue={states.field}
                formOnSubmitHandler={(e) => formOnSubmitHandler(e)}
              />
            </div>);
        })

        // fields.map(field => {
        //   let type = "";
        //   if(field.toLowerCase().includes("date")) type="date";
        //   else if(field.toLowerCase().includes("number")) type="number";
        //   else if(field.toLowerCase().includes("email")) type="email";
        //   else if(field.toLowerCase().includes("password")) type="password";
        //   else if(field.toLowerCase().includes("image") || field.toLowerCase().includes("picture")) type="file";

        //   return (
        //     <div className="w-104 gap-3" key={field}>
        //       <InputTab
        //         type={type}
        //         field={field}
        //         placeholder={field.replace(/([A-Z])/g, " $1").toLowerCase().replace(/^./, (c) => c.toUpperCase())}
        //         inputValue={states.field}
        //         formOnSubmitHandler={(e) => {formOnSubmitHandler(e, field, )}}
        //       />
        //     </div>);
        //   })
      }
    </form>
  );
};