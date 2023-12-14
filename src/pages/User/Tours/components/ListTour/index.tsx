import { useAppSelector } from '~/app/hook';
import Tour from '~/components/Tour';

const ListTour = () => {
  const tours = useAppSelector((state) => state.tour);

  return (
    <div className="grid  gap-10 p-8 mx-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
      {tours.datas.map((tour) => (
        <div key={tour.id} className="flex justify-center">
          <Tour tour={tour} />
        </div>
      ))}
    </div>
  );
};

export default ListTour;
