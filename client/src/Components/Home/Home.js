import React from "react";
import { useState, useEffect } from "react";
import API from "../../utils/API";
import EmpData from "../EmpData/EmpData";

const Home = () => {
  const [emp, setEmp] = useState(null);

  useEffect(() => {
    API.empResults(emp)
      .then((res) => {
        return res.data;
      })
      .then((data) => setEmp(data.results));
  }, []);

  console.log(emp);
  return (
    <div className="home">
      {emp && <EmpData emp={emp} title="All Employees" />}
    </div>
  );
};

export default Home;
