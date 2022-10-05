import "./styles/main.css";

import { MagnifyingGlassPlus } from "phosphor-react";
import logoImage from "./assets/logo.svg";
import { GameThumbnail } from "./components/GameThumbnail";

const App = () => {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImage} alt="logo" />
      <h1 className="text-6xl text-white font-black m-10">
        Seu <span className="bg-duo-gradient text-transparent bg-clip-text">duo</span> está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-10">
        <GameThumbnail
          src="assets/mock-game-01.png"
          name="League of Legends"
          advQuantity={6}
        />
        <GameThumbnail
          src="assets/mock-game-02.png"
          name="Apex Legends"
          advQuantity={1}
        />
        <GameThumbnail
          src="assets/mock-game-03.png"
          name="Counter Strike"
          advQuantity={0}
        />
        <GameThumbnail
          src="assets/mock-game-04.png"
          name="World of Warcraft"
          advQuantity={2}
        />
        <GameThumbnail
          src="assets/mock-game-05.png"
          name="Dota"
          advQuantity={5}
        />
        <GameThumbnail
          src="assets/mock-game-06.png"
          name="Fortnite"
          advQuantity={0}
        />
      </div>

      <div className="pt-1 mt-8 bg-duo-gradient self-stretch rounded-lg overflow-hidden">
        <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
          <div>
            <strong className="text-2xl text-white font-black block ">Não encontrou seu duo?</strong>
            <span className="text-zinc-400">Publique um anúncio para encontrar novos players!</span>
          </div>
          <button className="bg-violet-500 hover:bg-violet-700 py-3 px-4 text-white rounded-[6px] flex items-center gap-3">
            <MagnifyingGlassPlus size={24} />
            Publicar anúncio
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;