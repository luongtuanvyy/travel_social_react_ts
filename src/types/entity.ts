export interface BaseEntity {
  id: number;
  createdAt: string;
  createdBy: string;
  modifiedAt: Date;
  modifiedBy: string;
  isActivated: boolean;
}

export interface User extends BaseEntity {
  accountName: string;
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

export interface Tour extends BaseEntity {
  name: string;
  description: string;
  startDate: string;
  startEnd: string;
  startDateBooking: string;
  endDateBooking: string;
  tourTemplateId: TourTemplate;
  size: number;
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
  like: number;
  share: number;
  comment: number;
  image: string;
  description: string;
  blogid?: string;
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
