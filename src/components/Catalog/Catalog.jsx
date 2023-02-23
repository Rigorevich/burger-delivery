import { Order } from '../Order/Order';
import { Container } from '../Container/Container';
import { CatalogProduct } from '../CatalogProduct/CatalogProduct';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './Catalog.module.css';
import { productRequest } from '../../store/product/productSlice.js';

export const Catalog = () => {
  const { products } = useSelector((state) => state.product);
  const { category, activeCategory } = useSelector((state) => state.category);

  const dispatch = useDispatch();

  useEffect(() => {
    if (category.length) {
      dispatch(productRequest(category[activeCategory].title));
    }
  }, [category, activeCategory]);

  return (
    <section className={style.catalog}>
      <Container className={style.container}>
        <Order />
        <div className={style.wrapper}>
          <h2 className={style.title}>{category[activeCategory]?.rus}</h2>
          <div className={style.wrap_list}>
            <ul className={style.list}>
              {products?.map((item) => (
                <li key={item.title} className={style.item}>
                  <CatalogProduct {...item} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};
