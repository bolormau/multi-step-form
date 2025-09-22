import Image from "next/image";

export const StepOne = () => {
  return (
    <div className="w-104 flex flex-col place-content-center items-start gap-2">
      <Image className=""
        src="/pinecone.svg"
        width={60}
        height={60}
      ></Image>

    </div>
  );
}