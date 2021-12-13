import './styles.css';

import CarrImg from '../../assets/images/carro-card.png';

const ProductCard = () => {
  return (
    <div className="base-card product-card">
      <img src={CarrImg} alt="Nome do carro" />
      <h6>Audi Supra TT</h6>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
        nisi
      </p>
      <div className="btn-container">
        <button className="btn btn-secondary">
          <h6>Comprar</h6>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
