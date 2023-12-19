import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserApi } from '~/api/UserApi';
import { useAppSelector } from '~/app/hook';
import { RootState } from '~/app/store';
import { Close } from '~/assets/svg';
import FilterAdmin from '~/components/Admin/Filter';
import Pagination from '~/components/Pagination';
import { StateApiResponse } from '~/types/api';
import { User } from '~/types/entity';
import Table, { modalReturn } from './components/Table';

export type PropsTable = {
  onShowModal: (value: boolean, user?: modalReturn) => void;
  onSelecteDelete: (id: number) => void;
  listUser: User[] | undefined;
  handleModalEdit: (value: boolean, user?: User) => void;
};

const UserAdmin = () => {
  const [modalDelete, setModelDelete] = useState(false);
  const [modalEdit, setModelEdit] = useState(false);
  const user = useAppSelector((state: RootState) => state.auth.user);
  const [selectedDelete, setSelectedDelete] = useState<number[]>([]);
  const [userDelete, setUserDelete] = useState<modalReturn>();
  const [stateResponse, setStateResponse] =
    useState<StateApiResponse<User[]>>();
  const navigate = useNavigate();
  const location = useLocation();

  const [page, setPage] = useState<number>((): number => {
    let pageURL = parseInt(
      new URLSearchParams(location.search).get('page') ?? '1',
    );
    if (pageURL < 1 || !pageURL) {
      pageURL = 1;
      console.log(pageURL);
      // navigate(`/admin/users?page=${pageURL}`);
    }
    return pageURL;
  });

  const onShowModal = (value: boolean, user?: modalReturn) => {
    setModelDelete(value);
    setUserDelete(user);
  };

  const handelModalEdit = (value: boolean) => {
    setModelEdit(value);
  };

  const handleSelectDelete = (id: number) => {
    if (selectedDelete.includes(id)) {
      setSelectedDelete(selectedDelete.filter((item) => item !== id));
    } else {
      setSelectedDelete([...selectedDelete, id]);
    }
  };

  const handlePage = (currentPage: number) => {
    setPage(currentPage);
  };

  useEffect(() => {
    const fetchUser = async () => {
      await UserApi.getUser({ page, pageSize: 8 }).then((response) => {
        setStateResponse(response.data.data);
      });
    };
    fetchUser();
    navigate({ pathname: location.pathname, search: `?page=${page}` });
  }, [location.search, page]);

  return (
    <div className="flex flex-col bg-black relative">
      <FilterAdmin />
      <div className="grow">
        <Table
          onSelecteDelete={handleSelectDelete}
          listUser={stateResponse?.datas}
          onShowModal={onShowModal}
          handleModalEdit={handelModalEdit}
        />
      </div>
      <Pagination
        pageCount={stateResponse?.totalPage}
        handlePage={handlePage}
        currentPage={page}
      />
      <div
        className={`fixed ${
          modalDelete ? 'flex' : 'hidden'
        } top-0 right-0 left-0 bottom-0 z-50 bg-gray-900/75 justify-center items-center `}
      >
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 w-96">
          <button
            type="button"
            onClick={() => onShowModal(false)}
            className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
          <div className="p-4 md:p-5 text-center">
            <svg
              className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <h3 className="text-md font-normal text-gray-500 dark:text-gray-400">
              Bạn muốn xóa người dùng{' '}
              <span className="font-medium">{userDelete?.name}</span> ?
            </h3>
            <p className="text-xs mb-5 text-red-500 dark:text-gray-400">
              Lưu ý: Hành động này không thể hoàn tác{' '}
            </p>
            <button
              type="button"
              onClick={() => setModelDelete(false)}
              className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2"
            >
              Xác nhận
            </button>
            <button
              type="button"
              onClick={() => setModelDelete(false)}
              className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            >
              Hủy
            </button>
          </div>
        </div>
      </div>

      <div
        className={`absolute ${
          modalEdit ? 'flex' : 'hidden'
        } top-0 left-0 right-0 bottom-0 bg-gray-900/75 z-50  justify-center items-center`}
      >
        <div className="w-1/2 bg-white rounded-xl p-4 space-y-2">
          <div className="w-full text-end">
            <button onClick={() => handelModalEdit(false)}>
              <Close />
            </button>
          </div>
          <form action="">
            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <img
                  className="w-20 h-20 rounded-full"
                  src={user?.avatar}
                  alt=""
                />
                <div className="font-medium dark:text-white">
                  <div>{user?.name}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {user?.email}
                  </div>
                </div>
              </div>
              <hr className="mb-2" />
              <div className="rounded-lg border p-4">
                <section className="bg-white dark:bg-gray-900">
                  <div className="mx-auto max-w-2xl">
                    <p className="font-medium text-xl mb-4">
                      Thông tin cá nhân
                    </p>
                    <form action="#">
                      <div className="grid gap-4 sm:grid-cols-2 ">
                        <div className="sm:col-span-2">
                          <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Product Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="Type product name"
                            required
                          />
                        </div>
                        <div className="w-full">
                          <label
                            htmlFor="brand"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Brand
                          </label>
                          <input
                            type="text"
                            name="brand"
                            id="brand"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="Product brand"
                            required
                          />
                        </div>
                        <div className="w-full">
                          <label
                            htmlFor="price"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Price
                          </label>
                          <input
                            type="number"
                            name="price"
                            id="price"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="$2999"
                            required
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="category"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Category
                          </label>
                          <select
                            id="category"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          >
                            <option selected>Select category</option>
                            <option value="TV">TV/Monitors</option>
                            <option value="PC">PC</option>
                            <option value="GA">Gaming/Console</option>
                            <option value="PH">Phones</option>
                          </select>
                        </div>
                        <div>
                          <label
                            htmlFor="item-weight"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Item Weight (kg)
                          </label>
                          <input
                            type="number"
                            name="item-weight"
                            id="item-weight"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="12"
                            required
                          />
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
                      >
                        Add product
                      </button>
                    </form>
                  </div>
                </section>
              </div>
            </div>
            <div className="text-end mt-2">
              <button
                type="button"
                className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Lưu thay đổi
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserAdmin;
