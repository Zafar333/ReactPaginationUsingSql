import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./employeeData.css";
import axios from "axios";
import Pagination from "@mui/material/Pagination";

const EmployeeData = () => {
  const [selectedPage, setSelectedPage] = useState(1);

  const [allData, setAllData] = useState();
  useEffect(() => {
    callNextPage();
  }, []);
  async function callNextPage() {
    try {
      let res = await axios.get(
        `http://localhost:4000/getData/${selectedPage}`
      );
      if (res.status == 200) {
        setAllData(res.data.rawData);
      } else {
        console.log(res.data.msg);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function nextPage(e, value) {
    try {
      setSelectedPage(value);
      let res = await axios.get(`http://localhost:4000/getData/${value}`);
      if (res.status == 200) {
        setAllData(res.data.rawData);
      } else {
        console.log("some error");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id No</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {allData?.rows?.map((value, ind) => {
            return (
              <tr key={ind}>
                <td>{value.id}</td>
                <td>{value.name}</td>
                <td>{value.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination
        siblingCount={1}
        page={selectedPage}
        count={10}
        // defaultPage={selectedPage}
        color="primary"
        onChange={nextPage}
        boundaryCount={2}
      />
    </div>
  );
};

export default EmployeeData;
