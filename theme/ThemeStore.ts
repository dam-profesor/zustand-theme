import { ColorSchemeName, useColorScheme} from 'react-native';
import { create } from 'zustand';
import { ColorTheme, darkColors, lightColors } from './GlobalStyles';
import { useEffect } from 'react';

export interface ThemeState {
    currentTheme: ColorSchemeName;
    colors: ColorTheme;
    changeTheme: (theme: ColorSchemeName) => void;
}


export const useThemeState = create<ThemeState>()((set, get, state) => ({
    currentTheme: 'light',
    colors: lightColors,
    changeTheme: (theme) => {
        set({currentTheme: theme});
        if (theme === 'light') {
            set({colors: lightColors});
        } else {
            set({colors: darkColors});
        }    
    }
}));

