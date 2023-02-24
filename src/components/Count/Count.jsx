import { useState } from 'react';
import style from './Count.module.css';
import { useDispatch } from 'react-redux';
import { addProduct, removeProduct } from '../../store/order/orderSlice.js';

export const Count = ({ id, count }) => {
  const dispatch = useDispatch();

  const addItem = () => {
    dispatch(addProduct({ id }));
  };

  const removeItem = () => {
    dispatch(removeProduct({ id }));
  };

  return (
    <div className={style.count}>
      <button className={style.minus} onClick={removeItem}>
        -
      </button>
      <p className={style.amount}>{count}</p>
      <button className={style.plus} onClick={addItem}>
        +
      </button>
    </div>
  );
};
