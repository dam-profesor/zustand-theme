import styles from "@/theme/GlobalStyles";
import { useThemeState } from "@/theme/ThemeStore";
import { Text, useColorScheme, View, Image, Pressable } from "react-native";

export default function Index() {
  const colors = useThemeState(state => state.colors);
  const currentTheme = useThemeState(state => state.currentTheme);
  const changeTheme = useThemeState(state => state.changeTheme)  
  
  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <Text style={[styles.textTitle,{color: colors.primaryText}]}>Menú de cambio de Tema</Text>
      <Image style={styles.ImageTitle} source={colors.themeImg} />
      <Text style={[styles.textTitle,{color: colors.primaryText}]}>
        {currentTheme}</Text>
        <Text style={[styles.MainText,{color: colors.primaryText}]}> {JSON.stringify(colors,null,2)}
        </Text>
      
      <View style={styles.containerHorizontal}>
        <Pressable style={[styles.button, {backgroundColor: colors.buttonColor}]} onPress={() => changeTheme('light')}>
          <Text style={{color: colors.buttonTextColor}}>LIGHT MODE</Text></Pressable>
        <Pressable style={[styles.button, {backgroundColor: colors.buttonColor}]} onPress={() => changeTheme('dark')}>
          <Text style={{color: colors.buttonTextColor}}>DARK MODE</Text></Pressable>
      </View>
    </View>
  );
}
