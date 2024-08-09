import { useEffect, useState } from "react";
import "./index.css";

const PokemonCards = () => {
  const [pokemonData, setPokemonData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const API = "https://pokeapi.co/api/v2/pokemon/bulbasaur";

  // const fetchApi = () => {
  //   fetch(API)
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setPokemonData(data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //       setError(error.message);
  //       setLoading(false);
  //     });
  // };

  const fetchApi = async () => {
    try {
      const response = await fetch(API);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setPokemonData(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1>Error: {error}</h1>
      </div>
    );
  }

  return (
    <>
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
      <div className="card-container">
        <figure>
          <img
            src={pokemonData.sprites.other.dream_world.front_default}
            alt={pokemonData.name}
          />
        </figure>
        <h1>{pokemonData.name}</h1>
        <p>Height: {pokemonData.height}</p>
        <p>Weight: {pokemonData.weight}</p>
        <p>
          Speed:{" "}
          {
            pokemonData.stats.find((stat) => stat.stat.name === "speed")
              .base_stat
          }
        </p>
      </div>
    </>
  );
};

export default PokemonCards;
