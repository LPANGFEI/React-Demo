import React from "react";

const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className="fa fa-info-circle"></i>
        <span> {alert.msg}</span>
      </div>
    )
  );
};

export default Alert;
