import "./Index.css";
import Home from "../Home/Home";
import Jukebox from "../Jukebox/Jukebox";
import Game from "../Game/Game";
import { useState } from "react";

const Index = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  const getMenuStyle = (page) => {
    return currentPage === page
      ? { color: "black", backgroundColor: "white" }
      : { color: "white", backgroundColor: "#2982b5" };
  };
  return (
    <div className="background">
      <div className="outerbox">
        <div className="wrapper">
          <div className="wrapper__left">
            <div className="wrapper__left__header">
              <div className="today">
                <span>TODAY</span>
                <span>0</span>
                <span> | TOTAL</span>
                <span>12345</span>
              </div>
            </div>
            <div className="wrapper__left__body">
              <div className="wrapper__left__body__header">
                <div className="left__body__header__gray"></div>
                <div className="left__body__header__line"></div>
              </div>
              <div className="left__body__profile">
                <div className="profile__detail">
                  <i className="fa-regular fa-face-laugh-wink"></i>
                  홍길동
                </div>
                <div className="profile__detail">
                  <i className="fa-solid fa-phone"></i>
                  010-1234-5678
                </div>
                <div className="profile__detail">
                  <i className="fa-solid fa-envelope"></i>
                  hdhong@mesa.kr
                </div>
                <div className="profile__detail">
                  <i className="fa-solid fa-star"></i>
                  인스타그램
                </div>
              </div>
              <div className="left__body__footer">
                <div className="wrapper__feel">
                  <div className="feel__title">오늘의 기분</div>
                  <select className="feel__select">
                    <option value="">기쁨 😊</option>
                    <option value="">슬픔 😂</option>
                    <option value="">화남 😤</option>
                    <option value="">분노 😡</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="wrapper__right">
            <div className="wrapper__right__header">
              <div className="right__header__title">
                사이좋은 사람들, MESA World
              </div>
              <div className="right__header__setting">
                사생활보호설정
                <i className="fa-solid fa-caret-right"></i>
              </div>
            </div>
            <div className="wrapper__right__body">
              {currentPage === "home" && <Home />}
              {currentPage === "jukebox" && <Jukebox />}
              {currentPage === "game" && <Game />}
            </div>
          </div>
          <div className="navigation">
            <div
              className="navigation__item"
              id="menuHome"
              onClick={() => handleNavigation("home")}
              style={getMenuStyle("home")} // 선택 배경 추가
            >
              홈
            </div>
            <div
              className="navigation__item"
              id="menuJukebox"
              onClick={() => handleNavigation("jukebox")}
              style={getMenuStyle("jukebox")} // 선택 배경 추가
            >
              쥬크박스
            </div>
            <div
              className="navigation__item"
              id="menuGame"
              onClick={() => handleNavigation("game")}
              style={getMenuStyle("game")} // 선택 배경 추가
            >
              게임
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
