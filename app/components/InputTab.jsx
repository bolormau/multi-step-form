export const InputTab = (props) => {
  const { field, type="text", placeholder, inputValue, inputOnchangeHandler } = props;

  return (
    <div className="w-full flex flex-col place-content-center items-start gap-2">
      <label 
        // htmlFor="id"
        className="text-[#334155] text-[14px] leading-4 font-semibold"
      >
        {placeholder}
      </label>
      <input type={type}
        // id="id" change
        className="w-full border-[1px] border-[#CBD5E1] rounded-[8px] p-3 text-[#8B8E95] text-4 leading-5 focus:border-[#0CA5E9] focus:outline-none"
        placeholder={placeholder}
        value={inputValue}
        onChange={inputOnchangeHandler}
      />
    </div>
  );
};