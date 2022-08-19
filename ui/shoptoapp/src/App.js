import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Addproduct from "./Component/Addproduct";
import Viewproduct from "./Component/Viewproduct";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Addproduct />} />
          <Route path="Viewproduct" element={<Viewproduct />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
