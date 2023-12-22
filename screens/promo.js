import React, {memo, useMemo, useState} from "react";
import { StyleSheet, View, FlatList, Pressable } from "react-native";
import { Text } from "react-native-paper";
import { globalStyles, width } from "../styles/global";
import { Surface } from "react-native-paper";
import { globeIndex } from "../data/globe_index";
import RNImmediatePhoneCall from 'react-native-immediate-phone-call'
import { globalNetworkStyles } from "../styles/global_network";
import { useSharedState } from "./SharedStateCtx";
import { processAction } from "./subPromo";
import NetworkTabs from "./netTabs";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { formatData } from "../utils";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { RegularLoad } from "./regularLoad";

const Tab = createMaterialTopTabNavigator()
const topRadius = 20
const Promos = memo(({navigation, data, prefix, theme})=>{
    console.log('Promos has been rendered.')
    const {customerNum} = useSharedState()
    const route = useRoute()
    const insets = useSafeAreaInsets()
    const pressHandler = (type, method, id, prefix, title)=>{
        processAction(type, method, data, navigation, customerNum, route.name, id, prefix, title)
    }
    return(
        <>
        <StatusBar backgroundColor={theme} animated={true}/>
        <View style={{flex: 1, backgroundColor: '#fff'}}>
        <FlatList
                    data={formatData(data, 2)}
                    contentContainerStyle={{ flexDirection: 'column', gap: 7, marginHorizontal: 22, marginTop: insets.top- 10}}
                    numColumns={2}
                    keyExtractor={i => i.id}
                    renderItem={({item})=> {
                        if (!item.empty) {
                            return(
                                <View style={{flex: 1, marginHorizontal: 5, marginTop: 1}}>
                                    <Pressable onPress={()=>{
                                        pressHandler(item.action, item.action_payload, item.id, prefix, item.title)
                                    }}>
                                    <View elevation={3} style={[globalNetworkStyles.card, item.action === 'NEXT' ? {backgroundColor: '#e9f1f3'} : null]}>
                                        <View style={globalNetworkStyles.cardWrapper}>
                                            <View>
                                                <Text numberOfLines={1} variant='titleLarge' style={{fontFamily: 'lato-black'}}>{item.title}</Text>
                                            </View>
                                            <View style={globalNetworkStyles.cardBottom}>
                                                <View>
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
})
const CallAndText = memo(({navigation, data, prefix, theme})=>{
    console.log('CallnText has been rendered.')
    const {customerNum} = useSharedState()
    const route = useRoute()
    const insets = useSafeAreaInsets()
    const pressHandler = (type, method, id, prefix, title)=>{
        processAction(type, method, data, navigation, customerNum, route.name, id, prefix, title)
    }
    return(
        <>
        <StatusBar backgroundColor={theme} animated={true}/>
        <View style={{flex: 1, backgroundColor: '#fff'}}>
        <FlatList
                    data={formatData(data, 2)}
                    contentContainerStyle={{ flexDirection: 'column', gap: 7, marginHorizontal: 22, marginTop: insets.top- 10}}
                    numColumns={2}
                    keyExtractor={i => i.id}
                    renderItem={({item})=> {
                        if (!item.empty) {
                            return(
                                <View style={{flex: 1, marginHorizontal: 5}}>
                                    <Pressable onPress={()=>{
                                        pressHandler(item.action, item.action_payload, item.id, prefix, item.title)
                                    }}>
                                    <View elevation={3} style={[globalNetworkStyles.card, item.action === 'NEXT' ? {backgroundColor: '#e9f1f3'} : null]}>
                                        <View style={globalNetworkStyles.cardWrapper}>
                                            <View>
                                                <Text numberOfLines={1} variant='titleLarge' style={{fontFamily: 'lato-black'}}>{item.title}</Text>
                                            </View>
                                            <View style={globalNetworkStyles.cardExtra}>
                                                <View>
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
})
const Promo = ({promo, callText, prefix, method, theme})=>{
    const navigation = useNavigation()
    const route = useRoute()
    return(
        <Tab.Navigator keyboardDismissMode='on-drag' screenOptions={{
            tabBarIndicatorStyle: {backgroundColor: 'black'},
            tabBarLabelStyle: {fontFamily: 'nunito-bold', textTransform: 'none', fontSize: 15},
            swipeEnabled: false,
            tabBarAndroidRipple: {borderless: false},
            tabBarStyle: {elevation: 0, borderBottomWidth: 1, borderColor: '#e2e2e2'},
            tabBarIndicatorStyle: {backgroundColor: '#1257cf', borderTopRightRadius: topRadius, borderTopLeftRadius: topRadius, height: 4}
        }}>
            <Tab.Screen name="Load">
                {()=> <RegularLoad loadMethod={method}/>}
            </Tab.Screen>
            <Tab.Screen name="Internet">
                {() => <Promos 
                    navigation={navigation} 
                    data={promo} 
                    prefix={prefix}
                    theme={theme}
                />}
            </Tab.Screen>
            <Tab.Screen name="Regular">
                {() => <CallAndText 
                    navigation={navigation} 
                    data={callText}
                    prefix={prefix}
                    theme={theme}
                />}
            </Tab.Screen>
        </Tab.Navigator>
    )
}
export default Promo
