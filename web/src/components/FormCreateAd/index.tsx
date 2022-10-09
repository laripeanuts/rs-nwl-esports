import { FormEvent, useState } from "react";

import axios from "axios";

import * as CheckBox from "@radix-ui/react-checkbox";
import * as Dialog from "@radix-ui/react-dialog";
import * as ToggleGroup from "@radix-ui/react-toggle-group";

import { Check, GameController } from "phosphor-react";

import { GameType } from "../../@types/GameType";

import { FormInput } from "../FormInput";

type FormCreateAdProps = {
  games: GameType[]
}

export const FormCreateAd = ({ games }: FormCreateAdProps) => {
  const [weekDays, setWeekDays] = useState<string[]>([]);
  const [useVoice, setUseVoice] = useState(false);

  const styleFormDiv = "flex flex-col gap-2"
  const styleFormLabel = "font-semibold"
  const styleFormWeekButton = `w-8 h-8 rounded-lg hover:bg-violet-500 text-white text-center font-semibold`

  const handleCreateAd = async (event: FormEvent) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData);

    const dataToSend = {
      name: data.name,
      yearsPlaying: Number(data.yearsPlaying),
      discordId: data.discord,
      weekDays: weekDays.map(Number),
      hourStart: data.hourStart,
      hourEnd: data.hourEnd,
      useVoiceChannel: useVoice
    };

    try {
      await axios.post(`http://localhost:3333/games/${data.game}/ads`, dataToSend)
      alert("Anúncio criado com sucesso!");
    } catch (error) {
      console.log(error);
      alert("Ocorreu um erro ao criar o anúncio :(")
    }
  };

  return (
    <form
      className="mt-6 flex flex-col gap-4"
      onSubmit={handleCreateAd}
    >
      <div className={styleFormDiv}>
        <label
          className={styleFormLabel}
          htmlFor="game"
        >
          Qual game?
        </label>

        <select
          id="game"
          name="game"
          className="bg-zinc-900 rounded-lg px-4 py-3 w-full text-sm placeholder:text-zinc-500 appearance-none"
          defaultValue=""
        >
          <option
            disabled
            value=""
          >
            Selecione o game que deseja jogar
          </option>
          {
            games.map((game) => (
              <option key={game.id} value={game.id}>{game.title}</option>
            ))
          }
        </select>
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
          name="name"
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
            name="yearsPlaying"
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
            name="discord"
            type="text"
            placeholder="User#1234"
          />
        </div>
      </div>

      <div className="flex gap-6">
        <div className={styleFormDiv}>
          <label
            htmlFor="weekDays"
            className={styleFormLabel}
          >
            Quando costuma jogar?
          </label>
          <ToggleGroup.Root
            type="multiple"
            className="grid grid-cols-7 gap-1"
            value={weekDays}
            onValueChange={setWeekDays}
          >
            <ToggleGroup.Item
              value="1"
              title="Segunda"
              className={`${styleFormWeekButton}  ${weekDays.includes("1") ? "bg-violet-500" : "bg-zinc-900"}`}
            >
              S
            </ToggleGroup.Item>
            <ToggleGroup.Item
              value="2"
              title="Terça"
              className={`${styleFormWeekButton}  ${weekDays.includes("2") ? "bg-violet-500" : "bg-zinc-900"}`}
            >
              T
            </ToggleGroup.Item>
            <ToggleGroup.Item
              value="3"
              title="Quarta"
              className={`${styleFormWeekButton}  ${weekDays.includes("3") ? "bg-violet-500" : "bg-zinc-900"}`}
            >
              Q
            </ToggleGroup.Item>
            <ToggleGroup.Item
              value="4"
              title="Quinta"
              className={`${styleFormWeekButton}  ${weekDays.includes("4") ? "bg-violet-500" : "bg-zinc-900"}`}
            >
              Q
            </ToggleGroup.Item>
            <ToggleGroup.Item
              value="5"
              title="Sexta"
              className={`${styleFormWeekButton}  ${weekDays.includes("5") ? "bg-violet-500" : "bg-zinc-900"}`}
            >
              S
            </ToggleGroup.Item>
            <ToggleGroup.Item
              value="6"
              title="Sábado"
              className={`${styleFormWeekButton} ${weekDays.includes("6") ? "bg-violet-500" : "bg-zinc-900"}`}
            >
              S
            </ToggleGroup.Item>
            <ToggleGroup.Item
              value="0"
              title="Domingo"
              className={`${styleFormWeekButton} ${weekDays.includes("0") ? "bg-violet-500" : "bg-zinc-900"}`}
            >
              D
            </ToggleGroup.Item>
          </ToggleGroup.Root>
        </div>

        <div className={`${styleFormDiv} flex-1`}>
          <label
            className={styleFormLabel}
            htmlFor="hourStart"
          >
            Qual horário do dia?
          </label>
          <div className="grid grid-cols-2 gap-2">
            <FormInput
              id="hourStart"
              name="hourStart"
              type="time"
              placeholder="De"
              />
            <FormInput
              id="hourEnd"
              name="hourEnd"
              type="time"
              placeholder="Até"
            />
          </div>
        </div>
      </div>

      <label className="flex mt-2 gap-2 text-sm items-center cursor-pointer">
        <CheckBox.Root
          className="p-1 w-6 h-6 rounded bg-zinc-900"
          checked={useVoice}
          onCheckedChange={
            (checked) => setUseVoice(checked ? true : false)
          }
        >
          <CheckBox.Indicator>
            <Check className="w-4 h-4 text-emerald-400" />
          </CheckBox.Indicator>
        </CheckBox.Root>
        Costumo me conectar ao chat de voz
      </label>

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
