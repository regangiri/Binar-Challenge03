import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
function Addnewcardbutton() {
  let navigate = useNavigate();

  return (
    <div className="d-flex justify-content-end my-3 mx-5">
      <Button
        className="d-flex align-items-center justify-content-center"
        variant="primary"
        onClick={() => navigate("/cars/addcar")}
      >
        {" "}
        <i className="fa fa-fw fa-plus mx-3"></i>
        <p className="mx-2">Add new car</p>
      </Button>
    </div>
  );
}

export default Addnewcardbutton;
