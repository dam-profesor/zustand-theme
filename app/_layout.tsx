import { useThemeState } from "@/theme/ThemeStore";
import { Stack } from "expo-router";
import { useEffect } from "react";
import { useColorScheme } from "react-native";

export default function RootLayout() {

    const colorScheme = useColorScheme();
    const changeTheme = useThemeState(state => state.changeTheme)  

    useEffect(()=>{
      changeTheme(colorScheme);
    },[colorScheme])
  


  
  return <Stack />;
}
