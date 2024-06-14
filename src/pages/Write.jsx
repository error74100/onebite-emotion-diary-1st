import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Header from '../components/Header';
import DiaryWrite from '../components/DiaryWrite';

function Write() {
  const nav = useNavigate();

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
        title={'새 일기 쓰기'}
      />
      <DiaryWrite />
    </>
  );
}

export default Write;
