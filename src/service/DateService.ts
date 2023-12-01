export const convertDate = (dated: string) => {
  const dateParts = dated.split('-');

  const date = new Date(`${dateParts[1]}/${dateParts[0]}/${dateParts[2]}`);

  const now = new Date();

  const lastedDay = now.getDate() - date.getDate();
  const lastedHour = now.getHours() - date.getHours();
  const lastedMinutes = now.getMinutes() - date.getMinutes();
  const lastedSecond = now.getSeconds() - date.getSeconds();
  if (lastedDay > 7) {
    return `${
      date.getDay() <= 5 ? `Thứ ${date.getDay() + 1}` : 'Chủ Nhật'
    }, ${date.getDate()} tháng ${date.getMonth()}, ${date.getFullYear()}`;
  } else if (lastedDay > 0 && lastedDay < 7) {
    return `${lastedDay} ngày trước`;
  } else if (lastedHour > 0 && lastedHour < 24) {
    return `${lastedHour} giờ trước`;
  } else if (lastedMinutes > 0 && lastedMinutes < 60) {
    return `${lastedMinutes} phút trước`;
  } else if (lastedSecond > 0 && lastedSecond < 60) {
    return `${lastedSecond} giây trước`;
  }
};

export const convertDateToString = (dated: Date | string): string => {
  let newDate;
  let date;
  if (typeof dated === 'string') {
    const dateParts = dated.split('-');
    date = new Date(`${dateParts[1]}/${dateParts[0]}/${dateParts[2]}`);
  } else {
    date = dated;
  }
  newDate = new Date(date);
  return `${newDate.getDate()} Tháng ${
    newDate.getMonth() + 1
  }, ${newDate.getFullYear()}`;
};
