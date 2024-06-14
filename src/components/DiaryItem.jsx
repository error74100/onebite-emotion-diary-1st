import Button from './Button';
import './DiaryItem.css';
import { getEmotion } from '../utill/getEmotion';
import { Link, useNavigate } from 'react-router-dom';

function DiaryItem({ id, emotionId, date, content }) {
  const nav = useNavigate();

  const onEditBtn = () => {
    nav(`/edit/${id}`);
  };

  return (
    <div className="DiaryItem">
      <div className="diary_group">
        <div className={`img emotion_${emotionId}`}>
          <Link to={`/view/${id}`}>
            <img src={`${getEmotion(emotionId)}`} alt="" />
          </Link>
        </div>

        <div className="content">
          <Link to={`/view/${id}`}>
            <b>{new Date(date).toLocaleDateString()}</b>
            <p className="ellipsis">{content}</p>
          </Link>
        </div>

        <div className="button">
          <Button text={'수정하기'} onClickEvent={onEditBtn} />
        </div>
      </div>
    </div>
  );
}

export default DiaryItem;
