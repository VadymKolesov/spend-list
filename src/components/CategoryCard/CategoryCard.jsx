import CategoryCardItem from "../CategoryCardItem/CategoryCardItem";
import defStyles from "../../index.module.css";
import css from "./CategoryCard.module.css";
import { FiEdit3 } from "react-icons/fi";
import items from "../../assets/items.json";

export default function CategoryCard() {
  return (
    <div className={defStyles.container}>
      <div className={css.card}>
        <div className={css.header}>
          <div className={css.totalWrap}>
            <p>Total</p>
            <p className={css.totalCost}>1025,00zł</p>
          </div>
          <button type="button" className={css.edit}>
            <FiEdit3 size={16} />
          </button>
        </div>
        <ul className={css.list}>
          {items.map((el) => (
            <li key={el.id} className={css.item}>
              <CategoryCardItem
                title={el.title}
                category={el.category}
                cost={el.cost}
                color={el.color}
                icon={el.icon}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
