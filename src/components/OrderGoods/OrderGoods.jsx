import style from './OrderGoods.module.css';
import { Count } from '../Count/Count';

export const OrderGoods = ({ id, title, price, weight, count }) => {
  return (
    <>
      <div className={style.goods}>
        <h3 className={style.title}>{title}</h3>

        <p className={style.weight}>{weight}г</p>

        <p className={style.price}>
          {price}
          <span className={style.currency}>₽</span>
        </p>
      </div>

      <Count count={count} id={id} />
    </>
  );
};
