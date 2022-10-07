import { useEffect, useState } from "react";

import { GameType } from "../../@types/GameType";
import logoImage from "../../assets/logo.svg";
import { BannerCreateAdd } from "../../components/BannerCreateAd";
import { GameThumbnail } from "../../components/GameThumbnail";

import "../../styles/main.css";

const Home = () => {
  const [games, setGames] = useState<GameType[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchGames = async () => {
    const response = await fetch("http://localhost:3333/games");
    const data = await response.json();
    console.log(data);
    setGames(data);
  };

  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20 px-10">
      <img src={logoImage} alt="logo" />
      <h1 className="text-6xl text-white font-black m-10">
        Seu <span className="bg-duo-gradient text-transparent bg-clip-text">duo</span> está aqui.
      </h1>
      <div className="grid grid-cols-6 gap-6 mt-10">
        {loading ? null : games.map((game) => (
          <GameThumbnail
            key={game.id}
            name={game.title}
            advQuantity={game._count.ads}
            src={game.bannerUrl}
          />
        ))}
      </div>
      <BannerCreateAdd />
    </div>
  );
};

export default Home;