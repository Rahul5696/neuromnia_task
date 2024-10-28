import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

const Select = ({ options, title, setData, setErrors, errorType, errors, value }) => {
  const [val, setVal] = useState('');
  const dispatch = useDispatch()

  useEffect(() => {
    if (value) {
      dispatch(setData(value));
    }
  }, [value, dispatch, setData]);

  return (
    <div className="mb-3">
      <label className="form-label">{title}</label>
      <select
        className="form-select"
        value={value} // Use the value prop to control the select
        onChange={(e) => {
          setErrors((prevErrors) => ({ ...prevErrors, [errorType]: null }));
          dispatch(setData(e.target.value)); // Dispatch the value directly
        }}
      >
        <option value="">Select {title}</option>
        {options?.map((option, index) => (
          <option key={index} value={option?.value}>
            {option?.level}
          </option>
        ))}
      </select>
      {errors?.[errorType] && <p className="text-danger">{errors[errorType]}</p>}
    </div>
  );
};

export default Select;
