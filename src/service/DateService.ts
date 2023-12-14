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

export const calculateDaysAndNights = (date1: string, date2: string) => {
  const dateParts1 = date1.split('-');
  const dateParts2 = date1.split('-');
  const stamp1 = new Date(`${dateParts1[1]}/${dateParts1[0]}/${dateParts1[2]}`);
  const stamp2 = new Date(`${dateParts2[1]}/${dateParts2[0]}/${dateParts2[2]}`);
  const oneDay = 1000 * 60 * 60 * 24;
  const diff = stamp2.getTime() - stamp1.getTime();

  const days = Math.floor(diff / oneDay);

  const nights = days - 1;

  return nights > 0 ? `${days} ngày ${nights} đêm` : `${days} ngày`;
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

export const convertDateToFullString = (dated: Date | string): string => {
  let newDate;
  let date;
  if (typeof dated === 'string') {
    const dateParts = dated.split('-');
    date = new Date(`${dateParts[1]}/${dateParts[0]}/${dateParts[2]}`);
  } else {
    date = dated;
  }
  newDate = new Date(date);
  return `${
    date.getDay() <= 5 ? `Thứ ${date.getDay() + 1}` : 'Chủ Nhật'
  }, ${newDate.getDate()} Tháng ${
    newDate.getMonth() + 1
  }, ${newDate.getFullYear()}`;
};

export const convertTimeToString = (dated: Date | string): string => {
  let newDate;
  let date;
  if (typeof dated === 'string') {
    const dateParts = dated.split('-');
    date = new Date(`${dateParts[1]}/${dateParts[0]}/${dateParts[2]}`);
  } else {
    date = dated;
  }
  newDate = new Date(date);
  return `${newDate.getHours()}:${newDate.getMinutes()}`;
};

export const getAgeBefore = (age: number): string => {
  const now = new Date();
  return `ngày ${now.getDay()} tháng ${now.getMonth()} năm ${
    now.getFullYear() - age
  }`;
};

export const getAge = (date: string) => {
  const dateParts = date.split('-');
  const birthDate = new Date(`${dateParts[1]}/${dateParts[0]}/${dateParts[2]}`);
  const now = new Date();
  const diff = now.getTime() - birthDate.getTime();
  const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
  return age;
};
