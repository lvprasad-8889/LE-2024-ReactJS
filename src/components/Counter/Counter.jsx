import { useEffect, useState } from "react";


import useStore from "../../store/store.jsx";
import { useParams } from "react-router-dom";


// event -> event is parameter sent to every javascript function
// props an object sent to any component
function Counter(props) {
  let {count, increment, decrement, reset, setCountToN} = useStore();

  let params = useParams();

  console.log("parameters in counter components are", params)

  useEffect(() => {
    let value = +params.value
    setCountToN(value);
  }, [])

  return (
    <div className="app p-2">
      <div>{count}</div>

      <div className="d-flex gap-2">
        <button className="btn btn-success" onClick={increment}>
          Increment
        </button>
        <button className="btn btn-danger" onClick={decrement}>
          Decrement
        </button>
        <div className="btn btn-primary" onClick={reset}>
          Make it Zero
        </div>
      </div>
    </div>
  );
}

export default Counter;
