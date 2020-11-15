import React from "react";

function FormSelect({ label, options, updateSelected }) {
  const selectId = label.replace(/ /g, "").toLowerCase();

  return (
    <div className="flex items-center mt-4 md:mt-0 md:ml-4">
      <label htmlFor={selectId} className="text-white">
        {label}
      </label>
      <select
        id={selectId}
        className="ml-4 flex-grow md:w-32"
        onChange={(e) => updateSelected(e.target.value)}
      >
        {Object.keys(options).map((value, index) => (
          <option key={index} value={value}>
            {options[value]}
          </option>
        ))}
      </select>
    </div>
  );
}

FormSelect.defaultProps = {
  label: "Label",
};

export default FormSelect;
