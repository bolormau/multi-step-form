import Image from "next/image";

export const Header = () => {
  return (
    <div className="w-104 flex flex-col place-content-center items-start text-[#202124] gap-0.5">
      <Image
        alt=""
        src="/pinecone.svg"
        width={60}
        height={60}
      />
      <h1 className="text-[26px] font-semibold">Join Us! 😎</h1>
      <p className="text[18px] text-[#8E8E8E]">Please provide all current information accurately.</p>
    </div>
  );
};