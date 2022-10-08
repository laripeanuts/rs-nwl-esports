import { useNavigation, useRoute } from "@react-navigation/native";
import { Image, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Entypo } from '@expo/vector-icons';
import logoImage from "../../assets/logo-nlw-esports.png";
import { Background } from "../../components/Background";
import { Header } from "../../components/Header";

import { GameCardType } from "../../@types/GameCardType";

import { THEME } from "../../theme";
import { styles } from './styles';

export function Game() {
  const route = useRoute();
  const game = route.params as GameCardType;
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  }

  return (
    <Background>
      <SafeAreaView
        style={styles.container}
      >
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo
              name="chevron-thin-left"
              color={THEME.COLORS.CAPTION_300}
            />
          </TouchableOpacity>
          <Image
            source={logoImage}
            style={styles.logo}
          />
          <View style={styles.right} />
        </View>
        <Image
          source={{ uri: game.bannerUrl }}
          style={styles.cover}
        />
        <Header
          title={game.title}
          subtitle="Conecte-se e comece a jogar!"
        />
      </SafeAreaView>
    </Background>
  );
}