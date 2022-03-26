import React from "react";
import { Table } from "react-bootstrap";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import paginationFactory from "react-bootstrap-table2-paginator";
import BootstrapTable from "react-bootstrap-table-next";

function TableOrder() {
  const indexArr = Array.from(Array(100).keys());
  console.log(indexArr);
  const nos = indexArr;
  const carsData = nos.map((no, index) => {
    return {
      no: no,
      userEmail: "User Email",
      startRent: "Start Rent",
      finishRent: "Finish Rent",
      price: "Price",
      status: "Status",
    };
  });

  const columns = [
    { dataField: "no", text: "No" },
    { dataField: "userEmail", text: "User Email" },
    { dataField: "startRent", text: "StartRent" },
    { dataField: "finishRent", text: "Finish Rent" },
    { dataField: "price", text: "Price" },
    { dataField: "status", text: "Status" },
  ];

  return (
    <div>
      <h6>List Order</h6>
      <BootstrapTable
        keyField="id"
        data={carsData}
        columns={columns}
        pagination={paginationFactory()}
      />
    </div>
  );
}

export default TableOrder;
