import {usePopup} from '../../components/popup/usePopup';

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
