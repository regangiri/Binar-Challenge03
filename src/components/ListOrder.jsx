import React from "react";
import TableOrder from "./TableOrder";
import TableCar from "./TableCar";
function ListOrder() {
  // let carsData = carsData;
  return (
    <div>
      <h1>Dashboard</h1>
      <div className="mx-5">
        <TableOrder />
        <TableCar />
      </div>
    </div>
  );
}

export default ListOrder;
