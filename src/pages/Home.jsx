import Button from './../components/Button';
import DiaryList from './../components/DiaryList';
import Header from './../components/Header';
import { useContext, useState } from 'react';
import { DiaryContext } from '../App';

const getMonthlyData = (diary, standardDate) => {
  const beginDate = new Date(
    standardDate.getFullYear(),
    standardDate.getMonth(),
    1,
    0,
    0,
    0
  );
  const endDate = new Date(
    standardDate.getFullYear(),
    standardDate.getMonth() + 1,
    0,
    23,
    59,
    59
  );

  const data = diary.filter(
    (item) => beginDate.getTime() <= item.date && item.date <= endDate.getTime()
  );

  return data;
};

function Home() {
  const diary = useContext(DiaryContext);
  const [standardDate, setStandardDate] = useState(new Date());

  const prevMonthEvent = () => {
    setStandardDate(
      new Date(standardDate.getFullYear(), standardDate.getMonth() - 1)
    );
  };

  const nextMonthEvent = () => {
    setStandardDate(
      new Date(standardDate.getFullYear(), standardDate.getMonth() + 1)
    );
  };

  const filteredData = getMonthlyData(diary, standardDate);

  return (
    <>
      <Header
        leftchild={<Button text={'<'} onClickEvent={prevMonthEvent} />}
        title={`${standardDate.getFullYear()}년 ${
          standardDate.getMonth() + 1
        }월`}
        rightchild={<Button text={'>'} onClickEvent={nextMonthEvent} />}
      />
      <DiaryList diary={filteredData} />
    </>
  );
}

export default Home;
