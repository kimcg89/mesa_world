import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="App">
        <div className="Home_wrapper">
          <div className="Home_wrapper__header">
            <div className="content__title">
              <div className="title">Updated news</div>
              <div className="subtitle">TODAY STORY</div>
            </div>
            <div className="divideLine"></div>
            <div className="content__body">오늘의 기분 너무 좋음</div>
          </div>
          <div className="Home_wrapper__body">
            <div className="content__title">
              <div className="title">Mini Room</div>
              <div className="subtitle">Introduce your self</div>
            </div>
            <div className="video__body"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
