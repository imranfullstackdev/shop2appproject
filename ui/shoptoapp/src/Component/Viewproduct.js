import React, { useState, useEffect } from "react";
import ShopifyNavbar from "./ShopifyNavbar";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "./Images/logo.png";
import EditModal from "./EditModal";
import Productimages from "./Images/Productimage.jpg";

const Viewproduct = () => {
  const [viewProduct, SetViewProduct] = useState([]);

  // for getting All the data from Backend
  const getProduct = async () => {
    const Productdata = await fetch(`http://localhost:8000/api/v1/get`);
    const jsonData = await Productdata.json();
    SetViewProduct(jsonData);
  };
  // For Deleting User
  const DeleteUser = async (id) => {
    const datadlt = await fetch(`http://localhost:8000/deleteUser/${id}`, {
      method: "delete",
    });
    alert("Deleted Sucessfully");
    window.location.reload();
  };

  useEffect(() => {
    getProduct();
  }, []);

  // JSX
  return (
    <>
      <ShopifyNavbar />
      <div className="text-center mb-3">
        <h5 className=" mt-3" id="empdeslabel1" >
          View Product
        </h5>
      </div>
      <div
        className="d-flex mt-3"
        style={{ flexWrap: "wrap", paddingLeft: "136px" }}
      >
        {/* for searching */}
        
        {viewProduct.map((product) => {
          return (
            <div>
              <Container>
                <Row>
                  <Col>
                    <Card
                      style={{ width: "18rem", marginBottom: "30px" }}
                      key={product.id}
                    >
                      <Card.Img
                        variant="top"
                        className="h-25"
                        src={Productimages}
                      />
                      <Card.Body>
                        <Card.Title>
                          <b>Name:{product.productname}</b>
                        </Card.Title>
                        <Card.Text>
                          <b>Description:{product.productinfo}</b>
                        </Card.Text>
                        <Card.Text>
                          <b>Price:{product.price}</b>
                        </Card.Text>
                        <Card.Text>
                          <b>Email:{product.useremail}</b>
                        </Card.Text>
                        <div gap={3}>
                          <button style={{ border: "none" }} className="ms-3">
                            <EditModal product={product} />
                          </button>
                          <Button
                            className="ms-3"
                            onClick={() => DeleteUser(product.id)}
                          >
                            DELETE
                          </Button>
                        </div>
                      </Card.Body>
                      <br />
                    </Card>
                  </Col>
                </Row>
              </Container>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Viewproduct;
