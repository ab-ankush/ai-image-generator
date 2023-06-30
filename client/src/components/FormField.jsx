import React from "react";

import { Form } from "react-router-dom";
import { preview } from "../assets";

const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-900"
        >
          {labelName}
        </label>
        {isSurpriseMe && (
          <button
            type="button"
            className="font-semibold text-xs bg-[#ececd1] py-1 px-2 rounded-[5px] text-black"
            onClick={handleSurpriseMe}
          >
            Suprise Me
          </button>
        )}
      </div>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className="bg-gray-50 border border-grey-500 text-grey-900 text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4644ff] outline-none block w-full p-3"
      />
    </div>
  );
};

export default FormField;
