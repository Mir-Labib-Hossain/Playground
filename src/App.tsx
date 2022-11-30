import { useState } from "react";
import InputToggle from "./input-toggle";

type Props = {};

const App = (props: Props) => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="app">
      <InputToggle checked={checked} setChecked={setChecked} />
    </div>
  );
};

export default App;
