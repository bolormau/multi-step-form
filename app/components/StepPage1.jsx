import { InputTab1 } from "./InputTab1"

export const StepPage1 = (props) => {
const { formOnSubmitHandler } = props;

return(
    <form className="flex flex-col gap-3"
      onSubmit={formOnSubmitHandler}
      id="form"
    >
    </form>
  );
};