import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';
import { useForm } from "../../hooks/useForm";
import { getHeroeByName } from "../helpers";
import { HeroCard } from "../components/HeroCard";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);
  const heros = getHeroeByName(q);

  const { searchText, onInputChange } = useForm({
    searchText: q
  });
  const onSearchSubmit = (event) => {
    event.preventDefault();
    if (searchText.trim().length <= 1) return;
    navigate(`?q=${searchText}`);
  }
  return (
    <>
      <div className="ProductList">
        <form onSubmit={onSearchSubmit}>
          <input
            type="text"
            placeholder="Buscar"
            name="searchText"
            autoComplete="off"
            value={searchText}
            onChange={onInputChange}
          />
          <button
            type="submit"
          >
            Buscar
          </button>
        </form>
        {(!!q && heros.length == 0) && (
          <div>Ninguna Coincidencia</div>
        )}
        {
          heros.map(hero => (
            <HeroCard key={hero.id} {...hero} />
          ))
        }
      </div>
    </>
  )
}
