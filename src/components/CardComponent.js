import React from "react";

const CardComponent = ({
  icon,
  title,
  list,
  price,
  onClick,
  buttonLabel,
  className,
}) => {
  return (
    <div className={`mb-5 mt-5 ${className}`}>
      {icon}
      <h4 className="subtitle">{title}</h4>
      <ul className="p-3">
        {list?.map((x, y) => (
          <li key={y}>{x}</li>
        ))}
      </ul>
      <h3 className="subtitle">{price}</h3>
      <button className="btn btn-orange" onClick={onClick}>
        {buttonLabel}
      </button>
    </div>
  );
};

export default CardComponent;
