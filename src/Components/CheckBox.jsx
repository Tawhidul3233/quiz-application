// import React from 'react';

// eslint-disable-next-line react/prop-types
const CheckBox = ({ text, className }) => {
  return (
    <label className={className}>
      <input type="checkbox" />
      <span>{text}</span>
    </label>
  );
};

export default CheckBox;