import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const changeCount = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };

  return (
    <div>
      <span>count: {count}</span>
      <button onClick={() => changeCount()}>修改</button>
    </div>
  );
};

export default App;
