import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(6);
  console.log(count);
  console.log(count);
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button className="btn btn-success" onClick={() => setCount(count + 1)}
              id="wd-counter-up-click">Up</button>
      <button className="btn btn-danger ms-2" onClick={() => setCount(count - 1)}
              id="wd-counter-down-click">Down</button>
<hr/></div>);}