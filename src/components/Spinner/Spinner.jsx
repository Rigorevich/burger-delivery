import style from './Spinner.module.css';

export const Spinner = () => (
  <div className={style['lds-ring']}>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
);
