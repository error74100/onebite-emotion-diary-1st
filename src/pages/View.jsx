import { useNavigate, useParams } from 'react-router-dom';
import Button from '../components/Button';
import DiaryView from '../components/DiaryView';
import Header from '../components/Header';
import { getDate } from '../utill/getDate';
import { useContext } from 'react';
import { DiaryContext } from '../App';
import NotFoundPage from './NotFoundPage';

function View() {
  const diary = useContext(DiaryContext);
  const nav = useNavigate();
  const param = useParams();
  let writeDate = null;

  const goBackEvent = () => {
    nav(-1);
  };

  const goEditEvent = () => {
    nav(`/edit/${param.id}`);
  };

  const filteredData = diary.find(
    (item) => Number(item.id) === Number(param.id)
  );

  if (filteredData != null || filteredData != undefined) {
    writeDate = getDate(filteredData.date);
  } else {
    return <NotFoundPage />;
  }

  return (
    <>
      <Header
        leftchild={<Button text={'< 뒤로가기'} onClickEvent={goBackEvent} />}
        title={`${writeDate} 기록`}
        rightchild={
          <Button text={'수정하기'} onClickEvent={goEditEvent} buttonType={1} />
        }
      />
      <DiaryView diary={filteredData} />
    </>
  );
}

export default View;
