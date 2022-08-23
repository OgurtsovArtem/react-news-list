import style from "./style.module.css";
import { LoaderSvg } from "./loader.svg";
import { FC } from "react";
import { ILoaderSizesTypes, ILoaderTypes } from "../types";

const loaderSizes: ILoaderSizesTypes = {
  small: 16,
  medium: 24,
  large: 80,
};

const Loader: FC<ILoaderTypes> = ({ size, inverse = false }) => {
  const loaderColor = inverse ? "#fff" : "#888";
  const stroke = size === "large" ? "1" : "2";

  const wrapperStyleKey = "wrapper_" + size;
  return (
    <div className={style[wrapperStyleKey]}>
      <LoaderSvg color={loaderColor} size={loaderSizes[size]} stroke={stroke} />
    </div>
  );
};

export default Loader;
