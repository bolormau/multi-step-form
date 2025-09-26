import Image from "next/image";

export const Button = (props) => {
  const {isContinue, currStep, totalStepCount, backOnClickHandler } = props;

  if(isContinue) return (
    <button className="flex-1 bg-[#121316] text-[#FFFFFF] text-4 leading-6 rounded-[6px] py-2.5 px-3"
      type="submit"
      form="form"
      // onClick={buttonOnclickHandler}  
    >
      Continue {currStep}/{totalStepCount} 
    </button>
  );

  return (
    <button className="w-32 flex place-content-center items-center bg-[#FFFFFF] text-[#202124] border-[1px] border-[#CBD5E1] rounded-[6px] py-2.5 px-3 gap-1"
      onClick={backOnClickHandler}
    >
      <Image 
        src="/chevron_left.svg"
        alt=""
        className="fill-white"
        width={24}
        height={24}
      ></Image>
      Back
      </button>
  );
};