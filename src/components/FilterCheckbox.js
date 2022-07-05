import React from 'react';

const FilterCheckBox = ({ id, name, checked, onChange, label }) => (
  <div>
    <input
      type="checkBox"
      id={id}
      name={name}
      checked={checked}
      onChange={onChange}
    />
    <label htmlFor={id}>{label}</label>
  </div>
);

export default FilterCheckBox;
