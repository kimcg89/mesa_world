import "./Jukebox.css";

const Jukebox = () => {
  return (
    <div className="Jukebox_wrapper">
      <div className="Jukebox_wrapper__header">
        <div className="Jukebox_wrapper__title">
          <div className="title">추억의 BGM</div>
          <div className="subtitle">TODAY CHOICE</div>
        </div>
        <div className="divideLine"></div>
        <div className="albumWrapper">
          <div className="albumWrapper__item">
            <img
              className="album-thumbnail"
              src={process.env.PUBLIC_URL + '/image/jukebox01.png'}
              alt=""
            />
            <div className="album-songtitle">Y(Please Tell Me Why)</div>
            <div className="album-artist">프리스타일</div>
          </div>
          <div className="albumWrapper__item">
            <img
              className="album-thumbnail"
              src={process.env.PUBLIC_URL + '/image/jukebox02.png'}
              alt=""
            />
            <div className="album-songtitle">눈의 꽃</div>
            <div className="album-artist">박효신</div>
          </div>
          <div className="albumWrapper__item">
            <img
              className="album-thumbnail"
              src={process.env.PUBLIC_URL + '/image/jukebox03.png'}
              alt=""
            />
            <div className="album-songtitle">사랑했나봐</div>
            <div className="album-artist">윤도현</div>
          </div>
        </div>
      </div>
      <div className="Jukebox_wrapper__body">
        <div className="Jukebox_wrapper__title">
          <div className="title">추억의 BGM</div>
          <div className="subtitle">TODAY CHOICE</div>
        </div>
        <table className="albumTable">
          <tr>
            <th className="albumTable__checkbox">
              <input type="checkbox" />
            </th>
            <th className="albumTable__number">번호</th>
            <th className="albumTable__song">곡명</th>
            <th className="albumTable__artist">아티스트</th>
          </tr>
          <tr>
            <td className="album-table-checkbox">
              <input type="checkbox" />
            </td>
            <td className="album-table-number">1</td>
            <td className="album-table-song">눈의 꽃</td>
            <td className="album-table-artist">박효신</td>
          </tr>
          <tr>
            <td className="album-table-checkbox">
              <input type="checkbox" />
            </td>
            <td className="album-table-number">2</td>
            <td className="album-table-song">사랑스러워</td>
            <td className="album-table-artist">김종국</td>
          </tr>
          <tr>
            <td className="album-table-checkbox">
              <input type="checkbox" />
            </td>
            <td className="album-table-number">3</td>
            <td className="album-table-song">내사람:Partner For Lift</td>
            <td className="album-table-artist">SG 워너비</td>
          </tr>
          <tr>
            <td className="album-table-checkbox">
              <input type="checkbox" />
            </td>
            <td className="album-table-number">4</td>
            <td className="album-table-song">Love Love Love</td>
            <td className="album-table-artist">에픽하이</td>
          </tr>
          <tr>
            <td className="album-table-checkbox">
              <input type="checkbox" />
            </td>
            <td className="album-table-number">5</td>
            <td className="album-table-song">애인...있어요</td>
            <td className="album-table-artist">이은미</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Jukebox;
