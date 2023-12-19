import { ChangeEvent, KeyboardEvent, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { AuthenticationApi } from '~/api/AuthenticationApi';
import { useAppSelector } from '~/app/hook';

const schema = yup.object().shape({
  email: yup
    .string()
    .required('Email không được để trống')
    .email('Email không hợp lệ')
    .max(100, 'Email không được quá 100 ký tự'),
});

const FormOTP = () => {
  const navigate = useNavigate();
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const [error, setError] = useState('');
  const { email, password, name } = useAppSelector((state) => state.register);

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (
      event.target.value.length === 1 &&
      index < inputRefs.current.length - 1
    ) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleGetData = () => {
    const inputData = inputRefs.current
      .map((inputRef) => inputRef.value)
      .join('');
    if (inputData.length === inputRefs.current.length) {
      try {
        const verifyOTP = async () => {
          await AuthenticationApi.verifyOTP(inputData).then((response) => {
            if (response.data.success && email && password && name) {
              const register = async () => {
                await AuthenticationApi.register({
                  email,
                  name,
                  password,
                })
                  .then((response) => {
                    console.log(response);
                  })
                  .catch((error) => {});
              };
              register();
              toast.success('Đăng ký thành công');
              navigate('/login');
              return;
            }
            setError('Mã xác nhận không đúng');
          });
        };
        verifyOTP();
      } catch (error) {
        console.log(error);
      }
    } else {
      setError('Vui lòng nhập đủ mã xác nhận');
    }
  };

  const handleInputKeyDown = (
    index: number,
    event: KeyboardEvent<HTMLInputElement>,
  ) => {
    if (
      event.key === 'Backspace' &&
      index > 0 &&
      inputRefs.current[index].value === ''
    ) {
      inputRefs.current[index - 1].focus();
    } else if (
      event.key === ' ' ||
      (index === inputRefs.current.length && event.key !== 'Backspace')
    ) {
      event.preventDefault();
    }
  };

  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className=" flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen max-w-md lg:py-0">
          <div className="w-full bg-white rounded-lg dark:border dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-4 sm:p-8 ">
              <h1 className="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Vui lòng nhập mã xác nhận
              </h1>
              <p className="text-center text-sm">
                Nhập mã xác nhận được gửi đến email của bạn
              </p>

              <div className="space-y-4 md:space-y-4">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Mã xác nhận
                </label>
                <div className="flex space-x-3">
                  {Array.from(Array(6).keys()).map((item, index) => (
                    <input
                      ref={(ref) =>
                        (inputRefs.current[index] = ref as HTMLInputElement)
                      }
                      onChange={(event) => handleInputChange(event, index)}
                      onKeyDown={(event) => handleInputKeyDown(index, event)}
                      key={index}
                      type="text"
                      className="flex item-center justify-center w-10 rounded-lg"
                    />
                  ))}
                </div>
                {error && (
                  <p className="text-sm font-medium text-center mb-2 text-red-500 ">
                    {error}
                  </p>
                )}
                <p className="text-end text-sm">
                  Bạn chưa nhận được mã.{' '}
                  <span className="underline cursor-pointer">Gửi lại</span>
                </p>

                <button
                  onClick={handleGetData}
                  className="w-full text-white bg-secondary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Xác nhận
                </button>
              </div>
              <p className="text-sm flex justify-center text-gray-500 dark:text-gray-400">
                Bạn đã có tài khoản?
                <Link
                  to="/login"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500 pl-1"
                >
                  Đăng nhập
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FormOTP;
