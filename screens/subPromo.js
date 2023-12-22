import * as React from "react";
import { StyleSheet, View, FlatList, Pressable } from "react-native";
import { Text } from "react-native-paper";
import { width } from "../styles/global";
import { globalNetworkStyles } from "../styles/global_network";
import { useSharedState } from "./SharedStateCtx";
import { formatData } from "../utils";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import RNImmediatePhoneCall from 'react-native-immediate-phone-call'

export function SubPromo({route, navigation}){
    const dataGet = route.params.dataGet
    const newTitle = route.params.title
    const network = route.params.net
    const prefix = route.params.prefix
    const {customerNum} = useSharedState()

    
    
    navigation.setOptions({
        title: `${newTitle}`
    })
    return(
        <>
        <View style={{flex: 1, backgroundColor: '#fff'}}>
        <FlatList
                    data={formatData(dataGet, 2)}
                    contentContainerStyle={{ flexDirection: 'column', gap: 7, marginHorizontal: 22}}
                    numColumns={2}
                    keyExtractor={i => i.id}
                    renderItem={({item})=> {
                        if (!item.empty) {
                            return(
                                <View style={{flex: 1, marginHorizontal: 5, marginTop: 2}}>
                                    <Pressable onPress={()=>{
                                        const pressHandler = (type, method, id, prefix, title)=>{
                                            processAction(type, method, dataGet, navigation, customerNum, route.name, id, prefix, title)
                                        }
                                        pressHandler(item.action, item.action_payload, item.id, prefix, item.title)
                                    }}>
                                    <View elevation={3} style={[globalNetworkStyles.card, item.action === 'NEXT' ? {backgroundColor: '#e9f1f3'} : null]}>
                                        <View style={globalNetworkStyles.cardWrapper}>
                                            <View>
                                                <Text numberOfLines={1} variant='titleLarge' style={{fontFamily: 'lato-black'}}>{item.title}</Text>
                                            </View>
                                            <View style={globalNetworkStyles.cardBottom}>
                                                <View style={{width: 60}}>
                                                    <Text style={globalNetworkStyles.cardExtraTitle}>{item.extra}</Text>
                                                    
                                                </View>
                                                <View style={globalNetworkStyles.cardPrice}>
                                                    { item.action === 'PURCHASE' && <Text style={globalNetworkStyles.cardPriceChr}>P</Text> }
                                                    { item.action === 'PURCHASE' && <Text style={globalNetworkStyles.cardPriceTitle} variant='titleLarge'>{item.price}</Text>}
                                                    {item.action === 'NEXT' && <Text  variant='titleMedium' style={globalNetworkStyles.cardExtraTitleNext}>Show Promo</Text>}
                                                </View>
                                                
                                            </View>
                                        </View>
                                        
                                    </View>
                                    </Pressable>
                                </View>
                            )
                        } else {
                            return(
                                <View style={{flex: 1, marginHorizontal: 7}}>
                                    <View style={[globalNetworkStyles.cardInvisible]}>
                                    </View>
                                </View>
                            )
                        }
                    }
                            
                    }
                    
                />
        </View>
        </>
    )
}
export const processAction = (type, method, data, navigation, customerNum, routeName, id, prefix, title)=>{
    // const { customerNum } = useSharedState();
    // const { isNext, setIsNext } = useState()
    const transaction = (type, method, data, navigation, id, prefix)=>{
        if(type==='PURCHASE'){
            console.log('PURCHASING')
            const mmidCode = method.replace('[]', customerNum)
            console.log(customerNum)
            console.log(`*${prefix}*${mmidCode}#`)
            RNImmediatePhoneCall.immediatePhoneCall(`*${prefix}*${mmidCode}#`);
        }
        else if(type==='NEXT'){
            const index = data.findIndex(obj => obj.id === id);
            if (title===data[index].title){
                console.log(index); // Output: 2
                navigation.navigate('SubPromo', {dataGet: data[index].action_payload, title: data[index].title, net: routeName, prefix: prefix})
            }
            
        }
    }
    transaction(type, method, data, navigation, id, prefix)
}