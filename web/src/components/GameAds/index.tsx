import { useEffect, useState } from "react";
import axios from "axios";

import { AdType } from "../../@types/AdType";
import { AdCard } from "../AdCard";

type GameAdsProps = {
  gameId: string;
}

export const GameAds = ({ gameId }: GameAdsProps) => {
  const [ads, setAds] = useState<AdType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("")

  const fetchAds = async () => {
    try {
      setLoading(true);
      const response = await axios(`http://localhost:3333/games/${gameId}/ads`);
      setAds(response.data);
    } catch (error) {
      console.log(error);
      setError("Ocorreu um erro ao buscar os dados :(")
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAds();
  }, []);

  return (
    <div>
      <span className="text-zinc-400">Conecte-se e comece a jogar!</span>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {
          ads.map((ad: AdType) => (
            <AdCard
              ad={ad}
              key={ad.id}
            />
          ))
        }
      </div>
    </div>
  )
}
