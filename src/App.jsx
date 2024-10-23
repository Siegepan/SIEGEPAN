import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import "./App.css";

function App() {
  return (
    <>
      <h1 className="text-black">Hello World</h1>
      <DotLottieReact src="/src/assets/lotties/0H93rE5C00.json" loop autoplay />
      <DotLottieReact src="/src/assets/lotties/oDS3JIG0kc.json" loop autoplay />
    </>
  );
}

export default App;
