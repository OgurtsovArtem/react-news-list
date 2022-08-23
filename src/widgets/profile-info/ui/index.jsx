import clsx from "clsx";
import style from "./style.module.css";

const ProfileInfo = () => {
  const user = "Артем";
  const count = "5";
  const title = `${user}, у вас ${count} сохранных статей`;
  const tags = `${"Природа"}, ${"Тайга"} и ${"2-м другим"}`;
  return (
    <section className={clsx("container", style.profileInfo)}>
      <h3 className={style.subtitle}>Сохранённые статьи</h3>
      <h2 className={style.title}>{title}</h2>
      <p className={style.tags}>По ключевым словам: {tags}</p>
    </section>
  );
};

export default ProfileInfo;
