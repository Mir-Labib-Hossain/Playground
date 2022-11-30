type Props = {
  checked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
};

import "./style.css";

const InputToggle = ({ checked, setChecked }: Props) => {
  {
  }
  return (
    <label className="switch">
      <input type="checkbox" checked={checked} onClick={() => setChecked(!checked)} />
      <span className="slider round"></span>
    </label>
  );
};

export default InputToggle;
