import { openModal } from "@/features/modal/ModalSlice";
import { useDispatch, useSelector } from "react-redux";
import { CartItem } from "./CartItem";

export const CartContainer = () => {
  const { amount, cartItems, total } = useSelector(({ cart }) => cart);
  const dispatch = useDispatch();

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>買い物かご</h2>
          <h4 className="empty-cart">何も入ってません・・・</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2>買い物かご</h2>
      </header>
      <div>
        {cartItems.map((item: any) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            合計 <span>{total}円</span>
          </h4>
        </div>
        <button className="clear-btn btn" onClick={() => dispatch(openModal())}>
          全削除
        </button>
      </footer>
    </section>
  );
};
