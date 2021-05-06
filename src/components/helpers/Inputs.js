import React from 'react';

export const Inputs = ({
  name,
  id,
  label,
  value,
  type,
  placeholder,
  onChange,
  accept,
  className,
  onBlur,
}) => {
  return (
    <li className={className}>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        accept={accept}
        tabIndex='0'
        onBlur={onBlur}
      />
      <label htmlFor={id}>{label}</label>
    </li>
  );
};
