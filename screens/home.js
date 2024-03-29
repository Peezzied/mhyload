import React, {useState, useRef, useCallback} from "react";
import { MaterialIcons  } from '@expo/vector-icons'
import { StyleSheet, View, Button, ScrollView, Pressable } from "react-native";
import { globalStyles, height, spacing, width } from "../styles/global";
import { StatusBar } from "expo-status-bar";
import ProductNet from "../screens/carousel.js";
import { NETWORK_LIST } from "../data/index.js";
import {Modal, Text} from 'react-native-paper'
import { CustomerService, EnterNum } from "./customer.js";
import BottomSheet from '@gorhom/bottom-sheet';
import { useSharedState } from "./SharedStateCtx.js";
import { TapGestureHandler } from "react-native-gesture-handler";
import NetworkTabs from "./netTabs.js";


export default function Home({ navigation }){
    const { customerNum } = useSharedState();
    const {sharedState, setSharedState} = useSharedState();
    const sheetRef = useRef(null);

    const pressHandler = (type)=>{
        if(customerNum==='Create New'){
            navigation.navigate('Account')
        } else{
            navigation.navigate(type)
        }
    }
    const onSingle = () => {
        setSharedState(false)
        sheetRef.current?.close()
    }

    return(
        <>
        <StatusBar style="light" backgroundColor="#3ba1ce" animated={true}/>
        <View style={[styles.container]}>
            <View style={styles.div}>
                <View style={styles.nav}>
                    <Text style={[globalStyles.titleText, styles.header]}>MHYLOAD</Text>
                </View>
                <View style={styles.filler}>
                    <View style={styles.content}>
                        <View>
                            <CustomerService navigation={navigation}/>
                        </View>
                        <View style={{flexDirection: 'row', alignContent: 'center', gap: 10, marginLeft: spacing.hr + 10}}>
                            <Text variant='titleLarge' style={{fontFamily: 'nunito-semi', marginTop: 0}}>
                                <Text style={{fontFamily: 'nunito-bold'}}>Welcome</Text>, Mhyrenz!
                            </Text>
                        </View>
                        <View>
                            <ProductNet list={NETWORK_LIST} pressHandler={pressHandler}/>
                        </View>
                    </View>
                </View>
            </View>
        </View>
        </>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: 'pink',
        flex: 1
    },
    div:{
        backgroundColor: '#f4f4f4',
        flex: 1
    },
    content:{
        marginTop: 24,
        // marginHorizontal: 24
    },
    filler:{
        flex: 1,
        
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        backgroundColor: '#fff'
    },
    cards:{
        marginHorizontal: 47
    },
    nav:{
    },
    header:{
        marginTop: 57,
        marginBottom: 27
    },
    backDrop:{
        width: width,
        height: height + 100,
        position: 'absolute',
        zIndex: 10,
        backgroundColor: '#000',
        opacity: 0.3,
    }
})