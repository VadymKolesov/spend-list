import css from "./CategoryCardItem.module.css";
import * as Icon from "react-feather";

export default function CategoryCardItem({
  title,
  category,
  cost,
  color,
  icon,
}) {
  const ResIcon = Icon[icon];
  return (
    <>
      <div className={css.itemContent}>
        <div className={css.icon} style={{ backgroundColor: color }}>
          <ResIcon size={14} />
        </div>
        <div>
          <p className={css.title}>{title}</p>
          <p className={css.category}>{category}</p>
        </div>
      </div>
      <p>{cost}</p>
    </>
  );
}
