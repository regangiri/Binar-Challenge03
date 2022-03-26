import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import cardImage from "../assets/card-image.png";
import Rendermodal from "../components/Rendermodal";
function Carcard() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Card className="mx-5 my-2" style={{ width: "23rem" }}>
        <Card.Img variant="top" src={cardImage} />
        {showModal ? <Rendermodal /> : null}
        {/* <Rendermodal /> */}
        <Card.Body>
          <Card.Title>Nama/Tipe Mobil</Card.Title>
          <Card.Text>
            <b>Rp 430.000 / hari</b>
          </Card.Text>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <div className="card-button-container">
            <Button
              className="w-50"
              variant="transparant border-2 border-danger text-danger"
              onClick={() => setShowModal(!showModal)}
            >
              <i class="fa fa-fw fa-trash"></i>
              Delete
            </Button>
            <Button
              className="w-50"
              variant="success text-white border-2 border-white"
            >
              <i class="fa fa-fw fa-edit"></i>
              Edit
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default Carcard;
