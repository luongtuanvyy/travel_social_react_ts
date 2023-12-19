import { useEffect, useState } from 'react';
import { VietNamLocationApi } from '~/api/VietNamLocationApi';
import { Place } from '~/assets/svg';
import { AddressService } from '~/service/AddressService';
import { VietNamLocation } from '~/types/api';

const SelectLocation = (props: {
  handleAddress: (address: string) => void;
}) => {
  const [location, setLocation] = useState<VietNamLocation[]>([]);

  useEffect(() => {
    const fecthLocation = async () => {
      await VietNamLocationApi.getAll()
        .then((response) => {
          setLocation(response);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fecthLocation();
  }, []);

  return (
    <div className="flex items-center relative">
      <select
        onChange={(e) => {
          props.handleAddress(e.target.value);
        }}
        defaultValue={0}
        id="countries"
        className="bg-white border pl-10 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value={0}>Chọn thành phố</option>
        {location.map((item, index) => (
          <option key={index} value={AddressService(item.name)} className="p-1">
            {item.name}
          </option>
        ))}
      </select>
      <div className="text-gray-600 absolute">
        <Place />
      </div>
    </div>
  );
};

export default SelectLocation;
