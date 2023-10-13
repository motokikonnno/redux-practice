import { MinusIcon, PlusIcon } from "@/HeroIcons";

export const CartItem = ({
  id,
  img,
  title,
  price,
  amount,
}: {
  id: string;
  img: string;
  title: string;
  price: string;
  amount: string;
}) => {
  return (
    <article className="cart-item">
      <img src={img} alt="" />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">{price}円</h4>
        <button className="remove-btn">削除</button>
      </div>
      <div>
        <button className="amount-btn">
          <PlusIcon />
        </button>
        <p className="amount">{amount}</p>
        <button className="amount-btn">
          <MinusIcon />
        </button>
      </div>
    </article>
  );
};
