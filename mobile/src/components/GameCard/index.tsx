import { LinearGradient } from "expo-linear-gradient";
import { GestureResponderEvent, ImageBackground, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { THEME } from "../../theme";

import { GameCardType } from "../../@types/GameCardType";

import { styles } from './styles';

interface Props extends TouchableOpacityProps {
  data: GameCardType;
  onPress?: ((event: GestureResponderEvent) => void) | undefined
}

export function GameCard({ data, onPress, ...rest }: Props) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
    >
      <ImageBackground
        style={styles.cover}
        source={{ uri: data.bannerUrl }}
      >
        <LinearGradient
          colors={THEME.COLORS.FOOTER}
          style={styles.footer}
        >
          <Text style={styles.name}>
            {data.title}
          </Text>
          <Text style={styles.ads}>
            {data._count.ads}
          </Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}