import { GameController } from "phosphor-react";
import { AdType } from "../../@types/AdType";

type AdCardProps = {
  ad: AdType;
}

export const AdCard = ({ad}: AdCardProps) => {
  return (
    <div className="bg-zinc-900 rounded-lg p-4 text-sm flex flex-col gap-4 mb-4">
      <div className="flex flex-col gap-1">
        <span>Nome</span>
        <span className="font-bold">{ad.name}</span>
      </div>
      <div className="flex flex-col gap-1">
        <span>Tempo de jogo</span>
        <span className="font-bold break">{`${ad.yearsPlaying} ano(s)`}</span>
      </div>
      <div className="flex flex-col gap-1">
        <span>Chamada de áudio?</span>
        <span className={ad.useVoiceChannel
          ? "text-green-500 font-bold"
          : "text-red-500 font-bold"
        }
        >
          {
          ad.useVoiceChannel
            ? "Sim"
            : "Não"
        }</span>
      </div>
      <button className="bg-violet-500 hover:bg-violet-700 justify-center items-center rounded-md flex w-full py-2">
        <GameController
          size={20}
          color="#fff"
        />
        <span className="ml-2">Conectar</span>
      </button>
    </div>
  )
}
