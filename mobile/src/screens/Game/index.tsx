import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Entypo } from '@expo/vector-icons';
import logoImage from "../../assets/logo-nlw-esports.png";
import { Background } from "../../components/Background";
import { Header } from "../../components/Header";

import { AdType } from "../../@types/AdType";
import { GameCardType } from "../../@types/GameCardType";

import { DuoCard } from "../../components/DuoCard";
import { DuoMatch } from "../../components/DuoMatch";
import { THEME } from "../../theme";
import { styles } from './styles';

export function Game() {
  const [ads, setAds] = useState<AdType[]>();
  const [duoSelected, setDuoSelected] = useState("");

  const route = useRoute();
  const game = route.params as GameCardType;
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  }

  const fetchAds = async () => {
    const response = await fetch(`http://192.168.1.21:3333/games/${game.id}/ads`);
    const data = await response.json();
    setAds(data);
  };

  const fetchDiscordUser = async (adId: string) => {
    const response = await fetch(`http://192.168.1.21:3333/ads/${adId}/discord`);
    const data = await response.json();
    setDuoSelected(data.discord);
  };

  useEffect(() => {
    fetchAds();
  }, []);

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
          resizeMode="cover"
        />
        <Header
          title={game.title}
          subtitle="Conecte-se e comece a jogar!"
        />
        <FlatList
          data={ads}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <DuoCard
              data={item}
              onConnect={() => fetchDiscordUser(item.id)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={true}
          style={styles.containerList}
          contentContainerStyle={styles.contentList}
          ListEmptyComponent={
            <Text style={styles.listEmpty}>
              Nenhum anúncio por enquanto...
            </Text>
          }
        />
        <DuoMatch
          onClose={() => setDuoSelected("")}
          visible={duoSelected.length > 0}
          discord={duoSelected}
        />
      </SafeAreaView>
    </Background>
  );
}