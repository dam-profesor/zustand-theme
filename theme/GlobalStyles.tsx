import { ImageProps, StyleSheet } from "react-native";

export interface ColorTheme {
    background: string;
    primaryText: string;
    buttonColor: string;
    buttonTextColor: string;
    themeImg:ImageProps;
}



export const lightColors:ColorTheme = {
    background:'#F5F5F5',
    primaryText: '#121212',
    buttonColor: '#5d2260',
    buttonTextColor: 'white',
    themeImg: require('@/assets/images/sol.png'),

}

export const darkColors:ColorTheme=  {
    background:'#121212',
    primaryText: '#F5F5F5',
    buttonColor: '#926992',
    buttonTextColor: 'black',
    themeImg: require('@/assets/images/luna.png'),

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal:10,
    }, 
    textTitle: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    ImageTitle: {
        width: 200,
        height: 200,
    },
    MainText: {
        fontSize: 16,
    },
    containerHorizontal: {
        width: '100%',
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    button: {
        padding:10,
    }
});

export default styles;


