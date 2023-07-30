import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "./componentes/Nav";
import Home from "./componentes/Home";
import Footer from "./componentes/Footer";
import Login from "./componentes/Login";
import Viajes from "./componentes/Viajes";
import Contactar from "./componentes/Contactar";
import Error from "./componentes/Error";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/viajes" element={<Viajes />} />
        <Route path="/Contactar" element={<Contactar />} />
        <Route path="/Error" element={<Error />} />

        <Route path="*" element={<Navigate to="/Error" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
