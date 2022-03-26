import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import modalImage from "../assets/modal-img.png";
function Rendermodal() {
  const [show, setShow] = useState(true);

  return (
    <div className="modal-style d-flex">
      <Modal centered={true} show={show} onHide={() => setShow(false)}>
        <img className="w-50 h-50" src={modalImage} alt="" />
        <Modal.Dialog centered={true} className="text-center">
          <Modal.Header className="text-center" closeButton>
            <Modal.Title>Menghapus Data Mobil</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>
              Setelah dihapus, data mobil tidak dapat dikembalikan. Yakin ingin
              menghapus?
            </p>
          </Modal.Body>

          <Modal.Footer className="d-flex align-items-center justify-content-center">
            <Button variant="primary">Ya</Button>
            <Button onClick={() => setShow(false)} variant="secondary">
              Tidak
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>
    </div>
  );
}

export default Rendermodal;
