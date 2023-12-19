import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { AuthenticationApi } from '~/api/AuthenticationApi';
import { Eye, EyeHide } from '~/assets/svg';
import { RegisterAcitons } from '~/slice/RegisterSlice';

type Inputs = {
  name?: string;
  gmail?: string;
  password?: string;
  agree?: boolean;
};

const FormRegister = (props: { handleLoading: (value: boolean) => void }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { handleLoading } = props;
  const schema = yup
    .object({
      name: yup
        .string()
        .required('Vui lòng nhập đầy đủ thông tin')
        .min(2, 'Vui lòng nhập đầy đủ tên'),
      gmail: yup
        .string()
        .required('Email không được để trống')
        .email('Email không hợp lệ')
        .max(100, 'Email không được quá 100 ký tự'),
      password: yup
        .string()
        .min(8, `Vui lòng nhập nhiều hơn 8 kí tự `)
        .max(30, `Vui lòng nhập ít hơn 30 kí tự `)
        .matches(
          /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,30}$/,
          'Vui lòng nhập đúng định dạng',
        )
        .required('Vui lòng nhập đầy đủ thông tin'),
      agree: yup
        .boolean()
        .oneOf([true], 'Vui lòng đồng ý với điều khoản')
        .required(),
    })
    .required();

  const [showPassword, setShowPassword] = useState('password');

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver<Inputs>(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
    const { name, gmail, password } = data;

    const sendOTP = async () => {
      handleLoading(true);
      await AuthenticationApi.sendOTP({ gmail, status: 'Register' }).then(
        (response) => {
          if (response.data.success) {
            dispatch(
              RegisterAcitons.setRegister({ name, email: gmail, password }),
            );
            toast.success('Gửi mã OTP thành công');
            handleLoading(false);
            navigate('/otp');
          } else if (response.data.message === 'Account exists') {
            handleLoading(false);
            toast.error('Tài khoản đã tồn tại');
            setError('gmail', { message: 'Tài khoản đã tồn tại' });
          }
        },
      );
    };
    sendOTP();

    // const register = async () => {
    //   await AuthenticationApi.register({ name, email, password }).then(
    //     (response) => {
    //       if (response.data.success) {
    //         toast.success('Đăng ký thành công');
    //         navigate('/login');
    //       }
    //     },
    //   );
    // };

    // register();
  };

  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className=" flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen max-w-md lg:py-0">
          <div className="w-full bg-white rounded-lg dark:border dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-4 sm:p-8 ">
              <h1 className="text-xl font-semibold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Đăng ký
              </h1>
              <p className="text-sm">
                Today is a new day. It's your day. You shape it. Sign in to
                start managing your projects.
              </p>
              <form
                className="space-y-4 md:space-y-4"
                action="#"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Tên
                  </label>
                  <input
                    {...register('name')}
                    type="name"
                    name="name"
                    id="name"
                    className={`bg-gray-50 border ${
                      errors.name
                        ? 'focus:outline-red-600 border-red-600'
                        : 'focus:outline-secondary border-gray-300'
                    } border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                    placeholder="Ví dụ: Nguyễn Văn A"
                  />
                  <p
                    id="filled_error_help"
                    className="mt-2 text-xs font-medium text-red-600 dark:text-red-400"
                  >
                    {errors.name?.message}
                  </p>
                </div>
                <div>
                  <label
                    htmlFor="gmail"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    {...register('gmail')}
                    type="gmail"
                    name="gmail"
                    id="gmail"
                    className={`bg-gray-50 border ${
                      errors.gmail
                        ? 'focus:outline-red-600 border-red-600'
                        : 'focus:outline-secondary border-gray-300'
                    }  text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                    placeholder="Ví dụ: example@gmail.com"
                  />
                  <p
                    id="filled_error_help"
                    className="mt-2 text-xs font-medium text-red-600 dark:text-red-400"
                  >
                    {errors.gmail?.message}
                  </p>
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Mật khẩu
                  </label>
                  <div className="relative">
                    <input
                      {...register('password')}
                      type={showPassword}
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className={`bg-gray-50 border ${
                        errors.password
                          ? 'focus:outline-red-600 border-red-600'
                          : 'focus:outline-secondary border-gray-300'
                      } border-gray-300 focus:ring-none focus:ring-transparent focus:shadow-none focus:border-transparent text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                    />
                    <div className="absolute top-1/2 -translate-y-1/2 right-2">
                      <p
                        className="text-primary"
                        onClick={() =>
                          setShowPassword((state) =>
                            state === 'password' ? 'text' : 'password',
                          )
                        }
                      >
                        {showPassword === 'password' ? <Eye /> : <EyeHide />}
                      </p>
                    </div>
                  </div>

                  <p
                    id="filled_error_help"
                    className="mt-2 text-xs font-medium text-red-600 dark:text-red-400"
                  >
                    {errors.password?.message}
                  </p>

                  <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400 mt-2 ml-3">
                    <li className="flex items-center text-sm">
                      <svg
                        className={`w-3 h-3 mr-2 text-gray-500  dark:text-green-400 flex-shrink-0`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                      </svg>
                      Độ dài từ 8 - 30 kí tự
                    </li>
                    <li className="flex items-center text-sm">
                      <svg
                        className="w-3 h-3 mr-2 text-gray-500 dark:text-green-400 flex-shrink-0"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                      </svg>
                      Có ít nhất 1 chữ viết hoa, 1 số và 1 kí tự đặc biệt
                    </li>
                  </ul>
                </div>
                <div className="flex-row space-y-3 items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="agree"
                        {...register('agree')}
                        aria-describedby="agree"
                        type="checkbox"
                        className="w-4 h-4 border text-primary border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary  dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      />
                    </div>
                    <div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="agree"
                          className="text-gray-500 dark:text-gray-300"
                        >
                          Đồng ý với các điều khoản của chúng tôi.
                        </label>
                      </div>
                      {errors.agree && (
                        <p className="mt-2 text-xs font-medium text-red-600 dark:text-red-400">
                          {errors.agree.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-secondary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Đăng ký
                </button>

                <p className="text-sm flex justify-center text-gray-500 dark:text-gray-400">
                  Bạn đã có tài khoản?
                  <Link
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500 pl-1"
                    to="/login"
                  >
                    Đăng nhập
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default FormRegister;
