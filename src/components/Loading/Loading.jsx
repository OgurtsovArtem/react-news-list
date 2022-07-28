import style from "./Loading.module.css";
import { Loader } from "../Loader/Loader";
import clsx from "clsx";

const Loading = () => {
  return (
    <section className={clsx("continaer", style.loading)}>
      <Loader size={"large"} />
      <h2 className={style.title}>Идет поиск новостей...</h2>
    </section>
  );
};

export default Loading;
