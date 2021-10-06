import React, { useState } from 'react';

import {
  CurrentSelect,
  SelectBox,
  BoxInput,
  BoxList,
  BoxListItem,
  BoxLabel,
  ArrowIcon,
} from './select.styles';

const Select = ({
  options, placeholder, handleChange, name,
}) => {
  const [select, setSelect] = useState(placeholder);
  const [show, setShow] = useState(false);

  const handleCloseList = () => {
    setShow((prevState) => !prevState);
  };

  const onSelect = (e) => {
    setSelect(e.target.value);
    handleChange(e);
    handleCloseList();
  };

  return (
    <SelectBox>
      <CurrentSelect onClick={handleCloseList}>{select}</CurrentSelect>
      <ArrowIcon icon="arrow_drop_down" show={show} />
      <BoxList show={show}>
        {options.map(({ value }, index) => (
          <BoxListItem key={value}>
            <BoxInput
              onChange={onSelect}
              type="radio"
              name={name}
              id={index + 1}
              value={value}
            />
            <BoxLabel htmlFor={index + 1}>{value}</BoxLabel>
          </BoxListItem>
        ))}
      </BoxList>
    </SelectBox>
  );
};

export default Select;
