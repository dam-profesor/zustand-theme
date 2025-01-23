import { StyleSheet } from "react-native";

export interface ColorTheme {
    background: string;
    primaryText: string;
}



export const lightColors:ColorTheme = {
    background:'#F5F5F5',
    primaryText: '#121212'
}

export const darkColors:ColorTheme=  {
    background:'#121212',
    primaryText: '#F5F5F5'
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default styles;


