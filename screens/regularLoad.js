import { memo } from "react"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { useSharedState } from "./SharedStateCtx"
import { View, TouchableOpacity, ToastAndroid, Vibration, Linking } from "react-native"
import { Text, TextInput, HelperText } from "react-native-paper"
import { Formik } from "formik"
import { LoadSchema } from "../utils"
import { spacing } from "../styles/global"
import RNImmediatePhoneCall from 'react-native-immediate-phone-call'

export const RegularLoad = memo(({loadMethod})=>{
    console.log('Regular has been rendered.')
    const insets = useSafeAreaInsets()
    const { customerNum } = useSharedState()
    const handelLoadForm = (values, resetForm)=>{
        const formNum = values.number
        const formSubmit = ()=>{
            resetForm()
            ToastAndroid.showWithGravity(`Loading ${customerNum} with P${formNum}.`, ToastAndroid.SHORT, ToastAndroid.CENTER)
            Vibration.vibrate(100)
            const mmidCode = loadMethod.replace('[]', customerNum)
            console.log(`${mmidCode}*${formNum}`)
            // RNImmediatePhoneCall.immediatePhoneCall(`*${mmidCode}*${formNum}#`);
            Linking.openURL(`${mmidCode}*}*${formNum}%23`)
        }
        formSubmit()
    }
    return(
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <Formik initialValues={{number: ''}}
                onSubmit={(values, {resetForm})=>{
                    handelLoadForm(values, resetForm)
            }}
                validationSchema={LoadSchema}
            >
                {(props)=>(
                    <View style={{alignItems: 'center', justifyContent: 'center', marginTop: insets.top}}>
                    <View style={{width: '100%', justifyContent: 'center', gap: 13, }}>
                    <View style={{alignItems: 'center'}}>
                        <Text variant='titleLarge' style={{fontFamily: 'nunito-bold'}}>Regular Load</Text>
                    </View>
                    <View style={{marginHorizontal: spacing.hr + 10}}>
                        <TextInput
                            mode='outlined'
                            label='Amount'
                            placeholder='10'
                            editable
                            maxLength={11}
                            keyboardType='numeric'
                            onChangeText={props.handleChange('number')}
                            style={{
                                height: 57,
                                fontSize: 25,
                                backgroundColor: 'transparent'
                            }}
                            outlineStyle={{
                                borderRadius: 10
                            }}
                            contentStyle={{paddingLeft: 27}}
                            error={props.touched.number && props.errors.number}
                        />
                        <HelperText type='error'>{props.touched.number && props.errors.number}</HelperText>
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <TouchableOpacity>
                            <Text style={{fontFamily: 'nunito-bold',
                                fontSize: 17,
                                lineHeight: 30,
                                color: '#3ba1ce'}}
                                onPress={props.handleSubmit}
                            >Load Now</Text>
                        </TouchableOpacity>
                    </View>
                    </View>
                    </View>
                )}
            </Formik>
        </View>
    )
})