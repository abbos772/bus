import React from "react";
import "../Main/Main.css";
import bus from "../../img/adir-Cargo-Insurance 1.png";
import vector10 from "../../img/Vector (10).png";
import vector11 from "../../img/Vector (11).png";
import Group from "../../img/Group.png";
import Rectange from "../../img/Rectangle 13.png";
import Rectange1 from "../../img/Rectangle 13 (1).png";
import Rectange2 from "../../img/Rectangle 13 (2).png";
import Rectange32 from "../../img/Rectangle 32.png";
import Rectange33 from "../../img/Rectangle 32 (1).png";
import Rectange34 from "../../img/Rectangle 32 (2).png";
import Rosatom from "../../img/logotip-rosatom 1.png";
import layer from "../../img/layer1.png";
import logo from "../../img/logo 1.png";
import group1 from "../../img/Group (1).png";
import lukoil from "../../img/5.png";
import logomain from "../../img/logo_main 1.png";
import rostech from "../../img/rostech.png";
import vtb from "../../img/8.png";
import insta from "../../img/Vector (12).png";
import vk from "../../img/Vector (13).png";
import linked from "../../img/linkedin .png";
import user1 from "../../img/Ellipse 10 (1).png";
import user2 from "../../img/Ellipse 11.png";
import user3 from "../../img/Ellipse 11 (1).png";
import user4 from "../../img/Ellipse 10 (2).png";
import user5 from "../../img/Ellipse 10 (3).png";
import user6 from "../../img/Ellipse 11 (2).png";
import bigbus from "../../img/image 1.png";
const Main = () => {
  const data = [
    {
      id: 1,
      title: "Росатом",
      category: "Корпорация атомной энергии",
      url: Rosatom,
    },
    {
      id: 2,
      title: "Газпром",
      category: "Энергетическая компания",
      url: layer,
    },
    {
      id: 3,
      title: "Роснефть",
      category: "Нефтегазовая компания",
      url: logo,
    },
    {
      id: 4,
      title: "Роскосмос",
      category: "Корпорация в космической отрасли",
      url: group1,
    },
    {
      id: 5,
      title: "Лукойл",
      category: "Нефтяная компания",
      url: lukoil,
    },
    {
      id: 6,
      title: "Интер РАО",
      category: "Энергетическая компания",
      url: logomain,
    },
    {
      id: 7,
      title: "Ростех",
      category: "Промышленная корпорация",
      url: rostech,
    },
    {
      id: 8,
      title: "Банк ВТБ",
      category: "Коммерческий банк",
      url: vtb,
    },
  ];
  let homiylar = data?.map((el) => (
    <div className="brends">
      <div key={el.id} className="brend">
        <img src={el.url} alt="" />
        <h3>{el.title}</h3>
        <p>{el.category}</p>
      </div>
    </div>
  ));
  const data2 = [
    {
      id: 1,
      url: user1,
      title: "Антон Макаров",
      categ: "Руководитель компании ",
    },
    {
      id: 2,
      url: user2,
      title: "Елена Валерьева",
      categ: "Главный бухгалтер ",
    },
    {
      id: 3,
      url: user3,
      title: "Иван Аркадьев ",
      categ: "Менеджер по закупкам ",
    },
    {
      id: 4,
      url: user4,
      title: "Борис Вавилов ",
      categ: "Бухгалтер ",
    },
    {
      id: 5,
      url: user5,
      title: "Алина Кравец ",
      categ: "Сотрудник отдела кадров ",
    },
    {
      id: 6,
      url: user6,
      title: "Виктор Козуб ",
      categ: "Менеджер по закупкам ",
    },
  ];
  let users = data2?.map((el) => (
    <div key={el.id} className="user">
      <div className="user_card"></div>
      <div className="user_img">
        <img src={el.url} alt="" />
        <div className="user_text">
          <h3>{el.title}</h3>
          <p>{el.categ}</p>
          <div className="tayoq"></div>
          <div className="seti">
            <img src={insta} alt="" />
            <img src={vk} alt="" />
            <img src={linked} alt="" />
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="continer">
      <div className="bus_card">
        <div className="bus_text">
          <h1>
            Поставщик Дальнего <br /> Востока
          </h1>
          <p>
            Наши клиенты получают полный спектр услуг по работе с Китаем. <br />
            Начиная с подбора производителя заканчивая доставкой товара до{" "}
            <br /> двери. Настолько прозрачных сделок с Китаем вы еще не
            осуществляли.
          </p>
          <a className="bus_a" href="">
            Узнать больше
          </a>
        </div>
        <div className="bus_img">
          <img className="bus" src={bus} alt="" />
        </div>
      </div>
      <div className="tovar">
        <div className="card_tovar">
          <div className="card_top">
            <img src={vector10} alt="" />
          </div>
          <h3>
            Поиск производителей <br /> по товару
          </h3>
          <p>
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, sed{" "}
            <br />
            do eiusmod incididunt ut.
          </p>
        </div>
        <div className="card_tovar">
          <div className="card_top">
            <img src={vector11} alt="" />
          </div>
          <h3>
            Поиск конкретного <br /> производителя
          </h3>
          <p>
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, sed{" "}
            <br />
            do eiusmod incididunt ut.
          </p>
        </div>
        <div className="card_tovar">
          <div className="card_top">
            <img src={Group} alt="" />
          </div>
          <h3>
            Доставка образцов <br /> товаров
          </h3>
          <p>
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, sed{" "}
            <br />
            do eiusmod incididunt ut.
          </p>
        </div>
      </div>
      <div className="cards">
        <h1>Выполненные работы</h1>
        <p>
          Мы собрали информацию по грузам, которые мы уже доставили. <br /> У
          нас специальный подход к каждому виду товаров.
        </p>
        <div className="cardlar">
          <div className="card">
            <img src={Rectange} alt="" />
            <div className="card_text">
              <h3>Станки и оборудование</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
                sed do eiusmod ut.
              </p>
              <a className="bus_a" href="">
                20 000 руб
              </a>
            </div>
          </div>
          <div className="card">
            <img src={Rectange1} alt="" />
            <div className="card_text">
              <h3>Компоненты и запчасти</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
                sed do eiusmod ut.
              </p>
              <a className="bus_a" href="">
                18 000 руб
              </a>
            </div>
          </div>
          <div className="card">
            <img src={Rectange2} alt="" />
            <div className="card_text">
              <h3>Станки и оборудование</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
                sed do eiusmod ut.
              </p>
              <a className="bus_a" href="">
                20 000 руб
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="etap">
        <h1>Этапы поставки </h1>
        <div className="etaps">
          <div className="etap_card">
            <img src={Rectange32} alt="" />
            <div className="etap_text">
              <h3>Предложение от продавца</h3>
              <div className="tayoq"></div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor <br /> incididunt ut labore et dolore magna
                aliqua. Elit duis tristique sollicitudin nibh sit <br /> amet.
                Ultrices eros in cursus turpis massa tincidunt. Venenatis urna
                cursus eget <br /> nunc scelerisque viverra mauris in.{" "}
              </p>
            </div>
          </div>
          <div className="etap_card">
            <img src={Rectange33} alt="" />
            <div className="etap_text">
              <h3>Доставка</h3>
              <div className="tayoq"></div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor <br /> incididunt ut labore et dolore magna
                aliqua. Elit duis tristique sollicitudin nibh sit <br /> amet.
                Ultrices eros in cursus turpis massa tincidunt. Venenatis urna
                cursus eget <br /> nunc scelerisque viverra mauris in.{" "}
              </p>
            </div>
          </div>
          <div className="etap_card">
            <img src={Rectange34} alt="" />
            <div className="etap_text">
              <h3>Установка у клиента</h3>
              <div className="tayoq"></div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor <br /> incididunt ut labore et dolore magna
                aliqua. Elit duis tristique sollicitudin nibh sit <br /> amet.
                Ultrices eros in cursus turpis massa tincidunt. Venenatis urna
                cursus eget <br /> nunc scelerisque viverra mauris in.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="homiy">
        <h1>Нам доверяют</h1>
        <div className="brends">{homiylar}</div>
      </div>
      <div className="users">
        <h1>Сотрудники компании</h1>
        <div className="user_flex">{users}</div>
      </div>
      <div className="bigbus">
        <img className="big" src={bigbus} alt="" />
      </div>
    </div>
  );
};

export default Main;
