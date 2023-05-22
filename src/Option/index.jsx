import React from 'react';
import Icon from '../Icon/index';
import './style.css';

const Option = ({ type, text, onSelected }) => {

  const handleOnClick = (iconType) => {
    console.log(text)
    // onSelected()
    onSelected(iconType)
  }

  return (
    <div className="option" onClick={() => handleOnClick(type)}>
      <Icon type={type} />
      <div>{text}</div>
    </div>
  );
};

export default Option;