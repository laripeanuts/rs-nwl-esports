
type GameThumbnailProps = {
  name: string;
  src: string;
  advQuantity: number;
}

export const GameThumbnail = ({
  name,
  src,
  advQuantity,
}: GameThumbnailProps) => {
  const advInfo = (quantity: number) => {
    if (quantity < 1) {
      return `Sem anúncios`;
    }

    if (quantity === 1) {
      return `${quantity} anúncio`;
    }

    return `${quantity} anúncios`;
  };

  return (
    <a href="" className="relative rounded-lg overflow-hidden">
      <img src={src} alt={name} />
      <div className="w-full pt-16 pb-4 px-4 bg-game-thumbnail-gradient absolute bottom-0 left-0 right-0">
        <strong className="font-bold text-white block">{name}</strong>
        <span className="text-zinc-300 text-sm block">{advInfo(advQuantity)}</span>
      </div>
    </a>
  )
}
