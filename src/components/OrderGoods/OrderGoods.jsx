import style from './OrderGoods.module.css';
import { Count } from '../Count/Count';

export const OrderGoods = ({ good }) => {
  return (
    <>
      <div className={style.goods}>
        <h3 className={style.title}>{good}</h3>

        <p className={style.weight}>512г</p>

        <p className={style.price}>
          1279
          <span className={style.currency}>₽</span>
        </p>
      </div>

      <Count count={1} />
    </>
  );
};
