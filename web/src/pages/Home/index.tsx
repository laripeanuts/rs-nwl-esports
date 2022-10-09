import axios from "axios";
import { useEffect, useState } from "react";

import * as Dialog from "@radix-ui/react-dialog";

import { GameType } from "../../@types/GameType";
import logoImage from "../../assets/logo.svg";
import { BannerCreateAd } from "../../components/BannerCreateAd";
import { FormCreateAd } from "../../components/FormCreateAd";
import { GameThumbnail } from "../../components/GameThumbnail";
import { Modal } from "../../components/Modal";
import "../../styles/main.css";

const Home = () => {
  const [games, setGames] = useState<GameType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("")

  const fetchGames = async () => {
    try {
      setLoading(true);
      const response = await axios(`http://localhost:3333/games`);
      setGames(response.data);
    } catch (error) {
      console.log(error);
      setError("Ocorreu um erro ao buscar os dados :(")
    } finally {
      setLoading(false);
    }
  };

  const loadGames = () => {
    if (error) {
      return (
        <div className="text-white">
          {error}
        </div>
      )
    }

    return (
      <div className="grid grid-cols-6 gap-6 mt-10">
        {
          games.map((game) => (
            <GameThumbnail
              key={game.id}
              id={game.id}
              title={game.title}
              ads={game._count.ads}
              bannerUrl={game.bannerUrl}
            />
          ))
        }
      </div>
    )
  };

  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-[40px] px-10">
      <div className="flex flex-row mx-auto items-center justify-between gap-4">
        <img src={logoImage} alt="logo" />
        <h1 className="text-6xl text-white font-black m-10">
          Seu <span className="bg-duo-gradient text-transparent bg-clip-text">duo</span> está aqui.
        </h1>
      </div>
      <div className="mx-auto justify-center">
        {loading ? null : loadGames()}
      </div>
      <Dialog.Root>
        <BannerCreateAd />
        <Modal
          title="Publique um anúncio"
        >
          <FormCreateAd games={games} />
        </Modal>
      </Dialog.Root>
    </div>
  );
};

export default Home;