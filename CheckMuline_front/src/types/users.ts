export interface IUser {
  user_id: string;
  first_name: string;
  avatar: string;
  id: string;
}

export interface IAuthResponse {
  accessToken: string;
  refreshToken: string;
  user: IUser;
}

export interface IAuthVkResponse {
  type: string;
  code: string;
  state: string;
  device_id: string;
  expires_in: number;
  ext_id?: string;
}
