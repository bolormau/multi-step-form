import Image from "next/image";

export const ContinueButton = (props) => {
  const { type="continue", continueOnclickHandler } = props;

  return (
    <button className="flex-1 bg-[#121316] text-[#FFFFFF] text-4 leading-6 rounded-[6px] py-2.5 px-3"
      onClick={continueOnclickHandler}  
    >
      {type}
    </button>
  );
}

export const BackButton = (props) => {
  const { type="Back", backOnclickHandler, current } = props;

  return (
    <button className="w-32 flex place-content-center items-center bg-[#FFFFFF] text-[#202124] border-[1px] border-[#CBD5E1] rounded-[6px] py-2.5 px-3 gap-1"
      onClick={backOnclickHandler}
    >
      <Image 
        src="/chevron_left.svg"
        alt=""
        className="fill-white"
        width={24}
        height={24}
      ></Image>
      {type}
      </button>
  );
}