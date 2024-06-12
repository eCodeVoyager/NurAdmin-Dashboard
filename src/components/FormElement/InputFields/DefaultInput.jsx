import React from "react";

const DefaultInput = ({
  label,
  placeholder,
  type,
  isRequired,
  name,
  onChange,
  onBlur,
  value,
}) => (
  <>
    <label className="mb-3 block text-sm font-medium text-black">{label}</label>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="w-full rounded-md border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter placeholder:text-sm placeholder:font-light"
      required={isRequired}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
    />
  </>
);

export default DefaultInput;
