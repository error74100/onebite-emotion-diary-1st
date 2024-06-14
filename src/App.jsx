import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Write from './pages/Write';
import View from './pages/View';
import Edit from './pages/Edit';
import NotFoundPage from './pages/NotFoundPage';
import { createContext, useEffect, useReducer, useRef, useState } from 'react';

// const mockData = [
//   {
//     id: 1,
//     emotionId: 1,
//     date: new Date('2024-5-1').getTime(),
//     content: '1 aasdf asdfsadf assdfefd 111',
//   },

//   {
//     id: 2,
//     emotionId: 2,
//     date: new Date('2024-5-20').getTime(),
//     content: '2 aasdf asdfsadf assdfefd 111',
//   },
//   {
//     id: 3,
//     emotionId: 3,
//     date: new Date('2024-6-10').getTime(),
//     content: '3 aasdf asdfsadf assdfefd 111',
//   },
//   {
//     id: 4,
//     emotionId: 4,
//     date: new Date('2024-06-11').getTime(),
//     content: '4 aasdf asdfsadf assdfefd 111',
//   },
//   {
//     id: 5,
//     emotionId: 5,
//     date: new Date('2024-07-21').getTime(),
//     content: '5 aasdf asdfsadf assdfefd 111',
//   },
// ];

function reducer(state, action) {
  let newState = [];

  switch (action.type) {
    case 'INIT':
      newState = action.data;
      break;
    case 'CREATE':
      {
        newState = [action.data, ...state];
      }
      break;
    case 'UPDATE': {
      newState = state.map((item) =>
        Number(item.id) === Number(action.data.id)
          ? {
              ...action.data,
            }
          : item
      );
      break;
    }
    case 'DELETE':
      newState = state.filter((item) => Number(item.id) !== Number(action.id));
      break;
    default:
      return state;
  }

  localStorage.setItem('diary', JSON.stringify(newState));

  return newState;
}

export const DiaryContext = createContext();
export const ActionContext = createContext();

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [diary, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);

  useEffect(() => {
    const initDiary = JSON.parse(localStorage.getItem('diary'));

    if (!initDiary) {
      setIsLoading(false);
      return;
    }

    dispatch({
      type: 'INIT',
      data: initDiary,
    });

    let maxId = 0;

    initDiary.forEach((item) => {
      if (item.id > maxId) {
        maxId = item.id;
      }
    });

    idRef.current = maxId + 1;
  }, []);

  const onCreate = ({ emotionId, date, content }) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        emotionId: emotionId,
        date: date,
        content: content,
      },
    });
  };

  const onUpdate = ({ id, emotionId, date, content }) => {
    dispatch({
      type: 'UPDATE',
      data: {
        id: id,
        emotionId: emotionId,
        date: date,
        content: content,
      },
    });
  };

  const onDelete = (id) => {
    dispatch({
      type: 'DELETE',
      id: id,
    });
  };

  return (
    <DiaryContext.Provider value={diary}>
      <ActionContext.Provider value={{ onCreate, onUpdate, onDelete }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/write" element={<Write />} />
          <Route path="/view/:id" element={<View />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ActionContext.Provider>
    </DiaryContext.Provider>
  );
}

export default App;
