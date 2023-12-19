import { useEffect, useState } from 'react';
import { BlogNotificationApi } from '~/api/BlogNotificationApi';
import { useAppSelector } from '~/app/hook';
import { More } from '~/assets/svg';
import { NotificationContent } from '~/service/NotificationService';
import { BlogNotification } from '~/types/api';

const ListNotification = () => {
  const [blogNotifications, setBlogNotifications] = useState<
    BlogNotification[]
  >([]);
  const user = useAppSelector((state) => state.auth.user);

  useEffect(() => {
    if (user) {
      const fetchDataBlogNotification = async () => {
        try {
          await BlogNotificationApi.getBlogNotification({
            page: 0,
            pageSize: 10,
          })
            .then((response) => {
              setBlogNotifications(response.data.data.datas);
              console.log(response.data.data);
            })
            .catch((error) => {
              console.log(error);
            });
        } catch (error) {
          console.log(error);
        }
      };
      fetchDataBlogNotification();
    }
  }, []);

  return (
    <div className="h-96 p-5 overflow-auto">
      {blogNotifications ? (
        blogNotifications.map((item: BlogNotification, index: number) => (
          <div key={index} className="py-2 flex space-x-3">
            <div className="max-w-[48px] min-w-[48px] min-h-[48px] max-h-[48px] relative border-2 rounded-full">
              <img
                className="object-cover w-full h-full rounded-full"
                src={item.avatar}
                alt=""
              />
              {/* {item. && (
                  <div className="absolute -bottom-1 right-0">
                    <Tick size={18} />
                  </div>
                )} */}
            </div>
            <p className="text-sm grow">
              <span className="font-medium">{item.name}</span>{' '}
              {NotificationContent(item.notificationType)}
              <br />
              <span className="text-xs text-gray-500">5 phút trước</span>
            </p>
            <button>
              <More size={15} />
            </button>
          </div>
        ))
      ) : (
        <div className="h-1/2">lỗi</div>
      )}
      <hr />
      <p className="text-center pt-2">Xem thêm</p>
    </div>
  );
};

export default ListNotification;
