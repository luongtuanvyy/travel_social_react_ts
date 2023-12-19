export const NotificationContent = (type: string) => {
  switch (type) {
    case 'FOLLOW':
      return 'đã theo dõi bạn';
    case 'LIKE':
      return 'đã thích bài viết của bạn';
    case 'COMMENT':
      return 'đã bình luận bài viết của bạn';
    case 'SHARE':
      return 'đã đăng lại bài viết của bạn';
    default:
      return;
  }
};
