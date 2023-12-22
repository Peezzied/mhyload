import { StyleSheet } from "react-native";
import { width } from "./global";

const CARD_WIDTH = '100%'
const CARD_HEIGHT = width / 4.2
export const globalNetworkStyles = StyleSheet.create({
    container: {
        backgroundColor: '#fff', flex: 1
    },
    content: {
        marginTop: 7, marginLeft: 22
    },
    card: {
        backgroundColor: '#f4f4f4', borderRadius: 15, height: CARD_HEIGHT, marginBottom: 5, width: '100%'
    },
    cardInvisible: {
        backgroundColor: 'transparent', borderRadius: 15, height: CARD_HEIGHT, marginBottom: 5, width: '100%'
    },
    cardWrapper: {
        margin: 10, marginHorizontal: 13, flex: 1, justifyContent: 'space-between'
    },
    cardBottom: {
        flexDirection: 'row', justifyContent: 'space-between', marginBottom: 3, alignItems: 'center'
    },
    cardPrice: {
        flexDirection: 'row', gap: 2
    },
    cardExtraTitle: {
        fontFamily: 'lato-black', textTransform: 'uppercase', fontSize: 11
    },
    cardExtraTitleNext: {
        fontFamily: 'nunito-bold', color: '#6e7273'
    },
    cardPriceChr: {
        fontFamily: 'nunito-bold', fontSize: 12, paddingTop: 1, color: '#1eaa49'
    },
    cardPriceTitle: {
        fontFamily: 'nunito-bold', color: '#1eaa49'
    }
})