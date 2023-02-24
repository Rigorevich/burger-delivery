import style from './Order.module.css';
import { OrderGoods } from '../OrderGoods/OrderGoods';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ordersRequest } from '../../store/order/orderSlice.js';
import { API_URL } from '../../config.js';
import { openModal } from '../../store/modal/modalSlice.js';

export const Order = () => {
  const { goodsOrder, orderList, totalPrice, totalCount } = useSelector((state) => state.order);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ordersRequest());
  }, [orderList.length]);

  return (
    <div className={style.order}>
      <section className={style.wrapper}>
        <div className={style.header} tabIndex="0" role="button">
          <h2 className={style.title}>Корзина</h2>

          <span className={style.count}>{totalCount}</span>
        </div>

        <div className={style.wrap_list}>
          <ul className={style.list}>
            {goodsOrder?.map((item) => (
              <li key={item.id} className={style.item}>
                <img className={style.image} src={`${API_URL}/${item.image}`} alt="Супер сырный" />
                <OrderGoods {...item} />
              </li>
            ))}
          </ul>

          <div className={style.total}>
            <p>Итого</p>
            <p>
              <span className={style.amount}>{totalPrice} </span>
              <span className={style.currency}>₽</span>
            </p>
          </div>

          <button className={style.submit} disabled={!goodsOrder.length} onClick={() => dispatch(openModal())}>
            Оформить заказ
          </button>

          <div className={style.apeal}>
            <p className={style.text}>Бесплатная доставка</p>
            <button className={style.close}>Свернуть</button>
          </div>
        </div>
      </section>
    </div>
  );
};
