import "./App.css";
import AllInput from "./allInput/AllInput";
import Answer from "./answer/Answer";
import { useState } from "react";

function App() {
  const [tip, setTip] = useState(0);
  const [total, setTotal] = useState(0);
  const [reset, setReset] = useState(false);

  return (
    <div className="container">
      <AllInput setTip={setTip} setTotal={setTotal} reset={reset}/>
      <Answer tip={tip} total={total} setReset={setReset} reset={reset} />
    </div>
  );
}

export default App;
