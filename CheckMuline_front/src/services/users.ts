/* eslint-disable */
import axios, { AxiosResponse } from 'axios';

import $api from '.';
import { IAuthResponse, IAuthVkResponse, IUser } from '../types/users';

export const login = (payload:IAuthVkResponse& {codeVerifier: string}): Promise<AxiosResponse<IAuthResponse>> => {
  return $api.post<IAuthResponse>('/login',  payload );
};

export const registration = (email: string, password: string): Promise<AxiosResponse<IAuthResponse>> => {
  return $api.post<IAuthResponse>('/registration', { email, password });
};

export const logout = (): Promise<void> => {
  return $api.post('/logout');
};

export const getUser = (): Promise<AxiosResponse<IUser>> => {
  return $api.get<IUser>('/users');
};
