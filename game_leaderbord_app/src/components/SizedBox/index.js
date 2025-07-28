import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SIZES } from '../../constants'

const SizedBox = ({ horizontal = false, height, width }) => {

    const styles = {
        height: height ?? SIZES.padding,
        width: horizontal ? width ?? SIZES.padding : 0
    }

    return (
        <View style={styles} />
    )
}

export default SizedBox

const styles = StyleSheet.create({})