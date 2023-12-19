export const AddressService = (address: string) => {
  if (address.startsWith('Thành phố')) return address.substring(10);
  if (address.startsWith('Tỉnh')) return address.substring(5);
};
