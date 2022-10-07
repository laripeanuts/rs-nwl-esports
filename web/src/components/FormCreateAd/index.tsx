import * as Dialog from "@radix-ui/react-dialog";

import { GameController } from "phosphor-react";
import { FormInput } from "../FormInput";
import { FormWeekButton } from "../FormWeekButton";

export const FormCreateAd = () => {
  const styleFormDiv = "flex flex-col gap-2"
  const styleFormLabel = "font-semibold"

  return (
    <form className="mt-6 flex flex-col gap-4 ">
      <div className={styleFormDiv}>
        <label
          className={styleFormLabel}
          htmlFor="game"
        >
          Qual game?
        </label>
        <FormInput
          id="game"
          placeholder="Selecione o game que deseja jogar"
          />
      </div>

      <div className={styleFormDiv}>
        <label
          className={styleFormLabel}
          htmlFor="name"
          >
          Seu nome
        </label>
        <FormInput
          id="name"
          placeholder="Como te chamam dentro do game?"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className={styleFormDiv}>
          <label
            className={styleFormLabel}
            htmlFor="yearsPlaying"
          >
            Joga há quantos anos?
          </label>
          <FormInput
            id="yearsPlaying"
            type="number"
            placeholder="Pode ser ZERO"
          />
        </div>

        <div className={styleFormDiv}>
          <label
            className={styleFormLabel}
            htmlFor="discord"
          >
            Qual seu discord?
          </label>
          <FormInput
            id="discord"
            type="text"
            placeholder="User#1234"
          />
        </div>
      </div>

      <div className="flex gap-6">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="weekDays"
            className={styleFormLabel}
          >
            Quando costuma jogar?
          </label>
          <div className="grid grid-cols-7 gap-1">
            <FormWeekButton
              title="Segunda"
            >
              S
            </FormWeekButton>
            <FormWeekButton
              title="Terça"
            >
              T
            </FormWeekButton>
            <FormWeekButton
              title="Quarta"
            >
              Q
            </FormWeekButton>
            <FormWeekButton
              title="Quinta"
            >
              Q
            </FormWeekButton>
            <FormWeekButton
              title="Sexta"
            >
              S
            </FormWeekButton>
            <FormWeekButton
              title="Sábado"
            >
              S
            </FormWeekButton>
            <FormWeekButton
              title="Domingo"
            >
              D
            </FormWeekButton>
          </div>
        </div>

        <div className="flex flex-col gap-2 flex-1">
          <label
            className={styleFormLabel}
            htmlFor="hourStart"
          >
            Qual horário do dia?
          </label>
          <div className="grid grid-cols-2 gap-2">
            <FormInput
              id="hourStart"
              type="time"
              placeholder="De"
              />
            <FormInput
              id="hourStart"
              type="time"
              placeholder="Até"
            />
          </div>
        </div>
      </div>

      <div className="flex mt-2 gap-2 text-sm">
        <FormInput type="checkbox" id="voiceChannel" className="text-[7px]"/>
        Costumo me conectar ao chat de voz
      </div>

      <footer className="flex justify-end gap-3 mt-4">
        <Dialog.Close className="bg-zinc-500 hover:bg-zinc-700 py-3 px-4 text-white font-semibold rounded-[6px] flex items-center gap-3">
          <GameController size={24} />
          Cancelar
        </Dialog.Close>
        <button className="bg-violet-500 hover:bg-violet-700 py-3 px-4 text-white font-semibold rounded-[6px] flex items-center gap-3">
          <GameController size={24} />
          Encontrar duo
        </button>
      </footer>
    </form>
  )
};
