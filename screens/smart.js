import React from "react";
import { StyleSheet, View, FlatList, Pressable } from "react-native";
import { Text } from "react-native-paper";
import { globalStyles, width } from "../styles/global";
import { Surface } from "react-native-paper";
import { smartIndex } from "../data/smart_index";
import RNImmediatePhoneCall from 'react-native-immediate-phone-call'
import { globalNetworkStyles } from "../styles/global_network";

export default function Smart({navigation, route}){
    const transaction = (type, method)=>{
        if(type==='PURCHASE'){
            console.log('PURCHASING')
            RNImmediatePhoneCall.immediatePhoneCall(`*${method}#`);
        }
        else if(type==='NEXT'){
            const index = smartIndex.findIndex(obj => obj.action === 'NEXT');
            console.log(index); // Output: 2
            navigation.navigate('Promo', {dataGet: smartIndex[index].action_payload, title: smartIndex[index].title, net: route.name})
            
        }
    }
    return(
        <View style={globalNetworkStyles.container}>
            <View style={{marginTop: 7, marginLeft: 22}}> 
                <FlatList
                    data={smartIndex}
                    contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10}}
                    keyExtractor={i => i.id}
                    renderItem={({item})=>
                        (
                                <Pressable onPress={()=>{
                                    transaction(item.action, item.action_payload)
                                }}>
                                <View elevation={3} style={[globalNetworkStyles.card, { marginLeft: item.id % 2 === 0 ? 0 : 5}]}>
                                    <View style={globalNetworkStyles.cardWrapper}>
                                        <View>
                                            <Text variant='titleLarge' style={{fontFamily: 'lato-black'}}>{item.title}</Text>
                                        </View>
                                        <View style={globalNetworkStyles.cardExtra}>
                                            <View>
                                                <Text style={globalNetworkStyles.cardExtraTitle}>{item.extra}</Text>
                                            </View>
                                            <View style={globalNetworkStyles.cardPrice}>
                                                <Text style={globalNetworkStyles.cardPriceChr}>P</Text>
                                                <Text style={globalNetworkStyles.cardPriceTitle} variant='titleLarge'>{item.price}</Text>
                                            </View>
                                            
                                        </View>
                                    </View>
                                    
                                </View>
                                </Pressable>
                           
                        )
                            
                    }
                />
            </View>
            
        </View>
    )
}
