import { initDropdowns } from 'flowbite';
import { useAppSelector } from '~/app/hook';
import SelectLocation from '~/components/SelectLocation';


const FilterPlace = () => {
  initDropdowns;
  const places = useAppSelector((state) => state.places);

  return (
    <section className="bg-gray-50 dark:bg-gray-900 flex items-center">
      <div className="px-8 mx-auto w-full">
        <div className="relative bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
          <div className="flex flex-col items-center justify-between p-4 space-y-3 md:flex-row md:space-y-0 md:space-x-4">
            <div className="w-fit flex space-x-5">
              <form className="flex items-center">
                <label htmlFor="simple-search" className="sr-only">
                  Tìm kiếm tên
                </label>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="simple-search"
                    className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Tìm kiếm tên..."
                    required
                  />
                </div>
              </form>
              <SelectLocation />
            </div>
            <div className="flex flex-col items-center justify-end flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:space-y-0 md:items-center md:space-x-3">
              <p className="font-medium text-sm">
                Tổng : {places.totalItems} kết quả
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterPlace;
