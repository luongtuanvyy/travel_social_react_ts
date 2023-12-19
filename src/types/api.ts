import { Tour, User } from './entity';

export type ApiRespone<T> = {
  success: boolean;
  message: string;
  data: T;
};

export type Auth = {
  accessToken: string;
  accountDto: User;
};

export type StateApiResponse<T> = {
  currentPage: number;
  datas: T;
  pageSize: number;
  totalItems: number;
  totalPage: number;
};

export type VietNamLocation = {
  name: string;
  code: number;
  division_type: string;
  codename: string;
  phone_code: number;
  districts: [];
};

export type Follower = {
  avatar: string;
  email: string;
  id: number;
  isVerify: boolean;
  name: string;
};

export type BlogNotification = {
  id: number;
  notificationType: string;
  name: string;
  avatar: string;
  createTime: number;
  blogId: number;
};

export type Comment = {
  accName: string;
  avatar: string;
  comment: string;
  email: string;
  rating: number;
};
