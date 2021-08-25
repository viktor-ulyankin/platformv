import React from "react";
import "./Title.css";

const Title = ({ semantic = true, level, children }) => {
  const lvl = typeof level === 'number' && !Number.isNaN(level) && level >= 1 && level <= 6 ? level : 1;
  const Tag = semantic ? `h${lvl}` : 'div';

  return <Tag className={`title title_${lvl}`}>{ children }</Tag>;
};

export default Title;