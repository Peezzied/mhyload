import { Form, Formik } from "formik";
import { View, StyleSheet, Keyboard, Vibration, Alert, ToastAndroid } from "react-native";
import { useSharedState } from "./SharedStateCtx";
import {globePrx, networkPrefix, smartPrx, spacing } from '../styles/global';
import { Text, Surface, Button, TextInput, HelperText } from 'react-native-paper'
import BottomSheet, {BottomSheetTextInput} from '@gorhom/bottom-sheet';
import { TouchableOpacity } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NumberSchema } from "../utils";


export function MhyForm({navigation}){
    const { setSharedState} = useSharedState();
    const { setCustomerNum } = useSharedState();
    const {networkName,setNetworkName} = useSharedState();

    
    const handleMhyForm = (values, resetForm)=>{
        // console.log(values)
        // const firstTwoDigits = formNum.substring(0, 2);
        const formNum = values.number.toString()
        const prefix = formNum.substring(0,4)
        const hasCheck = (has)=>{
            if (networkPrefix.smartPrx.indexOf(has) !== -1) {
                setNetworkName('SMART')
                console.log('SMART HERE!!!!!!!!!!1r')
            }
            if (networkPrefix.globePrx.indexOf(has) !== -1) {
                setNetworkName('GLOBE')
            }
        }

        setCustomerNum(formNum)
        hasCheck(prefix)
        resetForm()

        ToastAndroid.showWithGravity(`${formNum} has been set.`, ToastAndroid.SHORT, ToastAndroid.CENTER)
        navigation.goBack()
        Vibration.vibrate(100)
        // if (firstTwoDigits === '09') {
        //     const prefix = formNum.substring(0,4)
        //     const hasPrx = [...networkPrefix.smartPrx, ...networkPrefix.globePrx].includes(prefix)
        //     console.log(hasPrx)
            
        //     if (hasPrx) {
        //         hasCheck(prefix)
        //         formSubmit()
        //     } else {
        //         Alert.alert('Invalid Number', 'Phone number prefix does not exist.')
        //         Vibration.vibrate(500)
        //     }
        // } else {
        //     Alert.alert('Invalid Number', 'Phone numbers must start with 09.')
        //     Vibration.vibrate(500)
        // }

    }

    return (
    <>
    <StatusBar style="light" backgroundColor="#fff" animated={true}/>
  <View style={{backgroundColor: '#fff', flex: 1}}>
        <Formik initialValues={{
            number: ''
        }} onSubmit={(values, {resetForm})=>{
            handleMhyForm(values, resetForm)
        }}
        validationSchema={NumberSchema}
        >
            {(props)=>(
                <View style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignContent: 'center',
                    gap: 24,
                    marginTop: 14,}}>
                <View style={{marginHorizontal: spacing.hr + 10}}>
                    <View style={{ marginBottom: 23}}> 
                        <Text variant='headlineLarge' style={{fontFamily: 'nunito-bold'}}>Set a Customer</Text>
                    </View>
                    <View>
                        <TextInput 
                        mode='outlined'
                        label='Phone Number'
                        placeholder="09"
                        editable
                        error={props.touched.number && props.errors.number && true}
                        maxLength={11}
                        keyboardType='numeric'
                        onChangeText={props.handleChange('number')}
                        onBlur={props.handleBlur('number')}
                        value={props.values.number}
                        style={{
                            height: 67,
                            fontSize: 25,
                            backgroundColor: 'transparent',
                        }}
                        outlineStyle={{borderRadius: 10}}
                        contentStyle={{paddingLeft: 27}}/>
                    </View>
                    <HelperText type="error">{props.touched.number && props.errors.number}</HelperText>
                    
                </View>            
                <View >
                    <View style={{alignItems: 'center'}}>
                        <TouchableOpacity style={styles.btnStyle} title='submit' onPress={props.handleSubmit} rippleColor={''}><Text style={{
                        fontFamily: 'nunito-bold',
                        fontSize: 17,
                        lineHeight: 30,
                        color: '#3ba1ce'
                    }}>Set account</Text></TouchableOpacity>
                    </View>
                </View>
                </View>
                
            )}
        </Formik>
    </View>
    </>
    
    )
}
const styles = StyleSheet.create({
    btnStyle: {
        marginHorizontal: spacing.hr + 10,
        borderRadius: 50,
    }
})