import React from "react";
import ListOrder from "../components/ListOrder";
import Sidebar from "../components/Sidebar";
import Routers from "../routers/Routes";

function Dashboard() {
  return (
    <div>
      <Sidebar />
      <div className="margin-listorder">
        <ListOrder />
      </div>
    </div>
  );
}

export default Dashboard;
