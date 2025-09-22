import Image from "next/image";
import { InputTab } from "./InputTab";

export const StepOne = () => {
  return (
    <div>
      <div className="w-104 flex flex-col place-content-center items-start text-[#202124] gap-2">
        <Image className=""
          src="/pinecone.svg"
          width={60}
          height={60}
        ></Image>
        <h1 className="text-[26px] font-semibold">Join Us! 😎</h1>
        <p className="text[18px] text-[#8E8E8E]">Please provide all current information accurately.</p>
      </div>
      <div className="w-104 gap-3">
        <InputTab></InputTab>
      </div>
    </div>
  );
}