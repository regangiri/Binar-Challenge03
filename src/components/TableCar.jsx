import React from "react";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import paginationFactory from "react-bootstrap-table2-paginator";
import BootstrapTable from "react-bootstrap-table-next";

function TableCar() {
  const indexArr = Array.from(Array(100).keys());
  console.log(indexArr);
  const nos = indexArr;
  const carsData = nos.map((no, index) => {
    return {
      no: no,
      name: "Name",
      category: "Category",
      price: "Price",
      startRent: "Start Rent",
      finishRent: "Finish Rent",
      createdAt: "Created At",
      updatedAt: "Updated At",
    };
  });

  const columns = [
    { dataField: "no", text: "No" },
    { dataField: "name", text: "Name" },
    { dataField: "category", text: "Category" },
    { dataField: "price", text: "Price" },
    { dataField: "startRent", text: "Start Rent" },
    { dataField: "finishRent", text: "Finish Rent" },
    { dataField: "createdAt", text: "Created At" },
    { dataField: "updatedAt", text: "Updated At" },
  ];

  return (
    <div>
      <h6>List Car</h6>
      <BootstrapTable
        keyField="id"
        data={carsData}
        columns={columns}
        pagination={paginationFactory()}
      />
    </div>
  );
}

export default TableCar;
