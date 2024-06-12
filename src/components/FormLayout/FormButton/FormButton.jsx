import React from "react";

const FormButton = ({ name }) => (
  <button
    type="submit"
    className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90 text-white"
  >
    {name}
  </button>
);

export default FormButton;
