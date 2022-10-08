import { GameController } from 'phosphor-react-native';
import { Text, TouchableOpacity, View } from 'react-native';

import { DuoInfo } from "../DuoInfo";

import { AdType } from "../../@types/AdType";

import { THEME } from "../../theme";
import { styles } from './styles';

export interface DuoCardProps {
  data: AdType;
  onConnect: () => void;
}

export const DuoCard = ({data, onConnect}: DuoCardProps) => {
  const yearsPlaying = () => {
    if(data.yearsPlaying > 1) {
      return `${data.yearsPlaying} anos`;
    }

    if(data.yearsPlaying = 1) {
      return `${data.yearsPlaying} ano`;
    }

    return `Menos de um ano`;
  }

  const weekDays = () => {
    const howManyDay = data.weekDays.length;

    if (howManyDay > 1) {
      return `${howManyDay} dias`;
    }

    if (howManyDay === 1) {
      return `${howManyDay} dia`;
    }

    return `Variado`;
  }

  return (
    <View style={styles.container}>
      <DuoInfo
        label="Nome"
        value={data.name}
      />
      <DuoInfo
        label="Tempo de jogo"
        value={yearsPlaying()}
      />
      <DuoInfo
        label="Disponibilidade"
        value={`${weekDays()} \u2022 ${data.hourStart.slice(0,2)}h - ${data.hourEnd.slice(0,2)}h`}
      />
      <DuoInfo
        label="Chamada de áudio"
        value={data.useVoiceChannel ? 'Sim' : 'Não'}
        colorValue={data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={onConnect}
      >
        <GameController
          size={20}
          color={THEME.COLORS.TEXT}
        />
        <Text style={styles.buttonText}>
          conectar
        </Text>
      </TouchableOpacity>
    </View>
  );
}