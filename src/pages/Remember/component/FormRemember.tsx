import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { AuthenticationApi } from '~/api/AuthenticationApi';

const schema = yup.object().shape({
  email: yup
    .string()
    .required('Email không được để trống')
    .email('Email không hợp lệ')
    .max(100, 'Email không được quá 100 ký tự'),
});

const FormRemember = () => {
  const {
    register,
    handleSubmit,
    setError,
    setValue,
    setFocus,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: { email: string }) => {
    const sendOTP = async () => {
      await AuthenticationApi.sendOTP({
        gmail: data.email,
        status: 'Forgot',
      }).then((response) => {
        console.log(response);
      });
    };
    sendOTP();
  };

  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className=" flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen max-w-md lg:py-0">
          <div className="w-full bg-white rounded-lg dark:border dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-4 sm:p-8 ">
              <h1 className="text-xl text-center font-semibold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Quên mật khẩu
              </h1>
              <p className="text-sm text-center">
                Nhập thông tin email để lấy lại mật khẩu
              </p>
              <div className="space-y-4 md:space-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    name="email"
                    id="email"
                    className={`bg-gray-50 border   text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                    placeholder="Ví dụ: example@gmail.com"
                  />
                  <p
                    id="filled_error_help"
                    className="mt-2 text-xs font-medium text-red-600 dark:text-red-400"
                  >
                    {errors.email?.message}
                  </p>
                </div>
                <button
                  type="submit"
                  onClick={handleSubmit(onSubmit)}
                  className="w-full text-white bg-secondary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Gửi mã xác nhận
                </button>

                <p className="text-sm flex justify-center text-gray-500 dark:text-gray-400">
                  Bạn đã có tài khoản?
                  <a
                    href="#"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500 pl-1"
                  >
                    <Link to="/login">Đăng nhập</Link>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FormRemember;
