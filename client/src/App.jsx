import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmployeeData from "./Pages/Pagination Folder/EmployeeData";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmployeeData />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
