import './styles.css';

const FilterSearch = () => {
  return (
    <div className="base-card search-card">
      <input type="text" placeholder="Digite sua busca" />
      <button className="btn btn-secondary">
        <h6>Buscar</h6>
      </button>
    </div>
  );
};

export default FilterSearch;
