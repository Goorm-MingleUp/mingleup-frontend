import axios, {type AxiosInstance, isAxiosError} from 'axios';
import {navigate} from 'vike/client/router';
// import { useToastStore } from '@/store/toastStore';

export interface IURL {
  BACKEND_URL?: string;
}

export interface IConfig {
  Env?: string;
  Url: IURL;
  token: {
    name: string;
    header: string;
  };
}

export const config: IConfig = {
  Env: import.meta.env.VITE_APP_REACT_APP_UI_ENV,
  token: {
    name: 'token',
    header: 'Authorization',
  },
  Url: {
    BACKEND_URL: import.meta.env.VITE_APP_BACKEND_URL,
  },
};

/**
 * Axios 인스턴스 생성
 */
const Http: AxiosInstance = axios.create({
  baseURL: config.Url.BACKEND_URL,
  headers: {
    'Cache-Control': 'no-cache',
    'Content-Type': 'application/json',
    Accept: 'application/hal+json',
  },
  paramsSerializer: {
    encode: encodeURIComponent,
    indexes: null,
  },
});

/**
 * 요청 인터셉터: 토큰 자동 주입
 */
Http.interceptors.request.use(req => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem(config.token.name);
    if (token && req.headers) {
      req.headers[config.token.header] = `Bearer ${token}`;
    }
  }
  return req;
});

/**
 * 응답 인터셉터: 공통 에러 처리
 */
Http.interceptors.response.use(
  res => res, // 성공 요청은 그대로 반환
  error => {
    if (isAxiosError(error)) {
      const status = error.response?.status;

      switch (status) {
        case 401:
          navigate('/login');
          break;

        case 409:
          break;

        case 500:
          // useToastStore.getState().addToast('서버 오류가 발생했습니다.');
          break;
      }
    } else {
      // 네트워크 오류 등 Axios가 아닌 경우
      // useToastStore.getState().addToast('서버와 연결할 수 없습니다.');
    }

    return Promise.reject(error); // 컴포넌트에서 catch 가능
  }
);

/**
 * 서버에서 반환되는 JSON 타입
 */
export interface AbsIRes<T, P = undefined> {
  success?: boolean;
  code: string;
  message: string;
  result?: T;
  page?: P;
  status?: number;
}

export default Http;
