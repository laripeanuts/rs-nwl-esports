import { useEffect, useState } from "react";

import * as Dialog from "@radix-ui/react-dialog";

import { GameType } from "../../@types/GameType";
import logoImage from "../../assets/logo.svg";
import { BannerCreateAd } from "../../components/BannerCreateAd";
import { FormCreateAd } from "../../components/FormCreateAd";
import { GameThumbnail } from "../../components/GameThumbnail";
import "../../styles/main.css";

const Home = () => {
  const [games, setGames] = useState<GameType[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchGames = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:3333/games");
      const data = await response.json();
      setGames(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
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
      <Dialog.Root>
        <BannerCreateAd />
        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/60 inset-0 fixed"/>
          <Dialog.Content className="bg-[#2A2634] fixed px-8 py-8 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[520px] shadow-lg shadow-black/25">
            <Dialog.Title className="text-3xl font-black">Publique um anúncio</Dialog.Title>
            <FormCreateAd />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};

export default Home;