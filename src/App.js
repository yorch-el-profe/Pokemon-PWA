import { useEffect, useRef, useState } from "react";
import PokemonCard from "./components/PokemonCard";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const selectRef = useRef(null);

  useEffect(function () {
    fetch("https://bedu-pokemon-api.herokuapp.com/pokemon")
      .then((response) => response.json())
      .then(({ data }) => setPokemon(data));
  }, []);

  function onSubmit(event) {
    event.preventDefault();
    const id = selectRef.current.value;

    fetch(`https://bedu-pokemon-api.herokuapp.com/pokemon/${id}`)
      .then((response) => response.json())
      .then(({ data }) => setSelectedPokemon(data));
  }

  return (
    <div className="container mt-4 d-flex justify-content-center flex-column align-items-center">
      <div className="col-8">
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label htmlFor="pokemon-list" className="form-label">
              Selecciona tu pokemon
            </label>
            <select ref={selectRef} className="form-select" id="pokemon-lists">
              {pokemon.map(({ name, number }) => (
                <option key={number} value={number}>
                  {name}
                </option>
              ))}
            </select>
          </div>

          <button type="submit" className="btn btn-primary">
            Obtener información
          </button>
        </form>
      </div>

      <div className="row mt-5">
        {selectedPokemon !== null ? <PokemonCard {...selectedPokemon} /> : null}
      </div>
    </div>
  );
}

export default App;
