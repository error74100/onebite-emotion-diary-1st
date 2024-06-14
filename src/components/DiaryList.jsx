import { useNavigate } from 'react-router-dom';
import Button from './Button';
import DiaryItem from './DiaryItem';
import './DiaryList.css';
import { useState } from 'react';

function DiaryList({ diary }) {
  const nav = useNavigate();
  const [order, setOrder] = useState('latest');

  const goCreateEvent = () => {
    nav('/write');
  };

  const selectEvent = (e) => {
    setOrder(e.target.value);
  };

  const getSortedData = () => {
    if (order === 'oldest') {
      return diary.sort((a, b) => Number(a.date) - Number(b.date));
    } else {
      return diary.sort((a, b) => Number(b.date) - Number(a.date));
    }
  };

  const filteredData = getSortedData();

  const localStorageDeleteEvent = () => {
    console.log(11);
  };

  return (
    <div className="DiaryList">
      <div className="write_wrap">
        <select value={order} onChange={selectEvent}>
          <option value="latest">최신순</option>
          <option value="oldest">오래된순</option>
        </select>

        <Button
          text={'새 일기쓰기'}
          buttonType={1}
          onClickEvent={goCreateEvent}
        />
      </div>

      {diary.map((item) => {
        return <DiaryItem key={item.id} {...item} />;
      })}
    </div>
  );
}

export default DiaryList;
