export const CurrencyVND = (money: number) => {
  return money.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
};

export const convertNumber = (number: number) => {
  if (number > 1000000000) {
    return `${(number / 1000000000).toFixed(1)} tỷ`;
  } else if (number > 1000000) {
    return `${(number / 1000000).toFixed(1)} triệu`;
  } else if (number > 1000) {
    return `${(number / 1000).toFixed(1)} nghìn`;
  } else {
    return `${number}`;
  }
};
