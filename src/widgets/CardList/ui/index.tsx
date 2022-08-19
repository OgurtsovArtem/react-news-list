import clsx from "clsx";
import { Button } from "shared/ui/Button";
import { Card } from "features/Card";
import Loading from "widgets/Loading/ui";
import { NotFoundCards } from "widgets/NotFoundCards";
import style from "./style.module.css";
import { FC } from "react";

const CardList: FC<{ type?: string }> = ({ type }) => {
  const getMore = () => {
    return;
  };

  const load = false;
  const notFound = false;

  if (load) {
    return <NotFoundCards />;
  }

  if (notFound) {
    return <Loading />;
  }

  return (
    <section className={style.cardList}>
      <div className={clsx("container", style.wrapper)}>
        <h1 className={style.title}>Результаты поиска</h1>
        <div className={style.body}>
          {new Array(5).fill(0).map((item, index) => (
            <Card key={index} type={type} />
          ))}
        </div>
        <div className={style.footer}>
          <Button className={style.button} onClick={getMore} color={"secondary"}>
            Показать еще
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CardList;
