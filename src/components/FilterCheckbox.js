import React from 'react';
import { Input } from 'reactstrap';

const FilterCheckbox = ({ id, name, checked, onChange, label }) => {
  return (
    <div>
      <Input
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        onChange={onChange}
      />
      {label}
    </div>
  );
};

export default FilterCheckbox;
