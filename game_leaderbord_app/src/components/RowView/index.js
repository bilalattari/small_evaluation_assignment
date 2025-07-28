import { TouchableOpacity } from 'react-native'
import React from 'react'
import { SIZES } from '../../constants'

const RowView = ({ children, justifyContent, onPress, alignItems, style, gap }) => {

    const styles = {
        flexDirection: "row",
        alignItems: alignItems ?? 'center',
        justifyContent: justifyContent ?? 'flex-start',
        gap: gap ?? SIZES.padding2 * 0.5
    }
    return (
        <TouchableOpacity
            activeOpacity={0.6}
            onPress={onPress}
            disabled={!onPress}
            style={[styles, style]} >
            {children}
        </TouchableOpacity>
    )
}

export default RowView