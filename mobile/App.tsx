import {
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black, useFonts
} from '@expo-google-fonts/inter';
import { StatusBar } from "expo-status-bar";

import { Background } from "./src/components/Background";
import { Loading } from "./src/components/Loading";
import { Home } from "./src/screens/Home";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  });

  return (
    <Background>
      <StatusBar
        style="auto"
      />
      {fontsLoaded ? <Home /> : <Loading />}
    </Background>
  );
}
