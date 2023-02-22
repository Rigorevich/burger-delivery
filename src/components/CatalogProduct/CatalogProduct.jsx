import style from './CatalogProduct.module.css';

export const CatalogProduct = ({ title }) => {
  return (
    <article className={style.product}>
      <img src="../../assets/img/photo-3.jpg" alt={title} className={style.image} />

      <p className={style.price}>
        639<span className="currency">₽</span>
      </p>

      <h3 className={style.title}>
        <button className={style.detail}>{title}</button>
      </h3>

      <p className={style.weight}>580г</p>

      <button className={style.add} type="button">
        Добавить
      </button>
    </article>
  );
};
