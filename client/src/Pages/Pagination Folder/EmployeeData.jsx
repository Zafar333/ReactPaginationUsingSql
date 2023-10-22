import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const EmployeeData = () => {
  useEffect(() => {
    console.log("i am useeffect");
  }, []);
  return (
    <div>
      <h1>Welcome to employee</h1>
    </div>
  );
};

export default EmployeeData;
