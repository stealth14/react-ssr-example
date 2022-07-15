import * as React from "react";

export default function App() {
  const [times, setTimes] = React.useState(0);
  return (
    <div>
      <h1>Hello</h1>
      <div>{times}</div>
      <button onClick={() => setTimes(times + 1)}>ADD</button>
    </div>
  );
}
