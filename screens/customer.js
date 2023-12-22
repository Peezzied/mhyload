import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { MaterialIcons } from '@expo/vector-icons'
import {
  FlatList,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Linking,
  Pressable,
  Modal
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Tooltip, TouchableRipple, Text, Surface, Button } from 'react-native-paper'
import {spacing } from '../styles/global';
import { useSharedState } from './SharedStateCtx';
import { TapGestureHandler } from 'react-native-gesture-handler';
import { MhyForm } from './numberForm';



export function CustomerService({navigation}) {
    // const sheetRef = useRef<BottomSheet>(null)
    const {sharedState, setSharedState} = useSharedState();
    const { customerNum, setCustomerNum } = useSharedState();
    const { networkName } = useSharedState();
    
    const handlePress = ()=>{
        navigation.navigate('Account')
    }
    return(
        <Surface elevation={4} style={{marginHorizontal: spacing.hr, marginBottom: spacing.hr, overflow: 'hidden', borderRadius: 17, borderColor: '#a3a3a3', borderWidth: 1.3}}>
            <View style={{height:77, backgroundColor: '#f4f4f4', borderRadius: 17, paddingHorizontal: 27, flexDirection: 'row', gap: 17}}>
                <View style={{justifyContent: 'center'}}>
                    <MaterialIcons name="shopping-basket" size={34} color="#0b5c81"/>
                </View>
                <View style={{flex:1, alignItems: 'flex-start', justifyContent: 'center'}}>
                    <View style={{flexDirection:'row'}}>
                        { networkName && <Surface style={{backgroundColor: 'white', paddingHorizontal: 4, borderRadius: 5, marginRight: 3}}>
                            <Text variant='labelSmall' style={{letterSpacing: 0, fontFamily: 'nunito-bold'}}>{networkName}</Text>
                        </Surface>}
                        <Text variant='labelSmall' style={{fontFamily: 'nunito-semi'}}>CUSTOMER</Text>
                    </View>
                    <Text variant='bodyLarge'>{customerNum}</Text>
                </View>
                
                <Pressable onPress={()=>{
                    handlePress(0)
                    console.log('Pressed')
                    }}>
                    <Surface elevation={2} style={{position: 'absolute', right: 7, top: 21, padding: 5, borderRadius: 20, overflow: 'hidden', backgroundColor: 'white'}}>
                        <MaterialIcons name="add" size={24} color="black" />
                    </Surface>
                </Pressable>
            </View>
        </Surface>
    )
}

export function EnterNum({getRef}){
    return(
        <MhyForm getRef={getRef}/>
    )
}

  
  
  