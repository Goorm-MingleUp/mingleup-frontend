import Http from '../../utils/HTTP';
import {useEffect, useState} from 'react';

type User = {
  id: number;
  name: string;
  birthdate: string;
  gender: string;
  email: string | null;
  region: string | null;
  mbti: string | null;
  hobbies: string[];
  idealTypeHobbies: string[];
  profileImageUrl: string | null;
  role: string;
};

function MyInfo() {
  const [user, setUser] = useState<User>();
  async function fetchUser() {
    if (typeof window === 'undefined') return null; // 서버에서는 실행하지 않음

    const token = localStorage.getItem('token');
    if (!token) return null;

    try {
      const res = await Http.get<{result: User}>('users/me', {
        headers: {
          Authorization: `Bearer ${token}`, // 대문자 B, Bearer
        },
      });
      setUser(res.data.result);

      if (!res) {
        console.error('Failed to fetch user:', res);
        return null;
      }
    } catch (err) {
      console.error('Fetch error:', err);
      return null;
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="container p-4 border-b border-b-gray-200" style={{marginBottom: '24px'}}>
      {/* 프로필 헤더 */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src={user?.profileImageUrl || '/default-profil.svg'}
            alt={user?.name}
            className="w-14 h-14 rounded-full object-cover"
          />
          <div>
            <h2 className="text-xl font-normal">{user?.name}</h2>
            <span className="mr-2 text-sm text-gray-500">MBTI: {(user?.mbti && user?.mbti) || '정보없음'}</span>
            <span className="text-sm text-gray-500">지역: {(user?.region && user?.region) || '정보없음'}</span>
          </div>
        </div>

        <div>
          <a href="/my/info">정보수정</a>
        </div>
      </div>
    </div>
  );
}

interface IResWishList {
  content: {
    wishlistId: number;
    wishlistedAt: string;
    partyId: number;
    partyTitle: string;
    partyImageUrl: string;
    partyDatetime: string;
    partyLocationName: string;
    entryFee: number;
  }[];
}

function MyWishListt() {
  const [wishListt, setWishListt] = useState<IResWishList>();
  async function fetchUser() {
    if (typeof window === 'undefined') return null; // 서버에서는 실행하지 않음

    const token = localStorage.getItem('token');
    if (!token) return null;

    try {
      const res = await Http.get<{result: IResWishList}>('wishlists/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setWishListt(res.data.result);

      console.log(res.data.result);

      if (!res) {
        console.error('Failed to fetch user:', res);
        return null;
      }
    } catch (err) {
      console.error('Fetch error:', err);
      return null;
    }
  }

  async function fetchdkUser() {
    if (typeof window === 'undefined') return null; // 서버에서는 실행하지 않음

    const token = localStorage.getItem('token');
    if (!token) return null;

    try {
      const res = await Http.get<{result: IResWishList}>('applications/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setWishListt(res.data.result);

      console.log(res.data);

      if (!res) {
        console.error('Failed to fetch user:', res);
        return null;
      }
    } catch (err) {
      console.error('Fetch error:', err);
      return null;
    }
  }

  useEffect(() => {
    // fetchUser();
    fetchdkUser();
  }, []);

  return (
    <div className="container">
      <section className="mb-6">
        <div className="mb-4">
          <h2 className="text-2xl font-semibold">내가 신청한 파티</h2>
        </div>

        <div>
          {!wishListt?.content?.length ? (
            <div className="flex flex-col items-center justify-center gap-4 p-4 rounded-xl bg-gray-100 ">
              <p className="text-gray-500 text-center">아직 신청한 파티가 없어요. 추천하는 파티를 보러가요.</p>

              <a href="/party" className="px-4 py-2 rounded-md  cursor-pointer hover:opacity-50">
                파티 찾아보기 &gt;
              </a>
            </div>
          ) : (
            <></>
          )}
        </div>
      </section>

      <section>
        <div className="mb-4">
          <h2 className="text-2xl font-semibold">내가 찜한 파티</h2>
        </div>
        <div>
          {!wishListt?.content?.length ? (
            <div className="flex flex-col items-center justify-center gap-4 p-4 rounded-xl bg-gray-100 ">
              <p className="text-gray-500 text-center">찜한 파티가 없어요. 추천하는 파티를 보러가요.</p>

              <a href="/party" className="px-4 py-2 rounded-md  cursor-pointer hover:opacity-50">
                파티 찾아보기 &gt;
              </a>
            </div>
          ) : (
            <></>
          )}
        </div>
      </section>
    </div>
  );
}

function Mypage() {
  return (
    <>
      <MyInfo />

      <MyWishListt />
    </>
  );
}

export default Mypage;
