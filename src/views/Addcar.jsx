import React from "react";
import { Form, Button } from "react-bootstrap";

function addcar() {
  return (
    <div className="d-flex align-items-start justify-content-center flex-column">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="masukkan nama mobil" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Harga</Form.Label>
          <Form.Control type="text" placeholder="masukkan harga mobil" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Foto</Form.Label>
          <Form.Control type="file" placeholder="upload foto" />
          <Form.Text className="text-muted">file size max. 2MB</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword"></Form.Group>
        <Form.Label>Start Rent</Form.Label>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          {" "}
          <Form.Control type="text" placeholder="-" />
        </Form.Group>
        <Form.Label>Finish Rent</Form.Label>
        <Form.Control type="text" placeholder="-" />
        <Form.Group className="mb-3" controlId="formBasicPassword"></Form.Group>
        <Form.Label>Created at</Form.Label>
        <Form.Control type="text" placeholder="-" />
        <Form.Group className="mb-3" controlId="formBasicPassword"></Form.Group>
        <Form.Label>Updated at</Form.Label>
        <Form.Control type="text" placeholder="-" />
        <Form.Group className="mb-3" controlId="formBasicPassword"></Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default addcar;
