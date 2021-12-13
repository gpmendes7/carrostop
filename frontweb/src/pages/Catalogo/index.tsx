import FilterSearch from '../../components/FilterSearch';
import ProductCard from '../../components/ProductCard';
import './styles.css';

const Catalogo = () => {
  return (
    <div className="catalogo-container">
      <FilterSearch />
      <div className="container my-4">
        <div className="row">
          <div className="col-sm-6 col-lg-4">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4">
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalogo;
