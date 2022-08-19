import React, { useState } from "react";
// Packages
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { BsFillCartPlusFill } from "react-icons/bs";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// Files
import logo from "./Images/logo.png";
import ShopifyNavbar from "./ShopifyNavbar";
const Addproduct = () => {
  const [data, setData] = useState({
    useremail: "",
    productname: "",
    productinfo: "",
    price: "",
  });
  //   Destructuring
  const { useremail, productname, productinfo, price } = data;

  const changehandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  //   posting the values to backend
  const submithandler = async (e) => {
    e.preventDefault();
    const body = data;
    try {
      const response = await fetch(`http://localhost:8000/register`, {
        method: "POST",
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify(body),
      });
      console.log(response);
      // for alerting when the new product is
      alert(`New product ${data.productname} id Added`);
    } catch (error) {
      console.log(error);
    }
  };
  // for navigating to View product page
  const navigate = useNavigate();
  // for navigating to view employeeepage
  const ViewProducts = () => {
    navigate("/Viewproduct");
  };

  return (
    <>
      {/* <ShopifyNavbar /> */}
      <div
        className="d-flex align-items-center justify-content-center"
        id="dialog"
        gap={3}
      >
        <div
          className="w-50 mt-5"
          style={{
            border: "2px solid #7445ff",
            borderRadius: "12px",
            padding: "71px",
          }}
          id="dialog-content"
        >
          <div className="d-flex align-items-center justify-content-center">
            <img src={logo} />
          </div>
          <hr/>
          <Form onSubmit={submithandler}>
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
                      value={useremail}
                      onChange={changehandler}
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
                      value={productname}
                      onChange={changehandler}
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
                      value={productinfo}
                      onChange={changehandler}
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
                      value={price}
                      onChange={changehandler}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Container>

            <div className="d-flex align-items-center justify-content-center">
              <Button
                className="w-50 mt-3"
                type="submit"
                style={{ background: "#7445ff" }}
              >
                <b>Add Product</b>
              </Button>
            </div>
            <br />
            <small>
              By Submitting, you agree to Shop2App's Conditions of Use and
              Privacy Notice.
            </small>
          </Form>
          {/* For Going To View Product Page */}
          <div className="d-flex align-items-center justify-content-center mt-4">
            <Button
              className="w-50"
              type="submit"
              style={{ background: "#7445ff" }}
              onClick={ViewProducts}
            >
              <b>View Products</b>
              <BsFillCartPlusFill />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Addproduct;
