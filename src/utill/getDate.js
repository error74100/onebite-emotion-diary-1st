export const getDate = (data) => {
  const currentDate = new Date(data);
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();

  // 날짜와 시간을 문자열로 포맷팅 (YYYY-MM-DD)
  const formattedDate = `${year}-${String(month).padStart(2, '0')}-${String(
    day
  ).padStart(2, '0')}`;

  return formattedDate;
};
