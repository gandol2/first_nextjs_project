import Link from "next/link";
import { useState } from "react";
import Layout from "../components/Layout";

export default function Page() {
  const [count, setCount] = useState(0);
  function plus() {
    return setCount(count + 1);
  }
  const minus = () => {
    return setCount(count - 1);
  };
  return (
    <Layout>
      <div>
        <h2>카운터 : {count}</h2>
        <button onClick={plus}>+1</button>
        <button onClick={minus}>-1</button>
      </div>
    </Layout>
  );
}
