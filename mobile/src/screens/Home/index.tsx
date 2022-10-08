import { useEffect, useState } from "react";
import { FlatList, Image, View } from 'react-native';

import logoImage from '../../assets/logo-nlw-esports.png';
import { GameCard } from "../../components/GameCard";
import { Header } from "../../components/Header";

import { GameCardType } from "../../@types/GameCardType";

import { styles } from './styles';

export function Home() {
  const [games, setGames] = useState<GameCardType[]>([]);

  const fetchGames = async () => {
    const response = await fetch('http://192.168.1.21:3333/games');
    const data = await response.json();
    setGames(data);
  }

  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <View style={styles.container}>
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
          <GameCard data={item} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentList}
      />
    </View>
  );
}