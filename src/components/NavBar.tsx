import { CartIcon } from "@/HeroIcons";
import { useSelector } from "react-redux";

export const NavBar = () => {
  const { amount } = useSelector(({ cart }) => cart);
  return (
    <nav>
      <div className="nav-center">
        <h3>Redux Shopping</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};
