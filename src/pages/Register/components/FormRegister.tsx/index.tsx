import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { Eye, EyeHide } from '~/assets/svg';

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  agree?: boolean;
};

const FormRegister: React.FC = () => {
  const schema = yup
    .object({
      firstName: yup.string().required('Vui lòng nhập đầy đủ thông tin'),
      lastName: yup.string().required('Vui lòng nhập đầy đủ thông tin'),
      email: yup
        .string()
        .email('Vui lòng nhập đúng định dạng email')
        .required('Vui lòng nhập đầy đủ thông tin'),
      password: yup
        .string()
        .min(8, `Vui lòng nhập nhiều hơn 8 kí tự `)
        .max(30, `Vui lòng nhập ít hơn 30 kí tự `)
        .matches(
          /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,30}$/,
          'Vui lòng nhập đúng định dạng',
        )
        .required('Vui lòng nhập đầy đủ thông tin'),
    })
    .required();

  const [showPassword, setShowPassword] = useState('pasword');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
    console.log(data);
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
                    htmlFor="lastName"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Họ
                  </label>
                  <input
                    {...register('lastName')}
                    type="lastName"
                    name="lastName"
                    id="lastName"
                    className={`bg-gray-50 border border-gray-300 text-gray-900 ${
                      errors.lastName
                        ? 'focus:outline-red-600 border-red-600'
                        : 'focus:outline-secondary border-gray-300'
                    } focus:ring-secondary sm:text-sm rounded-lg focus:border-secondary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-secondary dark:focus:border-secondary`}
                    placeholder="Ex: abc"
                  />
                  <p
                    id="filled_error_help"
                    className="mt-2 text-xs font-medium text-red-600 dark:text-red-400"
                  >
                    {errors.lastName?.message}
                  </p>
                </div>
                <div>
                  <label
                    htmlFor="firstName"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Tên
                  </label>
                  <input
                    {...register('firstName')}
                    type="firstName"
                    name="firstName"
                    id="firstName"
                    className={`bg-gray-50 border ${
                      errors.lastName
                        ? 'focus:outline-red-600 border-red-600'
                        : 'focus:outline-secondary border-gray-300'
                    } border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                    placeholder="Ex: abc"
                  />
                  <p
                    id="filled_error_help"
                    className="mt-2 text-xs font-medium text-red-600 dark:text-red-400"
                  >
                    {errors.firstName?.message}
                  </p>
                </div>
                <div>
                  <label
                    htmlFor="mail"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    {...register('email')}
                    type="mail"
                    name="mail"
                    id="mail"
                    className={`bg-gray-50 border ${
                      errors.lastName
                        ? 'focus:outline-red-600 border-red-600'
                        : 'focus:outline-secondary border-gray-300'
                    }  text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                    placeholder="Ex: abc"
                  />
                  <p
                    id="filled_error_help"
                    className="mt-2 text-xs font-medium text-red-600 dark:text-red-400"
                  >
                    {errors.email?.message}
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
                        errors.lastName
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
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border text-primary border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary  dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      />
                    </div>
                    <div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="remember"
                          className="text-gray-500 dark:text-gray-300"
                        >
                          Đồng ý với các điều khoản của chúng tôi.
                        </label>
                      </div>
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
                  <a
                    href="#"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500 pl-1"
                  >
                    <Link to="/login">Đăng nhập</Link>
                  </a>
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
