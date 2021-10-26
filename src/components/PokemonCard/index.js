import PropTypes from "prop-types";

function PokemonCard({ name, number, types, artwork }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={artwork} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">
          #{number} {name}
        </h5>
        <p className="card-text">{types.join(", ")}</p>
      </div>
    </div>
  );
}

PokemonCard.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  types: PropTypes.arrayOf(PropTypes.string).isRequired,
  artwork: PropTypes.string.isRequired,
};

export default PokemonCard;
