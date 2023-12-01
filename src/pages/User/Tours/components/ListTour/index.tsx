import Tour from '~/components/Tour';
import { Tour as TourInterface } from '~/types/entity';

type Props = {
  tours: TourInterface[];
};

const ListTour = (props: Props) => {
  return (
    <div className="grid  gap-10 p-8 mx-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
      {props.tours.map((tour) => (
        <div key={tour.id} className="flex justify-center">
          <Tour tour={tour} />
        </div>
      ))}
    </div>
  );
};

export default ListTour;
