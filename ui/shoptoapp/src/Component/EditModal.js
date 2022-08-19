import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const EditModal = (product) => {
  // console.log(product.product.id);
  const [show, setShow] = useState(false);
  const [data, setData] = useState(product.product);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  // console.log(data);
  // console.log(product.product)

  const EditUser = async (id) => {
    try {
      const body = { data };
      const edituser = await fetch(`http://localhost:8000/editUser/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body.data),
      });
      console.log(body.data)
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {/* edit Button */}
      <button  onClick={handleShow} className='Editbutton'>
        EDIT
      </button  >
      <form
      //   onSubmit={submitHandler}
      >
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>EDIT DETAILS</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Container>
                <Row>
                  <Col>
                    <Form.Group className="mb-2" controlId="formBasicEmail">
                      <Form.Label>
                        <b>Email</b>
                      </Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="useremail"
                        defaultValue={product.product.useremail}
                        onChange={changeHandler}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-2" controlId="formBasicPassword">
                      <Form.Label>
                        <b>Product Name:</b>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Product Name"
                        name="productname"
                        defaultValue={product.product.productname}
                        onChange={changeHandler}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Form.Group className="mb-2" controlId="formBasicPassword">
                      <Form.Label>
                        <b>Product Information:</b>
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        placeholder="Describe your product"
                        name="productinfo"
                        defaultValue={product.product.productinfo}
                        onChange={changeHandler}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-2" controlId="formBasicPassword">
                      <Form.Label>
                        <b>price</b>
                      </Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="$ Please Enter The Price Of The Product "
                        name="price"
                        defaultValue={product.product.price}
                        onChange={changeHandler}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Container>

              <div className="d-flex align-items-center justify-content-center"></div>
              <br />
              <small>
                By Submitting, you agree to Shop2App's Conditions of Use and
                Privacy Notice.
              </small>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <button
              style={{ background: "#7445ff,", border: "none" }}
              onClick={() => EditUser(product.product.id)}
            >
              EDIT
            </button>
          </Modal.Footer>
        </Modal>
      </form>
    </>
  );
};

export default EditModal;
