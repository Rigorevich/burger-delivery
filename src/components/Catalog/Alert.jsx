import style from './Catalog.module.css';

export const Alert = () => (
  <div className={style.alert}>
    <h3 className={style.alert__title}>Товары с данной категорией - отсутствуют :(</h3>
    <p className={style.alert__description}>В скором времени мы добавим продукты в этот каталог</p>
  </div>
);
