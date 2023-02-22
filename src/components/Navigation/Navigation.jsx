import style from './Navigation.module.css';
import classNames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from '../Container/Container.jsx';
import { changeCategory } from '../../store/category/categorySlice.js';

export const Navigation = () => {
  const { category, activeCategory } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  return (
    <nav className={style.navigation}>
      <Container className={style.container}>
        <ul className={style.list}>
          {category?.map((el, index) => (
            <li key={el.title}>
              <button
                className={classNames(style.button, activeCategory === index ? style.button_active : '')}
                style={{
                  backgroundImage: `url(${el.image})`,
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
