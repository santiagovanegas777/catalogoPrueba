import { Link } from "react-router-dom";
import "../../styles/Footer/Footer.css";

// const social1 = require("../../assets/images/instagram.png");
// const social2 = require("../../assets/images/facebook-icon-white-png-1200x1200.png");
// const social3 = require("../../assets/images/twitter.png");

const Footer = () => {
  return (
    <nav className="footer_nav">
      <ul className="footer_list">
        <li>
          <Link className="footer_list_element" to="/">
           HOME
          </Link>
        </li>
        <li>
          <Link className="footer_list_element" to="/estilos">
            Catalogo
          </Link>
        </li>
        <li>
          <Link className="footer_list_element" to="/register">
            Registro
          </Link>
        </li>
        <li>
          <Link className="footer_list_element" to="/login">
            Login
          </Link>
        </li>
        
        <li>
          <Link className="footer_list_element" to="/contacto">
            Contacto
          </Link>
        </li>
        
        <li>
          <Link className="footer_list_element" to="/about">
            Acerca de nosotros
          </Link>
        </li>
        <li>
          <Link className="footer_list_element" to="/terminosycondiciones">
            Términos y condiciones
          </Link>
        </li>
        
      </ul>
      
      <p className="footer_text">
        ©2024 DESARROLLADO POR: SANTIAGO CORREA VANEGAS 
      </p>
    </nav>
  );
};

export default Footer;
