import React, {useState, useRef, useCallback} from "react";
import { MaterialCommunityIcons  } from '@expo/vector-icons'
import { StyleSheet, View, ScrollView, Pressable, Linking } from "react-native";
import { globalStyles, height, spacing, width } from "../styles/global";
import { StatusBar } from "expo-status-bar";
import ProductNet from "../screens/carousel.js";
import { NETWORK_LIST } from "../data/index.js";
import {Menu, Modal, Text, Button} from 'react-native-paper'
import { CustomerService, EnterNum } from "./customer.js";
import BottomSheet from '@gorhom/bottom-sheet';
import { useSharedState } from "./SharedStateCtx.js";
import { TapGestureHandler } from "react-native-gesture-handler";
import NetworkTabs from "./netTabs.js";
import NetInfo, { useNetInfo } from '@react-native-community/netinfo';
import {expo as app_version}  from '../app.json';


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
    const status = useNetInfo()
    const netinfo = 'none'
    console.log(status.type)
    if(undefined && (netinfo !== 'none')){
        console.log('accepted')
        
    }

    const [visible, setVisible] = useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);
    const AnchorComponent = ()=>{
        return(
            <Pressable onPress={openMenu}>
                <MaterialCommunityIcons name="dots-vertical" size={24} color='grey'/>
            </Pressable>
        )
    }

    return(
        <>
        <StatusBar style="light" backgroundColor="#3ba1ce" animated={true}/>
        <View style={[styles.container]}>
            <View style={styles.div}>
                <View style={styles.nav}>
                    <View>
                        <Text style={[globalStyles.titleText, styles.header]}>MHYLOAD</Text>
                    </View>
                    <View style={{position: 'absolute', right: 27}}>
                        <Menu
                            visible={visible}
                            onDismiss={closeMenu}
                            anchor={<AnchorComponent/>}
                        >
                            <Menu.Item title='Edit Name'/>
                        </Menu>
                    </View>
                </View>
                <View style={styles.filler}>
                    <View style={styles.content}>
                        <View>
                            <CustomerService navigation={navigation}/>
                        </View>
                        <View style={{flexDirection: 'row', gap: 10, marginHorizontal: spacing.hr + 10, justifyContent: 'space-between'}}>
                            <View>
                                <Text variant='titleLarge' style={{fontFamily: 'nunito-semi', marginTop: 0}}>
                                    <Text style={{fontFamily: 'nunito-bold'}}>Welcome</Text>, Mhyrenz
                                </Text>
                            </View>
                            <View style={{justifyContent: 'center', alignItems: 'flex-end'}}>
                                <Text variant="labelSmall" style={{color: 'grey'}}>Version: {app_version.version}</Text>
                            </View>

                        </View>
                        <View>
                            <ProductNet list={NETWORK_LIST} pressHandler={pressHandler}/>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{backgroundColor: '#fff', alignItems: 'flex-end'}}>
                
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
        flexDirection: 'row',
        marginTop: 57,
        marginBottom: 27,
        justifyContent: 'center'
    },
    header:{
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