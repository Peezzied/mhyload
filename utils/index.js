import * as yup from 'yup'
import { networkPrefix } from '../styles/global'
import { memo } from 'react'
import { View } from 'react-native'

export const NumberSchema = yup.object({
    number: yup
        .number()
        .typeError('Must only contain a number.')
        .required('Enter the customer\'s number')
        .test({
            name: 'prefixCheck',
            skipAbsent: true,
            test(value, ctx){
                const obj = `0${value.toString()}`
                const maxLength = (obj.length === 11) && true
                const prefix = obj.substring(0,4)
                const hasPrx =  [...networkPrefix.smartPrx, ...networkPrefix.globePrx].includes(prefix)
                const firstTwoDigits = obj.startsWith('09')

                console.log(obj, prefix, hasPrx, firstTwoDigits, maxLength)
                
                if (!(obj && firstTwoDigits && hasPrx && maxLength)) {
                    return ctx.createError({message: 'Must be a valid number.'})
                }
                return true
            }
        })
    })

export const LoadSchema = yup.object({
    number: yup
        .number()
        .typeError('Must only contain a number.')
        .required('Min of P10.')
        .min(10, 'Must be at least 10.')
        .test({
            name: '',
            skipAbsent: true,
            test(value, ctx){
                const obj = `${value.toString()}`
                const maxLength = (obj.length <= 4) && true
                console.log(maxLength)
                if (!maxLength){
                    return ctx.createError({message: 'Must not exceed to 4 digits.'})
                }
                return true
            }
        })
})

export const formatData = (data, numColumns) => {
    const numberOfFullRows = Math.floor(data.length / numColumns);
  
    let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
    while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
      data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
      numberOfElementsLastRow++;
    }
  
    return data;
  };


export const Test = memo(()=>{
    console.log('test render')
    return(
        <View></View>
    )
})
export const Test2 = memo(()=>{
    console.log('test2 render')
    return(
        <View></View>
    )
})

