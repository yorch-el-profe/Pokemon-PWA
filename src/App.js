import { useEffect, useRef, useState } from "react";
import PokemonCard from "./components/PokemonCard";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  console.log(selectedPokemon);
  const selectRef = useRef(null);

  console.log("Renderizando componente");
  console.log("Estado", pokemon);

  // Se ejecuta DESPUÉS del renderizado
  // componentDidMount
  useEffect(function () {
    console.log("useEffect");

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
    <div className="container mt-4 d-flex justify-content-center">
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

      <div className="row">
        {selectedPokemon !== null ? <PokemonCard {...selectedPokemon} /> : null}
      </div>
    </div>
  );
}

export default App;
