import { useContext, useEffect, useRef, useState } from 'react';
import Button from './Button';
import './DiaryWrite.css';
import { getEmotion, getEmotionDesc } from '../utill/getEmotion';
import { getDate } from '../utill/getDate';
import { useNavigate } from 'react-router-dom';
import { ActionContext } from '../App';

function DiaryWrite() {
  const { onCreate } = useContext(ActionContext);
  const [date, setDate] = useState(getDate(new Date().getTime()));
  const [content, setContent] = useState('');
  const [emotionId, setSelectEmotionId] = useState(3);
  const nav = useNavigate();
  const contentRef = useRef();

  useEffect(() => {
    const items = document.querySelectorAll('.emotion_wrap ul li');

    items[emotionId - 1].classList.add('active');
  }, [emotionId]);

  const dateChangeEvent = (e) => {
    setDate(e.target.value);
  };

  const emotionClickEvent = (id) => {
    const items = document.querySelectorAll('.emotion_wrap ul li');

    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove('active');
    }

    items[id - 1].classList.add('active');
    setSelectEmotionId(id);
  };

  const contentChangeEvent = (e) => {
    setContent(e.target.value);
  };

  const cancleEvent = () => {
    if (confirm('취소 하시겠습니까?')) {
      nav('/');
    }
  };

  const saveEvent = () => {
    if (content === '') {
      alert('일기내용을 입력해주세요.');
      contentRef.current.focus();
      return;
    }

    if (confirm('저장 하시겠습니까?')) {
      const newItem = [
        {
          emotionId: emotionId,
          date: new Date(date).getTime(),
          content: content,
        },
      ];

      onCreate(...newItem);
      alert('저장이 완료되었습니다.');
      nav('/', { replace: true });
    }
  };

  return (
    <div className="DiaryWrite">
      <div className="form_wrap">
        <h2>오늘의 날짜</h2>
        <div>
          <input type="date" value={date} onChange={dateChangeEvent} />
        </div>
      </div>
      <div className="form_wrap">
        <h2>오늘의 감정</h2>
        <div className="emotion_wrap">
          <ul>
            <li
              onClick={() => {
                emotionClickEvent(1);
              }}
            >
              <img src={getEmotion(1)} alt="" />
              <p>{getEmotionDesc(1)}</p>
            </li>
            <li
              onClick={() => {
                emotionClickEvent(2);
              }}
            >
              <img src={getEmotion(2)} alt="" />
              <p>{getEmotionDesc(2)}</p>
            </li>
            <li
              onClick={() => {
                emotionClickEvent(3);
              }}
            >
              <img src={getEmotion(3)} alt="" />
              <p>{getEmotionDesc(3)}</p>
            </li>
            <li
              onClick={() => {
                emotionClickEvent(4);
              }}
            >
              <img src={getEmotion(4)} alt="" />
              <p>{getEmotionDesc(4)}</p>
            </li>
            <li
              onClick={() => {
                emotionClickEvent(5);
              }}
            >
              <img src={getEmotion(5)} alt="" />
              <p>{getEmotionDesc(5)}</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="form_wrap">
        <h2>오늘의 일기</h2>
        <div>
          <textarea
            value={content}
            ref={contentRef}
            onChange={contentChangeEvent}
            placeholder="오늘은 어땠나요?"
          ></textarea>
        </div>
      </div>
      <div className="bottom_btn">
        <Button text={'취소하기'} onClickEvent={cancleEvent} />
        <Button text={'작성완료'} onClickEvent={saveEvent} buttonType={1} />
      </div>
    </div>
  );
}

export default DiaryWrite;
