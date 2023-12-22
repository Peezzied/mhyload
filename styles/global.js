import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

export const globalStyles = StyleSheet.create({
    titleText: {
        color: '#333',
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'lato-black'
    },
    titleTextDef: {
        color: '#333',
        fontSize: 20,
        fontFamily: 'lato-black'
    },
    paragraph:{
        fontFamily: 'nunito'
    }
})
export const { width, height } = Dimensions.get('window');
export const spacing = {
    hr: 34
}

export const networkPrefix = {
    smartPrx: ['0907', '0908', '0909', '0910', '0911', '0912', '0913', '0914', '0918', '0919', '0920', '0921', '0928', '0929', '0930', '0938', '0939', '0940', '0946', '0947', '0948', '0949', '0950', '0951', '0961', '0963', '0968', '0969', '0970', '0981', '0989', '0992', '0998', '0999'],
    globePrx: ['0904', '0905', '0906', '0915', '0916', '0917', '0926', '0927', '0935', '0936', '0937', '0945', '0953', '0954', '0955', '0956', '0965', '0966', '0967', '0975', '0977', '0978', '0979', '0980', '0994', '0995', '0996', '0997']
}
