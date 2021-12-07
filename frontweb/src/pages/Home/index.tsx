import { Link } from 'react-router-dom';
import { ReactComponent as MainImage } from '../../assets/images/carro-home.svg';
import ButtonIcon from '../../components/Button';
import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="base-card home-card">
        <div className="home-image-container">
          <MainImage />
        </div>
        <div className="home-content-container">
          <h1>O carro perfeito para você</h1>
          <p>
            Conheça nossos carros e dê mais um passo na realização do seu sonho.
          </p>
        </div>
      </div>
      <div className="base-card home-subcard">
        <Link to="/catalogo">
          <ButtonIcon />
        </Link>
        <p>Começe agora a navegar</p>
      </div>
    </div>
  );
};

export default Home;
