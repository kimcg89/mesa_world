import React, { useRef, useState } from "react";
import "./Game.css";

const Game = () => {

  const [currentWord, setCurrentWord] = useState("매사");
  const [result, setResult] = useState("");
  const [lottoNumbers, setLottoNumbers] = useState([0, 0, 0, 0, 0, 0]); // 초기 로또 번호 상태
  const inputRef = useRef(null);

  const startWord = () => {
    const myword = inputRef.current.value;
    const lastword = currentWord[currentWord.length - 1];
    const firstword = myword[0];

    if (lastword === firstword) {
      setResult("정답입니다!");
      setCurrentWord(myword); // 정답일 경우 제시어를 새로운 단어로 변경
    } else {
      setResult("땡!");
    }
    inputRef.current.value = "";
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      startWord();
    }
  };

  const generateLottoNumbers = () => {
    const numbers = [];
    while (numbers.length < 6) {
      const num = Math.floor(Math.random() * 45) + 1;
      if (!numbers.includes(num)) {
        numbers.push(num);
      }
    }
    setLottoNumbers(numbers.sort((a, b) => a - b)); // 번호 정렬 후 상태 업데이트
  };


  return (
    <div className="Game_wrapper">
      <div className="Game_wrapper__header">
        <div className="header__title">
          <div className="title">Game</div>
          <div className="subtitle">TODAY CHOICE</div>
        </div>
        <div className="divideLine"></div>
      </div>
      <div className="game__container">
        <img src={process.env.PUBLIC_URL + "/image/word.png"} alt="" />
        <div className="game__title">끝말잇기</div>
        <div className="game__subtitle">
          {/* 제시어 : <span id="word">뉴비즈코드</span> */}
          제시어 : <span id="word">{currentWord}</span> {/* currentWord 상태를 표시 */}
        </div>
        <div className="word__text">
          {/* <input className="textbox" id="myword" placeholder="단어를 입력하세요." /> */}
          <input 
            className="textbox" 
            ref={inputRef}
            placeholder="단어를 입력하세요." 
            // 엔터 누를시에도 동작 추가
            onKeyDown={handleKeyDown}
          />
          {/* <button className="search" onclick="startWord()"> */}
          <button className="search" onClick={startWord}>
            검색
          </button>
        </div>
        <div id="result" className="word__result">
          {/* 결과! */}
          {result}
        </div>
      </div>
      <div className="game__container">
        <img src={process.env.PUBLIC_URL + "/image/lotto.png"} alt="" />
        <div className="game__title">LOTTO</div>
        <div className="game__subtitle">버튼을 누르세요</div>
        <div className="game__lotto__number">
          {lottoNumbers.map((num, index) => (
            <span key={index}>{num}</span>
          ))}
        </div>
        <button className="game__lotto__button" onClick={generateLottoNumbers}>
          추천
        </button>
      </div>
    </div>
  );
}

export default Game;
