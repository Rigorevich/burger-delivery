import style from './CatalogProduct.module.css';
import { API_URL } from '../../config.js';

export const CatalogProduct = ({ title, image, price, weight }) => {
  return (
    <article className={style.product}>
      <img src={`${API_URL}/${image}`} alt={title} className={style.image} />

      <p className={style.price}>
        {price} <span className="currency">₽</span>
      </p>

      <h3 className={style.title}>
        <button className={style.detail}>{title}</button>
      </h3>

      <p className={style.weight}>{weight}г</p>

      <button className={style.add} type="button">
        Добавить
      </button>
    </article>
  );
};
