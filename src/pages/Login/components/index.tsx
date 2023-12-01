import React, { useState } from 'react';
import {
  AuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  UserCredential,
} from 'firebase/auth';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { auth, providerFacebook, providerGoogle } from '~/firebase/config';
import { LoginFormValues } from '~/types/form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { AuthenticationApi } from '~/api/AuthenticationApi';
import { useAppDispatch } from '~/app/hook';
import { authAction } from '~/slice/AuthSlice';
import { Eye, EyeHide } from '~/assets/svg';

const schema = yup.object().shape({
  email: yup
    .string()
    .required('Email không được để trống')
    .email('Email không hợp lệ')
    .max(100, 'Email không được quá 100 ký tự'),
  password: yup.string().required('Mật khẩu không được để trống'),
  remember: yup.boolean().required(),
});

const FormLogin = () => {
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
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [error, setErrorForm] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit: SubmitHandler<LoginFormValues> = (data: LoginFormValues) => {
    const { email, password, remember } = data;

    const login = async () => {
      await AuthenticationApi.login(email, password)
        .then((response) => {
          if (response.data.success) {
            dispatch(
              authAction.login({
                token: response.data.data.accessToken,
                user: response.data.data.accountDto,
                with: 'email',
              }),
            );
            localStorage.setItem('token', response.data.data.accessToken);
            localStorage.setItem(
              'user',
              JSON.stringify(response.data.data.accountDto),
            );
            navigate('/home');
          } else {
            setError('email', {
              type: 'server',
              message: '',
            });
            setError('password', {
              type: 'server',
              message: '',
            });
            setValue('password', '');
            setFocus('password');
            setErrorForm('Email hoặc mật khẩu không đúng');
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };

    if (email && password) {
      console.log(email, password, remember);
      login();
    }
  };

  const handleLogin = (typeLogin: AuthProvider, type: string) => {
    signInWithPopup(auth, typeLogin)
      .then((data: UserCredential) => {
        const googleCredential = GoogleAuthProvider.credentialFromResult(data);
        const accessToken = googleCredential?.accessToken;
        if (accessToken) {
          loginWithFirebase(accessToken, type);
          navigate('/home');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const loginWithFirebase = (token: string, type: string) => {
    AuthenticationApi.loginWithFirebase(token, type)
      .then((response) => {
        if (response.data.success) {
          localStorage.setItem('token', response.data.data.accessToken);
          dispatch(
            authAction.login({
              token: response.data.data.accessToken,
              user: response.data.data.accountDto,
              with: type,
            }),
          );
          navigate('/home');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className=" flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen max-w-md lg:py-0">
          <div className="w-full bg-white rounded-lg dark:border dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-4 sm:p-8 ">
              <h1 className="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Đăng nhập
              </h1>
              <p className="text-center text-sm">
                Today is a new day. It's your day. You shape it. Sign in to
                start managing your projects.
              </p>
              <form
                className="space-y-4 md:space-y-4"
                action="#"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div>
                  {error && (
                    <p className="text-sm font-medium text-center mb-2 text-red-500 ">
                      {error}
                    </p>
                  )}
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
                    className={`${
                      errors.email
                        ? 'focus:ring-red-500 focus:border-red-500 border-red-500 ring-red-500 outline-red-500'
                        : 'focus:ring-primary focus:border-primary border-primary'
                    } bg-gray-50 border text-gray-900 sm:text-sm rounded-lg block w-full p-2.5`}
                    placeholder="Ex: abc"
                  />
                  {errors.email && (
                    <p className="text-xs p-0.5 pl-2.5 font-medium text-red-500">
                      {errors.email?.message}
                    </p>
                  )}
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
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className={`${
                        errors.password
                          ? 'focus:ring-red-500 focus:border-red-500 border-red-500 ring-red-500 outline-red-500'
                          : 'focus:ring-primary focus:border-primary border-primary'
                      } bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none sm:text-sm rounded-lg  block w-full p-2.5`}
                    />
                    <div className="absolute text-gray-600 top-1/2 right-0 -translate-x-full -translate-y-1/3">
                      <button
                        type="button"
                        className="m-0 p-0"
                        onClick={() => setShowPassword((prev) => !prev)}
                      >
                        {showPassword ? (
                          <Eye size={20} />
                        ) : (
                          <EyeHide size={20} />
                        )}
                      </button>
                    </div>
                  </div>
                  {errors.password && (
                    <p className="text-xs p-0.5 pl-2.5 font-medium text-red-500 ">
                      {errors.password?.message}
                    </p>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        {...register('remember')}
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border text-primary border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary  dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Ghi nhớ mật khẩu ?
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 dark:text-primary-500"
                  >
                    Quên mật khẩu?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-secondary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Đăng nhập
                </button>
              </form>
              <div className="inline-flex relative items-center justify-center w-full">
                <hr className="w-64 h-px my-3 bg-gray-200 border-0 dark:bg-gray-700" />
                <span className="absolute px-3 text-sm text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
                  or
                </span>
              </div>
              <button
                type="button"
                onClick={() => handleLogin(providerFacebook, 'facebook')}
                className="bg-[#F3F9FA] hover:bg-[#F3F9FA]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 rounded-lg text-sm px-5 py-2.5 text-center w-full flex items-center justify-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2"
              >
                <svg
                  width="28"
                  height="29"
                  viewBox="0 0 28 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_42_103)">
                    <path
                      d="M28 14.5C28 6.76801 21.732 0.5 14 0.5C6.26801 0.5 0 6.76801 0 14.5C0 21.4877 5.11957 27.2796 11.8125 28.3299V18.5469H8.25781V14.5H11.8125V11.4156C11.8125 7.90687 13.9027 5.96875 17.1005 5.96875C18.6318 5.96875 20.2344 6.24219 20.2344 6.24219V9.6875H18.4691C16.73 9.6875 16.1875 10.7668 16.1875 11.875V14.5H20.0703L19.4496 18.5469H16.1875V28.3299C22.8804 27.2796 28 21.4877 28 14.5Z"
                      fill="#1877F2"
                    />
                    <path
                      d="M19.4496 18.5469L20.0703 14.5H16.1875V11.875C16.1875 10.7679 16.73 9.6875 18.4691 9.6875H20.2344V6.24219C20.2344 6.24219 18.6323 5.96875 17.1005 5.96875C13.9027 5.96875 11.8125 7.90688 11.8125 11.4156V14.5H8.25781V18.5469H11.8125V28.3299C13.262 28.5567 14.738 28.5567 16.1875 28.3299V18.5469H19.4496Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_42_103">
                      <rect
                        width="28"
                        height="28"
                        fill="white"
                        transform="translate(0 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <span className="ml-3">Đăng nhập bằng Facebook</span>
              </button>
              <button
                type="button"
                onClick={() => handleLogin(providerGoogle, 'google')}
                className="bg-[#F3F9FA] hover:bg-[#F3F9FA]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 rounded-lg text-sm px-5 py-2.5 text-center w-full flex items-center justify-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2"
              >
                <svg
                  width="28"
                  height="29"
                  viewBox="0 0 28 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_42_65)">
                    <path
                      d="M27.727 14.8225C27.727 13.8708 27.6499 12.914 27.4853 11.9777H14.28V17.3689H21.842C21.5283 19.1076 20.52 20.6457 19.0436 21.6231V25.1212H23.5551C26.2044 22.6828 27.727 19.0819 27.727 14.8225Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M14.28 28.501C18.0559 28.501 21.2402 27.2612 23.5602 25.1212L19.0487 21.6232C17.7935 22.4771 16.1731 22.9606 14.2852 22.9606C10.6328 22.9606 7.53596 20.4966 6.42481 17.1837H1.76929V20.7898C4.14592 25.5173 8.98663 28.501 14.28 28.501Z"
                      fill="#34A853"
                    />
                    <path
                      d="M6.41966 17.1837C5.83322 15.4449 5.83322 13.5621 6.41966 11.8234V8.21729H1.76928C-0.216388 12.1732 -0.216388 16.8339 1.76928 20.7898L6.41966 17.1837Z"
                      fill="#FBBC04"
                    />
                    <path
                      d="M14.28 6.04127C16.276 6.01041 18.2051 6.76146 19.6506 8.14012L23.6477 4.14305C21.1167 1.76642 17.7575 0.45979 14.28 0.500943C8.98663 0.500943 4.14592 3.48459 1.76929 8.21728L6.41966 11.8234C7.52567 8.50536 10.6276 6.04127 14.28 6.04127Z"
                      fill="#EA4335"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_42_65">
                      <rect
                        width="28"
                        height="28"
                        fill="white"
                        transform="translate(0 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>

                <span className="ml-3 pr-4">Đăng nhập bằng Google</span>
              </button>
              <p className="text-sm flex justify-center text-gray-500 dark:text-gray-400">
                Bạn chưa có tài khoản?
                <Link
                  to="/register"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500 pl-1"
                >
                  Đăng ký
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FormLogin;
