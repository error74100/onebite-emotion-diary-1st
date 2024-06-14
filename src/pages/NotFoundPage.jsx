import { useNavigate } from 'react-router-dom';

function NotFoundPage() {
  const nav = useNavigate();

  const goHomeEvent = () => {
    nav('/');
  };

  return (
    <div className="NotFoundPage">
      <p className="img">
        <img src="/img/404_image.png" alt="" />
      </p>
      <p className="tit">페이지를 찾을 수 없습니다.</p>
      <p>페이지가 존재하지 않거나, 사용할 수 없는 페이지입니다.</p>
      <p>입력하신 주소가 정확한지 다시 한 번 확인해주세요.</p>
      <div className="btn_wrap">
        <button
          type="text"
          className="btn emotion_type_1"
          onClick={goHomeEvent}
        >
          홈으로 가기
        </button>
      </div>
    </div>
  );
}

export default NotFoundPage;
