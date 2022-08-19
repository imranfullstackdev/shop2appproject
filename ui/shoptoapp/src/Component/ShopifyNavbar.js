// packages
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import { BsFillCartPlusFill } from 'react-icons/bs';

// files
import logo from "./Images/logo.png";

function ShopifyNavbar() {
  // for navigating to Add Product page
  const navigate=useNavigate()
  const addproductPage=()=>{
navigate('/')
  }

  return (
    <Navbar>
      <Container className="navbarLogo">
        <Navbar.Brand href="#home" >
          <img src={logo} onClick={addproductPage} />
        </Navbar.Brand>
        <Nav className="">
          <Nav.Link href="#Addproduct" className="addtopageicon">
            <b onClick={addproductPage} ><BsFillCartPlusFill/></b>
            <h6 style={{color:"#7445ff"}}>Add Product</h6>
          </Nav.Link>
          
        </Nav>
      </Container>
    </Navbar>
  );
}

export default ShopifyNavbar;
