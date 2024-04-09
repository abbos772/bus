import React, { useState } from "react";
import "../Navbar/Navbar.css";
const Navbar = () => {
  const Href = ["Home", "Contact", "About", "Sing in"];
  let a = Href?.map((value, index) => {
    return (
      <a className="aa" key={index} href="">
        {value}
      </a>
    );
  });
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const updatemenu = () => {
    if (isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };
  return (
    <div className="continer">
      <div className="navbar">
        <div className="nav">
          <h1>грузовик</h1>
        </div>
        <div className="nav2">{a}</div>

        <div className="burger_menu" onClick={updatemenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
      </div>
      <div className={menu_class}>{a}</div>
    </div>
  );
};

export default Navbar;
