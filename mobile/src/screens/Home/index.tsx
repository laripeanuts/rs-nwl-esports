import { useEffect, useState } from "react";

import { useNavigation } from "@react-navigation/native";
import { FlatList, Image } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

import logoImage from '../../assets/logo-nlw-esports.png';
import { Background } from "../../components/Background";
import { GameCard } from "../../components/GameCard";
import { Header } from "../../components/Header";

import { GameCardType } from "../../@types/GameCardType";

import { styles } from './styles';

export function Home() {
  const [games, setGames] = useState<GameCardType[]>([]);

  const navigation = useNavigation();

  const handleOpenGame = (game: GameCardType) => {
    navigation.navigate("game", game);
  };

  const fetchGames = async () => {
    const response = await fetch('http://192.168.1.21:3333/games');
    const data = await response.json();
    setGames(data);
  };

  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image
          source={logoImage}
          style={styles.logo}
        />
        <Header
          title="Encontre seu duo!"
          subtitle="Selecione o game que deseja jogar"
        />
        <FlatList
          data={games}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <GameCard
              data={item}
              onPress = {() => handleOpenGame(item)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentList}
        />
      </SafeAreaView>
    </Background>
  );
}