import { Accordion } from 'flowbite-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAppSelector } from '~/app/hook';
import Heart from '~/assets/svg/Heart';
import { convertDate } from '~/service/DateService';
import { Comment as TypeComment } from '~/types/entity';

type CommentProps = {
  comment: TypeComment;
};

type Inputs = {
  comment: string;
};

const Comment = (props: CommentProps) => {
  const { comment } = props;
  const [reply, setReply] = useState('hidden');
  const user = useAppSelector((state) => state.auth.user);

  const {
    // register,
    // handleSubmit,
    // formState: { errors },
  } = useForm<Inputs>();

  // const onSubmit = (data: string) => {
  //   console.log(data);
  // };

  return (
    <div>
      <div className="mx-5 py-2 flex flex-row rounded-t-lg bg-white dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div className="image min-w-max justify-self-center">
          <img
            className="object-cover h-[40px] w-[40px] rounded-full"
            src={comment.avatar}
            alt=""
          />
        </div>
        <div className="grow flex flex-col justify-between pl-1 leading-normal ">
          <span className="text-xs bg-gray-100 w-fit p-1.5 rounded-md">
            <span className="font-medium">{comment.name}</span>
            <p className="">{comment.content}</p>
          </span>
          <div className="reaction flex text-xs font-medium px-1.5 pt-2">
            <button>Thích</button>
            <button
              className="ml-4"
              onClick={() =>
                setReply((state) => (state == 'hidden' ? 'show' : 'hidden'))
              }
            >
              Phản hồi
            </button>
            <span className="ml-4 font-normal">3 giờ trước</span>
            {comment.totalLike > 0 && (
              <span className="ml-4 font-normal flex">
                <Heart /> <span className="ml-1"> {comment.totalLike}</span>
              </span>
            )}
          </div>

          <form
            className={`rounded-lg ${reply} pt-1.5 bg-gray-50 dark:bg-gray-700`}
          >
            <label htmlFor="chat" className="sr-only">
              Your message
            </label>
            <div className="flex items-center px-3 py-2 ">
              <div className="image min-w-max justify-self-center">
                <img
                  className="object-cover h-[40px] w-[40px] rounded-full"
                  src={user?.avatar}
                  alt=""
                />
              </div>
              <textarea
                id="chat"
                rows={1}
                className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your message..."
              ></textarea>
              <button
                type="button"
                className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 18"
                >
                  <path
                    fill="currentColor"
                    d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"
                  />
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M18 1H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                  />
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"
                  />
                </svg>
                <span className="sr-only">Upload image</span>
              </button>
              <button
                type="button"
                className="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
              >
                <svg
                  className="w-5 h-5"
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
                    d="M13.408 7.5h.01m-6.876 0h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM4.6 11a5.5 5.5 0 0 0 10.81 0H4.6Z"
                  />
                </svg>
                <span className="sr-only">Add emoji</span>
              </button>
              <button
                type="submit"
                className="inline-flex justify-center p-2 text-secondary rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
              >
                <svg
                  className="w-5 h-5 rotate-90"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
                </svg>
                <span className="sr-only">Send message</span>
              </button>
            </div>
            <div className="flex justify-end mr-14"></div>
          </form>

          {comment.reply && (
            <div>
              <Accordion className="border-0">
                <Accordion.Panel>
                  <Accordion.Title className="bg-white rounded-none hover:bg-white focus:ring-0 p-0 pl-1.5 pt-1 text-xs shadow-none">
                    Xem các phản hồi ( +{comment.reply.length} )
                  </Accordion.Title>
                  <Accordion.Content className="pr-0 py-2">
                    {comment.reply.map((reply, index) => (
                      <div key={index} className="recomment">
                        <div className="py-2 flex flex-row rounded-t-lg bg-white dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                          <div className="image min-w-max justify-self-center">
                            <img
                              className="object-cover h-[40px] w-[40px] rounded-full"
                              src={reply.avatar}
                              alt=""
                            />
                          </div>
                          <div className="grow flex flex-col justify-between pl-1 leading-normal">
                            <span className="text-xs bg-gray-100 w-fit p-1.5 rounded-md">
                              <span className="font-medium">{reply.name}</span>
                              <p className="">{reply.content}</p>
                            </span>
                            <div className="reaction flex text-xs font-medium px-1.5 pt-2">
                              <button>Thích</button>
                              <span className="ml-3 font-normal">
                                {convertDate(reply.createdAt)}
                              </span>
                              {comment.totalLike > 0 && (
                                <span className="ml-4 font-normal flex">
                                  <Heart />{' '}
                                  <span className="ml-1">
                                    {' '}
                                    {comment.totalLike}
                                  </span>
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Accordion.Content>
                </Accordion.Panel>
              </Accordion>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Comment;
