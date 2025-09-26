import { InputTab } from "./InputTab";

export const StepPage = (props) => {
  const { fields, formData, errors } = props;

  const typeChecker = (field) => {
    if(field.toLowerCase().includes("password")) return "password";
    else if(field.toLowerCase().includes("email")) return "email";
    else if(field.toLowerCase().includes("date")) return "date";
    else if(field.toLowerCase().includes("picture") || field.toLowerCase().includes("image")) return "file";
    else return "text";
  }

  return(
    <div className="flex flex-col gap-3">
      {
        fields.map((field) => (
          <InputTab
            key={field}
            inputValue={formData[field]}
            type={typeChecker(field)}
            field={field}
            placeholder={field.replace(/([A-Z])/g, " $1").toLowerCase().replace(/^./, (c) => c.toUpperCase())}
          />
        ))
      }
    </div>
  );
};