import axios from "axios";
import React, { useEffect, useState } from "react";

const InfiniteScrolling = () => {
  const [selectedPage, setSelectedPage] = useState(1);
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    getData();
  }, [selectedPage]);
  function handleScroll() {
    console.log("i am hook");
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >
      document.documentElement.scrollHeight
    ) {
      setSelectedPage((prev) => prev + 1);
    }
  }
  async function getData() {
    try {
      let res = await axios.get(
        `http://localhost:4000/getData/${selectedPage}`
      );
      if (res.status == 200) {
        setAllData((prev) => [...prev, ...res?.data?.rawData?.rows]);
        // console.log(res.data);
      }
    } catch (error) {
      console.log(error.message);
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
          {allData?.map((value, ind) => {
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
    </div>
  );
};

export default InfiniteScrolling;
