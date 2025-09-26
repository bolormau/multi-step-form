export const InputTab = (props) => {
  const { field, type, inputValue, fileOnChangeHandler } = props;

  const modifiedText= field.replace(/([A-Z])/g, " $1").toLowerCase().replace(/^./, (c) => c.toUpperCase());
  
  if(type === "file") return (
    <div className="w-full flex flex-col place-content-center items-start gap-2">
      <label 
        htmlFor={field}
        className="text-[#334155] text-[14px] leading-4 font-semibold"
      >
        {modifiedText}
      </label>
      <div className="relative w-full min-h-20 h-45 flex flex-col place-content-center items-center">
        <input
          name={field}
          type={type}
          accept="image/*"
          className="w-full min-h-20 h-45 flex flex-col place-content-center items-center bg-[#7F7F800D] rounded-md p-3 text-[#8B8E95] text-4 leading-5 focus:outline-none"
        />
        {/* <p className="text-black">jhgf</p> */}
      </div>
      {/* {error && <p className="text-[#E14942] text-[14px] leading-5">{error}</p>} */}
    </div>


    // <img src={URL.createObjectURL(selectedFile)}
  ); 

  return (
    <div className="w-full flex flex-col place-content-center items-start gap-2">
      <label 
        htmlFor={field}
        className="text-[#334155] text-[14px] leading-4 font-semibold"
      >
        {modifiedText}
      </label>
      <input 
        id={field}
        name={field}
        type={type} 
        defaultValue={inputValue || ""}
        className="w-full border-[1px] border-[#CBD5E1] rounded-[8px] p-3 text-[#8B8E95] text-4 leading-5 focus:border-[#0CA5E9] focus:outline-none"
        placeholder={modifiedText}
      />
      
    </div>
  );
};