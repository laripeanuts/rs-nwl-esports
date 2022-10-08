import * as Dialog from "@radix-ui/react-dialog";
import { GameAds } from "../GameAds";
import { Modal } from "../Modal";

interface GameThumbnailProps {
  id: string;
  title: string;
  ads: number;
  bannerUrl: string;
}

export const GameThumbnail = ({
  id,
  title,
  bannerUrl,
  ads
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
    <Dialog.Root>
      <div className="relative rounded-lg overflow-hidden">
        <Dialog.Trigger className="hover:bg-black">
          <img src={bannerUrl} alt={title} className="hover:opacity-50 transition duration-200 ease-in-out"/>
          <div className="w-full pt-16 pb-4 px-4 bg-game-thumbnail-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">{title}</strong>
            <p className="text-zinc-300 text-sm block">{advInfo(ads)}</p>
          </div>
        </Dialog.Trigger>
      </div>
      <Modal
        title={title}
      >
        <div className="relative rounded-lg overflow-hidden mt-4">
          <GameAds gameId={id} />
        </div>
      </Modal>
    </Dialog.Root>
  )
}
