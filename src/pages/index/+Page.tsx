import Dropdown from '../../components/dropdown/Dropdown';
import {useDropdown} from '../../components/dropdown/useDropdown';

const OPTIONS = [
  {label: '옵션 1', value: 'opt1'},
  {label: '옵션 2', value: 'opt2'},
  {label: '옵션 3', value: 'opt3'},
];

export default function Page() {
  const dropdown = useDropdown();

  return (
    <>
      <h1 className={'font-bold text-3xl pb-4'}>1주차 멘토링 과제</h1>

      {/* TODO: 1주차 프론트 팀미션 UI 컴포넌트 만들기  */}

      {/* Button/Input  */}

      {/* Modal  */}

      {/* Dropdown */}
      <Dropdown
        options={OPTIONS}
        placeholder="옵션을 선택해주세요"
        customStyle={{
          wrapperClassName: 'w-[240px]',
          buttonClassName: 'w-full', // padding은 컴포넌트에서 이미 px-25/py-20
          optionListClassName: 'w-full',
          optionClassName: 'w-full',
        }}
        {...dropdown.bind}
      />
    </>
  );
}
