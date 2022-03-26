import React from "react";
import Sidebar from "../components/Sidebar";

import Rendercard from "../components/Rendercard";
import Addnewcardbutton from "../components/Addnewcardbutton";

function Cars() {
  return (
    <div>
      <Sidebar />
      <div className="margin-listorder ">
        <Addnewcardbutton />
        <Rendercard />
      </div>
    </div>
  );
}

export default Cars;
