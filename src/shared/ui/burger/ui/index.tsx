import clsx from "clsx";
import { FC, MouseEventHandler } from "react";
import style from "./style.module.css";

const Burger: FC<{ onClick: MouseEventHandler<HTMLDivElement>; active: boolean }> = ({
  onClick,
  active,
}) => {
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
