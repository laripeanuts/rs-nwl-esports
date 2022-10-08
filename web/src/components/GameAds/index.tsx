import { useEffect, useState } from "react";

import { AdType } from "../../@types/AdType";

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
      const response = await fetch(`http://localhost:3333/games/${gameId}/ads`);
      const data = await response.json();
      setAds(data);
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
            <div key={ad.id}>
              <span>{ad.name}</span>
            </div>
          ))
        }
      </div>
    </div>
  )
}
