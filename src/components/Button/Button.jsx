import React from "react";
import "./Button.css";
import classNames from "classnames";
import { isNoEmptyString } from "../../assets/js/is-no-empty-string";

const Button = ({ Tag = 'button', size = 'small', children, ...attr }) => {
  const isLink = isNoEmptyString(attr.href);

  if (isLink) {
    Tag = 'a';
  }

  return (
    <Tag
      className={classNames({
        'button': true,
        'button_small': size === 'small',
        'button_large': size === 'large',
      })}
      { ...attr }
    >{ children }</Tag>
  );
};

export default Button;