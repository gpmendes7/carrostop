import FilterSearch from '../../components/FilterSearch';
import ProductCard from '../../components/ProductCard';
import './styles.css';

const Catalogo = () => {
  return (
    <div className="catalogo-container">
      <FilterSearch />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default Catalogo;
