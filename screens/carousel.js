import React from 'react';
import { MaterialCommunityIcons  } from '@expo/vector-icons'
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Linking,
  PermissionsAndroid
} from 'react-native';
import { globalStyles, spacing, width } from '../styles/global';
import { LinearGradient } from 'expo-linear-gradient';
import { Tooltip, TouchableRipple } from 'react-native-paper'
import RNImmediatePhoneCall from 'react-native-immediate-phone-call'
import { useSharedState } from './SharedStateCtx';


const CARD_WIDTH = width -100
const CARD_HEIGHT = 200
const CARD_WIDTH_SNAP = CARD_WIDTH + 24


export default function ProductNet({list, pressHandler}){
    const { customerNum, setCustomerNum } = useSharedState();
    return(
        <FlatList 
            data={list}
            horizontal
            snapToInterval={CARD_WIDTH_SNAP}
            showsHorizontalScrollIndicator={false}
            declarationRate="slow"
            keyExtractor={i => i.id}
            renderItem={({item}) => {
                return(
                    <View>
                        <TouchableOpacity style={{marginLeft: spacing.hr, marginRight: item.id === list.length ? spacing.hr : 0}} onPress={()=>{
                            pressHandler(item.title)
                        }}>
                        <View style={[styles.card]}>
                            <View style={styles.dots}>
                                <Tooltip title='Check Balance'>
                                <TouchableOpacity onPress={()=>{
                                    RNImmediatePhoneCall.immediatePhoneCall(`*${item.method}#`);
                                }}>
                                    <View style={styles.dotBtn}>
                                        <MaterialCommunityIcons  name="dots-horizontal" size={24} color="white" />
                                    </View>
                                </TouchableOpacity>
                                </Tooltip>
                                
                            </View>
                            <View style={styles.opacity}>
                                <LinearGradient
                                    colors={[item.start, item.end]}
                                    start={{ x: 0, y: 1 }}
                                    end={{ x: 0, y: 0 }}
                                    locations={[0.28, 1]}
                                    style={{
                                        height: CARD_HEIGHT,
                                        overflow: 'hidden',
                                        borderRadius: 17
                                    }}
                                />
                            </View>
                            <View style={styles.imageBox}>
                                <Image source={item.image} style={styles.img}/>
                            </View>
                            <View style={styles.titleBox}>
                                <Text style={styles.title}>{item.title}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>


                    </View>
                    

                )
            }
            }
        />
    )
};
const styles = StyleSheet.create({
    card:{
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        marginVertical: 10
    },
    img:{
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        resizeMode: 'cover'
    },
    imageBox:{
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        borderRadius: 17,
        overflow: 'hidden'
    },
    titleBox:{
        position: 'absolute',
        top: CARD_HEIGHT - 87,
        left: 16,
        zIndex: 2
    },
    title:{
        fontFamily: 'lato-bold',
        fontSize: 47,
        color: 'white'
    },
    dots:{
        position: 'absolute',
        top: 18,
        right: 18,
        zIndex: 2
    },
    dotBtn:{
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        padding: 5,
        borderRadius: 20,
        overflow: 'hidden'
    },
    opacity:{
        position: 'absolute',
        zIndex: 1,
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        borderRadius: 17
    }
})