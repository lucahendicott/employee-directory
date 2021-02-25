import React from "react";

const EmpData = ({ emp }) => {
  return (
    <table className="emp-list">
      {emp.map((employee) => (
        <tbody className="emp-view" key={employee.uuid}>
          <td>
            <img src={employee.picture.thumbnail} alt="employee photo" />
          </td>
          <td>
            {employee.name.first} {employee.name.last}
          </td>
        </tbody>
      ))}
    </table>
  );
};

export default EmpData;
