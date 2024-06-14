import { useNavigate, useParams } from 'react-router-dom';
import Button from '../components/Button';
import Header from '../components/Header';
import DiaryEdit from '../components/DiaryEdit';
import { DiaryContext } from '../App';
import { useContext } from 'react';
import { ActionContext } from '../App';
import NotFoundPage from './NotFoundPage';

function Edit() {
  const { onDelete } = useContext(ActionContext);
  const diary = useContext(DiaryContext);
  const nav = useNavigate();
  const param = useParams();

  const filteredData = diary.find(
    (item) => Number(item.id) === Number(param.id)
  );

  if (filteredData == null || filteredData == undefined) {
    return <NotFoundPage />;
  }

  const deleteEvent = () => {
    if (confirm('삭제 하시겠습니까?')) {
      onDelete(param.id);

      alert('삭제 되었습니다.');
      nav('/', { replace: true });
    }
  };

  return (
    <>
      <Header
        leftchild={
          <Button
            text={'< 뒤로가기'}
            onClickEvent={() => {
              nav(-1);
            }}
          />
        }
        title={'일기 수정하기'}
        rightchild={
          <Button text={'삭제하기'} buttonType={5} onClickEvent={deleteEvent} />
        }
      />

      <DiaryEdit diary={filteredData} />
    </>
  );
}

export default Edit;
