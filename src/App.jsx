import { Header } from './components/Header/Header.jsx';
import { Navigation } from './components/Navigation/Navigation';
import { Catalog } from './components/Catalog/Catalog';
import { Footer } from './components/Footer/Footer';

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <Navigation />
        <Catalog />
      </main>
      <Footer />
    </>
  );
};
