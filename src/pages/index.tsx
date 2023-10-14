import { CartContainer } from "@/components/CartContainer";
import { Modal } from "@/components/Modal";
import { NavBar } from "@/components/NavBar";
import { calculateTotals } from "@/features/cart/CartSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector(({ cart }) => cart);
  const { isOpen } = useSelector(({ modal }) => modal);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);

  return (
    <main>
      {isOpen && <Modal />}
      <NavBar />
      <CartContainer />
    </main>
  );
}
