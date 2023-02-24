import "./App.scss";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const handleSubtract = () => {
    setCount(count - 1);
  }

  const handleAdd = () => {
    setCount(count + 1);
  }

  const handleReset =() => {
    setCount(0);
  }

  let colorCount = '#fff';
  if (count >= 1) {
    colorCount = 'yellow';
  } else if (count < 0) {
    colorCount = 'red';
  } else {
    colorCount = 'white';
  }
  return (
    <section className="counter-sec --flex-center">
      <div className="container counter --card --center-all">
        <h1 className="--text-light">Compter en React</h1>
        <p className="count --my2 --text-md --text-light" style={{ color: colorCount }}>{count}</p>
        <div className="buttons">
          <button className="--btn --btn-danger" onClick={handleSubtract}>- Moins</button>
          <button className="--btn " onClick={handleReset}>! Réinitialiser</button>
          <button className="--btn --btn-success" onClick={handleAdd}>+ Plus</button>
        </div>
      </div>
    </section>
  );
}

export default App;
