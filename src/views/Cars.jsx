import React from "react";
import Sidebar from "../components/Sidebar";
import Carcard from "../components/Carcard";
import Rendercard from "../components/Rendercard";

function Cars() {
  return (
    <div>
      <Sidebar />
      <div className="margin-listorder ">
        {/* <Carcard /> */}
        <Rendercard />
      </div>
    </div>
  );
}

export default Cars;
