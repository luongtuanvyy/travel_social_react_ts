import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect } from 'react';
import { SubmitHandler, set, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import * as yup from 'yup';
import { TourApi } from '~/api/TourApi';
import { useAppDispatch, useAppSelector } from '~/app/hook';
import { Edit, Plane, UserIcon } from '~/assets/svg';
import StarArray from '~/components/Star';
import { convertDateToString, getAge } from '~/service/DateService';
import { Tour } from '~/types/entity';
import { BookingPerson } from '~/types/form';
import Price from '../../components/Price';
import Member from '../../components/Member';
import { BookingActions } from '~/slice/BookingSlice';
import ModalMember from '../../components/ModalMember';

const schema = yup
  .object({
    description: yup.string(),
  })
  .required();

const Information = () => {
  const user = useAppSelector((state) => state.auth.user);
  const [modalMember, setModalMember] = React.useState(false);
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const [tour, setTour] = React.useState<Tour>();

  const initMember = user
    ? [
        {
          name: user.name,
          age: getAge(user.birthday),
          gender: user.gender,
        },
      ]
    : [];
  const [member, setMember] = React.useState<BookingPerson[]>(initMember);

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      description: useAppSelector((state) => state.booking.value.desciption),
    },
  });

  const setMemberData = (data: BookingPerson) => {
    setMember([...member, data]);
  };

  const onModalMember = (value: boolean) => {
    setModalMember(value);
  };

  const onSubmit = (data?: { description: string }) => {
    if (data) {
      dispatch(BookingActions.addDescription(data.description));
    }
  };

  const setDeleteMember = (index: number) => {
    const newMember = [...member];
    newMember.splice(index, 1);
    setMember(newMember);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        await TourApi.getTourById(parseInt(id) ?? 8)
          .then((response) => {
            setTour(response.data.data.datas[0]);
            console.log(response.data.data.datas[0]);
          })
          .catch((err) => console.log(err));
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    dispatch(BookingActions.addMember(member));
  }, [member]);

  return (
    <>
      {tour && (
        <div className="shadow-md col-span-2 bg-white p-4 border rounded-lg">
          <div className="flex shadow space-x-4 rounded-lg border p-4">
            <img
              className="h-40 w-40 object-cover rounded-lg"
              src={tour.image}
              alt=""
            />
            <div className="grow flex flex-col">
              <div>
                <p className="text-third font-medium ">Lựa chọn của bạn</p>
                <p className="text-lg font-medium">{tour.name}</p>
              </div>
              <div className="grow flex items-end space-x-2 py-5">
                <StarArray star={Math.round(4.3)} size={20} />
                <span className="text-sm font-medium">4.3</span>
                <span className="text-xs font-medium text-gray-400">
                  202 đánh giá
                </span>
              </div>
              <div className="flex justify-between w-full pr-4">
                <div>
                  <p className="text-sm mb-2 text-gray-400 font-medium">
                    Phương tiện
                  </p>
                  <p className="text-sm font-medium flex space-x-2">
                    <span>{tour?.vehicle}</span>
                    <span className="text-gray-500">
                      {/* <Bus /> */}
                      <Plane />
                    </span>
                  </p>
                </div>
                <div>
                  <p className="text-sm mb-2 text-gray-400 font-medium">
                    Vị trí trống
                  </p>
                  <p className="text-sm font-medium flex space-x-2">
                    <span>{tour.size - tour.registered}</span>
                    <span className="text-gray-500">
                      <UserIcon size={20} />
                    </span>
                  </p>
                </div>
                <div>
                  <p className="text-sm mb-2 text-gray-400 font-medium">
                    Thời gian đi
                  </p>
                  <p className="text-sm font-medium flex space-x-2">
                    {convertDateToString(tour.startDate)}
                  </p>
                </div>
                <div>
                  <p className="text-sm mb-2 text-gray-400 font-medium">
                    Thời gian về
                  </p>
                  <p className="text-sm font-medium flex space-x-2">
                    {convertDateToString(tour.endDate)}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Price adult={tour.adult} baby={tour.baby} children={tour.children} />

          <Member
            member={member}
            onModalMember={onModalMember}
            deleteMember={setDeleteMember}
          />

          <div className="mt-4 rounded-lg border p-4 shadow-lg">
            <p className="text-lg font-medium mb-4">Chú thích cho chuyến đi</p>
            <div className="w-full border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
              <div className="px-4 py-2 bg-white rounded-lg dark:bg-gray-800">
                <label htmlFor="comment" className="sr-only">
                  Nội dung
                </label>
                <textarea
                  id="comment"
                  rows={4}
                  {...register('description')}
                  className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                  placeholder="Nội dung..."
                  required
                />
              </div>
            </div>
            <button
              onClick={handleSubmit(
                onSubmit as SubmitHandler<{ description?: string | undefined }>,
              )}
              className="py-1.5 px-5 bg-secondary text-white rounded-lg mt-3"
            >
              Lưu
            </button>
          </div>

          <div
            className={`${
              modalMember ? 'fixed' : 'hidden'
            } top-0 right-0 left-0 bottom-0 z-50 justify-center items-center w-full h-screen bg-gray-900/50`}
          >
            <ModalMember
              onModalMember={onModalMember}
              setMemberData={setMemberData}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Information;
