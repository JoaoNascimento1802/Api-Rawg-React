import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './DarkSoulsGames.css';

const DarkSoulsGames = () => {
  const [games, setGames] = useState([]);
  const apiKey = process.env.REACT_APP_RAWG_API_KEY;

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get('https://api.rawg.io/api/games', {
          params: {
            key: apiKey,
            search: 'dark souls'
          }
        });

        const results = response.data.results;

        const gamesWithAuthors = await Promise.all(
          results.map(async (game) => {
            const gameDetails = await axios.get(`https://api.rawg.io/api/games/${game.id}`, {
              params: { key: apiKey }
            });

            return {
              id: game.id,
              name: game.name,
              image: game.background_image,
              developer: gameDetails.data.developers?.[0]?.name || 'Desconhecido'
            };
          })
        );

        setGames(gamesWithAuthors);
      } catch (error) {
        console.error('Erro ao buscar jogos:', error);
      }
    };

    fetchGames();
  }, [apiKey]);

  return (
    <div className="container">
      <h1>Jogos Dark Souls</h1>
      <div className="grid">
        {games.map((game) => (
          <div key={game.id} className="card">
            <img src={game.image} alt={game.name} />
            <h2>{game.name}</h2>
            <p><strong>ID:</strong> {game.id}</p>
            <p><strong>Desenvolvedor:</strong> {game.developer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DarkSoulsGames;
