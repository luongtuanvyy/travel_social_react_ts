export interface BaseEntity {
  id: number;
  createdAt: number;
  createdBy: string;
  modifiedAt: number;
  modifiedBy: string;
  isActivated: boolean;
}

export interface User extends BaseEntity {
  address: string;
  avatar: string;
  birthday: string;
  cloudinaryId: string;
  description: string;
  email: string;
  name: string;
  gender: boolean;
  hotline: string;
  role: USER_ROLE;
  verify: boolean;
  vip: boolean;
}

export interface Booking extends BaseEntity {
  accountId: string;
  desciption: string;
  member: BookingPerson[];
}

export interface BookingPerson {
  name: string;
  age: number;
  gender: boolean;
}

export interface Tour extends BaseEntity {
  name: string;
  adult: number;
  children: number;
  baby: number;
  description: string;
  startDate: string;
  endDate: string;
  startDateBooking: string;
  endDateBooking: string;
  size: number;
  discount: number;
  registered: number;
  percent: number;
  departure: string;
  vehicle: string;
  image: string;
}

export interface TourTemplate extends BaseEntity {
  name: string;
  description: string;
}

export interface Place extends BaseEntity {
  address: string;
  cloudinaryId: string;
  description: string;
  hotline: string;
  image: string;
  name: string;
  type: string;
  website: string;
}

export interface Blog extends BaseEntity {
  name: string;
  avatar: string;
  image: string;
  description: string;
  cloudinaryId: string;
  blogid?: string;
  like: boolean;
  totalLike: number;
  totalComment: number;
  totalShare: number;
  verify: boolean;
}

export interface Comment extends BaseEntity {
  avatar: string;
  name: string;
  content: string;
  totalLike: number;
  totalReply: number;
  reply?: Comment[];
}

type USER_ROLE = 'admin' | 'user' | 'company';
