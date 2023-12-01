import DonutChart from '../Chart';

const Content = () => {
  return (
    <main className="p-4 ml-20 h-auto pt-4 bg-black">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        <div className=" bg-stone-800 border-gray-300 rounded-lg dark:border-gray-600 h-80 py-4 px-6 flex flex-col">
          <p className="text-black font-medium text-xl mb-4">Tổng quan</p>
          <div className="flex flex-col justify-evenly grow">
            <div className="flex justify-between py-3 px-5 bg-third rounded-xl">
              <p className="font-medium">Đồi núi</p>
              <p>23.532</p>
            </div>
            <div className="flex justify-between py-3 px-5 bg-third rounded-xl">
              <p className="font-medium">Đồi núi</p>
              <p>23.532</p>
            </div>
            <div className="flex justify-between py-3 px-5 bg-third rounded-xl">
              <p className="font-medium">Đồi núi</p>
              <p>23.532</p>
            </div>
            <div className="flex justify-between py-3 px-5 bg-third rounded-xl">
              <p className="font-medium">Đồi núi</p>
              <p>23.532</p>
            </div>
          </div>
        </div>
        <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-80">
          <DonutChart />
        </div>
        <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-72"></div>
      </div>
      <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-96 mb-4"></div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
        <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
        <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
        <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
      </div>
      <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-96 mb-4"></div>
      <div className="grid grid-cols-2 gap-4">
        <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
        <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
        <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
        <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
      </div>
    </main>
  );
};

export default Content;
