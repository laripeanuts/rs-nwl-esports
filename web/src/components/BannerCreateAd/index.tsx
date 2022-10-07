import * as Dialog from "@radix-ui/react-dialog";
import { MagnifyingGlassPlus } from "phosphor-react";

export const BannerCreateAd = () => {
  return (
    <div className="pt-1 mt-8 bg-duo-gradient self-stretch rounded-lg overflow-hidden">
      <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
        <div>
          <strong className="text-2xl text-white font-black block ">Não encontrou seu duo?</strong>
          <span className="text-zinc-400">Publique um anúncio para encontrar novos players!</span>
        </div>
        <Dialog.Trigger className="bg-violet-500 hover:bg-violet-700 py-3 px-4 text-white font-semibold rounded-[6px] flex items-center gap-3">
          <MagnifyingGlassPlus size={24} />
          Publicar anúncio
        </Dialog.Trigger>
      </div>
    </div>
  )
}
