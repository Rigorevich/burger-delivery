import { useState } from 'react';
import style from './Count.module.css';

export const Count = ({ count }) => {
  const [countState, setCount] = useState(count);

  const addItem = () => {
    setCount(countState + 1);
  };

  const removeItem = () => {
    if (countState > 1) {
      setCount(countState - 1);
    }
  };

  return (
    <div className={style.count}>
      <button className={style.minus} onClick={removeItem} disabled={countState === 1}>
        -
      </button>
      <p className={style.amount}>{countState}</p>
      <button className={style.plus} onClick={addItem}>
        +
      </button>
    </div>
  );
};
