import "./App.css";
import Counter from "./components/counter";
import Interval from "./components/Interval";
type Props = {};

const App = (props: Props) => {
  return (
    <div className="app">
      <Counter />
    </div>
  );
};

export default App;
