import React, { Children, memo } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { KeyboardAvoidingView, Platform, ToastAndroid, Touchable, Vibration, View } from 'react-native';
import { TextInput, Text, Button, HelperText } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { spacing } from '../styles/global';
import { Formik } from 'formik';
import { useSharedState } from './SharedStateCtx';
import * as yup from 'yup'
import regularLoad from './regularLoad';

const Tab = createMaterialTopTabNavigator();
const topRadius = 20

const NetworkTabs = ({children, loadMethod})=> {
    const [child1, child2] = Children.toArray(children)
    const PromosRender = ()=>{
        return(
            <>
            {child1}
            </>
        )
    }
    
    
    const CallAndText = memo(()=>{
        return(
            <>
            {child2}
            </>
        )
    })

    function Test(){
        return(
            <View></View>
        )
    }
    function Test2(){
        return(
            <View></View>
        )
    }
    function Test3(){
        return(
            <View></View>
        )
    }

    return (
        <Tab.Navigator keyboardDismissMode='on-drag' screenOptions={{
            tabBarIndicatorStyle: {backgroundColor: 'black'},
            tabBarLabelStyle: {fontFamily: 'nunito-bold'},
            swipeEnabled: false,
            tabBarAndroidRipple: {borderless: false},
            tabBarStyle: {elevation: 0, borderBottomWidth: 1, borderColor: '#e2e2e2'},
            tabBarIndicatorStyle: {backgroundColor: '#1257cf', borderTopRightRadius: topRadius, borderTopLeftRadius: topRadius, height: 4}
        }}>
        <Tab.Screen name="Load" component={regularLoad} />
        <Tab.Screen name="Internet" component={PromosRender}/>
        <Tab.Screen name="Call & Text" component={CallAndText}/>
        {/* <Tab.Screen name="Others" component={others} /> */}
        </Tab.Navigator>
    );
}
export default memo(NetworkTabs)