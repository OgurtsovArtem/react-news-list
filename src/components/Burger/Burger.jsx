import clsx from "clsx";
import style from "./Burger.module.css";

const Burger = ({ onClick, active }) => {
  return (
    <div
      onClick={onClick}
      className={clsx(style.burger, {
        [style.burgerActive]: active,
      })}
    ></div>
  );
};

export default Burger;
