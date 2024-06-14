import './DiaryView.css';
import { getEmotion, getEmotionDesc } from '../utill/getEmotion';
import { useEffect, useState } from 'react';

function DiaryView({ diary }) {
  const DEFAULT_HEIGHT = 100;
  const [textareaHeight, setTextareaHeight] = useState(DEFAULT_HEIGHT);

  useEffect(() => {
    const $target = document.querySelector('#textarea');

    setTextareaHeight($target.scrollHeight + 2);
  }, []);

  return (
    <div className="DiaryView">
      <div className="view_group">
        <h2>오늘의 감정</h2>
        <div className={`view_img emotion_type${diary.emotionId}`}>
          <img src={getEmotion(diary.emotionId)} alt="" />
          <p className="desc">{getEmotionDesc(diary.emotionId)}</p>
        </div>
      </div>

      <div className="view_group">
        <h2>오늘의 일기</h2>
        <textarea
          id="textarea"
          value={diary.content}
          className="view_content"
          readOnly
          style={{ height: `${textareaHeight}px` }}
        >
          {diary.content}
        </textarea>
      </div>
    </div>
  );
}

export default DiaryView;
