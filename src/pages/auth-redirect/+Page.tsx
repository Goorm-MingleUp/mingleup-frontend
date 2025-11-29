import {useEffect} from 'react';

export default function AuthRedirect() {
  // const router = location();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');
    const userId = params.get('userId');
    const name = params.get('name');

    if (token && userId) {
      // 1. JWT를 로컬 스토리지에 저장
      localStorage.setItem('token', token);
      localStorage.setItem('userId', userId);
      localStorage.setItem('name', name || '');

      console.log('token:', token, 'userId:', userId);

      // 2. 로그인 완료 후 홈 혹은 대시보드로 이동
      window.location.href = '/';
    } else {
      // 실패한 경우 로그인 페이지로
      window.location.href = '/login';
    }
  }, []);

  return <div className="flex justify-center items-center p-4">로그인 처리 중...</div>;
}
