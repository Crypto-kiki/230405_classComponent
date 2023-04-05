import { useState } from "react";

// 내꺼 오류임
// const Counter = () => {
//   const [Count, setCount] = useState();

//   const onClickAdd = () => {
//     setCount = Count + 1;
//   };

//   return (
//     <div>
//       <div>{Count}</div>
//       <button onClick={onClickAdd}>{setCount}</button>
//     </div>
//   );
// };

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
