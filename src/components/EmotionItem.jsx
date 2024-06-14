

function EmotionItem({ isActive, emotionId, text }) {
  return (
    <li className={isActive ? 'active' : }>
      <img src={getEmotion(emotionId)} alt="" />
      <p>{text}</p>
    </li>
  );
}

export default EmotionItem;
