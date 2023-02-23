import style from './Navigation.module.css';
import classNames from 'classnames';
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { API_URL } from "../../config.js";
import { Container } from '../Container/Container.jsx';
import { changeCategory, categoryRequest } from '../../store/category/categorySlice.js';

export const Navigation = () => {
  const { category, activeCategory } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(categoryRequest());
  }, [])

  return (
    <nav className={style.navigation}>
      <Container className={style.container}>
        <ul className={style.list}>
          {category?.map((el, index) => (
            <li key={el.title}>
              <button
                className={classNames(style.button, activeCategory === index ? style.button_active : '')}
                style={{
                  backgroundImage: `url(${API_URL}/${el.image})`,
                }}
                onClick={() => dispatch(changeCategory(index))}
              >
                {el.rus}
              </button>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
};
