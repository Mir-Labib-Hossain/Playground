import three from "./assets/Anxiety-bro.svg";
import two from "./assets/Basketball-bro.svg";
import five from "./assets/Farmer-bro.svg";
import one from "./assets/Hidden-mining-bro.svg";
import four from "./assets/Savings-amico.svg";
import six from "./assets/Warning-cuate.svg";
import Carousel from "./components/carousel";
type Props = {};

const App = (props: Props) => {
  const data = [
    { id: 0, bgColor: "#231E31", text: "Crypto Tax-Loss Harvesting", image: one },
    { id: 1, bgColor: "#4B192B", text: "What are your goals?", image: two },
    { id: 2, bgColor: "#47855D", text: "Inventing mythBuster", image: three },
    { id: 3, bgColor: "#142A4E", text: "What's the stock market?", image: four },
    { id: 4, bgColor: "#102517", text: "Why invest?", image: five },
    { id: 5, bgColor: "#654F16", text: "What is risk?", image: six },
    { id: 6, bgColor: "#142A4E", text: "What can you invest in?", image: two },
    { id: 7, bgColor: "#1E3F25", text: "What's an EFT?", image: two },
    { id: 8, bgColor: "#477EED", text: "What to know about crypto?", image: two },
    { id: 9, bgColor: "#231E31", text: "What's an IPO?", image: two },
  ];
  return (
    <div className="app">
      <Carousel dataArr={data} />
    </div>
  );
};

export default App;
