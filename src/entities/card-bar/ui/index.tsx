import style from "./style.module.css";
import { FC, useState } from "react";
import { CardInfoType, CardInfoMessage, CardInfoIcon } from "shared/ui/card-info";
import clsx from "clsx";

const CardBar: FC<{ data?: string }> = ({ data }) => {
  const [isHover, setHover] = useState(false);

  const mouseEnter = () => setHover(true);
  const mouseLeave = () => setHover(false);

  const messageClass = clsx(style.message, {
    [style.messageActive]: isHover,
  });

  return (
    <div className={style.container}>
      <CardInfoType />
      <CardInfoMessage className={messageClass} />
      <CardInfoIcon onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} />
    </div>
  );
};

export default CardBar;
