import {usePopup} from '../../components/popup/usePopup';
import Button from '../../components/button/Button';

interface ConfirmData {
  userName: string;
}

export default function Page() {
  const {openPopup} = usePopup();

  return (
    <>
      <h1 className={'font-bold text-3xl pb-4'}>1주차 멘토링 과제</h1>

      {/* TODO: 1주차 프론트 팀미션 UI 컴포넌트 만들기  */}

      {/* Button/Input  */}
      {/* 활성화 버튼 */}
      <Button
        className="py-3 text-base"
        onClick={() => {
          console.log('제출 버튼 클릭');
        }}
      >
        제출_활성화버튼
      </Button>

      {/* 비활성화 버튼 */}
      <Button
        className="py-3 text-base"
        disabled
        onClick={() => {
          console.log('이 코드는 disabled라 실행되지 않음');
        }}
      >
        제출_비활성화버튼
      </Button>

      {/* Modal  */}
      <button
        onClick={() => {
          openPopup<'confirm', ConfirmData>('confirm', {
            header: {
              title: '닉네임 입력',
            },
            body: (
              <div>
                안녕하세요.
                <br />
                <input className="border" id="userName" type="text" />
              </div>
            ),
            footer: {
              buttonText: ['취소', '확인'],
            },
            onConfirm: data => {
              console.log(data?.userName);
            },
          });
        }}
      >
        열기
      </button>

      {/* Dropdown */}
    </>
  );
}
