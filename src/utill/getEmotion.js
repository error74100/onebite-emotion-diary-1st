import emotion1 from './../assets/img/emotion1.png';
import emotion2 from './../assets/img/emotion2.png';
import emotion3 from './../assets/img/emotion3.png';
import emotion4 from './../assets/img/emotion4.png';
import emotion5 from './../assets/img/emotion5.png';

export const getEmotion = (emotionId) => {
  switch (emotionId) {
    case 1:
      return `${emotion1}`;
    case 2:
      return `${emotion2}`;
    case 3:
      return `${emotion3}`;
    case 4:
      return `${emotion4}`;
    case 5:
      return `${emotion5}`;
    default:
      return `${emotion1}`;
  }
};

export const getEmotionDesc = (emotionId) => {
  switch (emotionId) {
    case 1:
      return '완전 좋음';
    case 2:
      return '좋음';
    case 3:
      return '그럭저럭';
    case 4:
      return '나쁨';
    case 5:
      return '끔찍함';
    default:
      return '완전 좋음';
  }
};
