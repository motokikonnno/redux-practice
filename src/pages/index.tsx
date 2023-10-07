import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, login } from "./actions";

export default function Home() {
  const counter = useSelector(({ counter }) => counter);
  const isLogin = useSelector(({ isLogin }) => isLogin);
  const dispatch = useDispatch();

  return (
    <>
      <div>カウント：{counter}</div>
      <div onClick={() => dispatch(increment(7))}>プラス</div>
      <div onClick={() => dispatch(decrement())}>マイナス</div>
      {isLogin ? <h3>ログインに成功</h3> : <h3>ログインしてください</h3>}
      <div onClick={() => dispatch(login())}>ログインorログアウト</div>
    </>
  );
}
