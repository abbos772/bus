import React from "react";
import "../Footer/Footer.css";
import insta from "../../img/Group 875.png";
import fakebook from "../../img/Group 876.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="continer">
        <div className="foots">
          <div className="foot">
            <h1>LOGO</h1>
          </div>
          <div className="foot">
            <p>Каталог</p>
            <p>о компании</p>
            <p>Индивидуальная </p>
            <p>Партнерам</p>
          </div>
          <div className="foot">
            <p>2D, 3D модели</p>
            <p>Шоу-румы</p>
            <p>Дилерам</p>
            <p>Контакты</p>
            <p>Конфигуратор</p>
          </div>
          <div className="foot">
            <div className="foot1">
              <img src={insta} alt="" />
              <img src={fakebook} alt="" />
            </div>
            <h4>+38 (099)-638-45-37</h4>
            <button>Персональная консультация </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
