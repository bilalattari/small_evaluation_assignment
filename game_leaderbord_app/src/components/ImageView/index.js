import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { SIZES } from '../../constants'
import FastImage from 'react-native-fast-image'


const ImageView = ({ url, height, radius, width, onPress, image, style, resizeMode, imageHeight, imageWidth, imageRadius }) => {
    const view_style = {
        height: height ?? SIZES.padding * 2,
        width: width ?? SIZES.padding * 2,
        borderRadius: radius ?? 0,
        overflow: "hidden"
    }
    const image_style = {
        height: imageHeight ?? "100%",
        width: imageWidth ?? "100%",
        borderRadius: imageRadius ?? radius ?? SIZES.padding * 2
    }
    return (
        <TouchableOpacity
            disabled={!onPress}
            onPress={onPress}
            activeOpacity={0.9} style={[view_style, style]} >
            <FastImage
                resizeMode={resizeMode ?? FastImage.resizeMode.contain}
                style={image_style} source={url ? {
                    uri: url,
                    priority: FastImage.priority.high,
                    cache: FastImage.cacheControl.immutable
                } : image} />
        </TouchableOpacity>
    )
}

export default ImageView

const styles = StyleSheet.create({})