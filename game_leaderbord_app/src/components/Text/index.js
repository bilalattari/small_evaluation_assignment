import React from "react";
import { Text } from "react-native";
import { COLORS, SIZES } from "../../constants";
import { isIOS } from "../../constants/theme";
import { TextWeights } from "../../config";

const CustomText = ({ style, text, onPress, numberOfLines, onLayout, size, align, weight, color, mt, ml, mr, mb, isrequired = false, letterSpacing, textDecorationLine }) => {

  const textstyle = {
    fontSize: size ?? SIZES.h13,
    fontFamily: weight ?? TextWeights.regular,
    color: color ?? COLORS.white,
    textAlign: align ?? 'left',
    marginTop: mt ?? 0,
    marginLeft: ml ?? 0,
    marginRight: mr ?? 0,
    marginBottom: mb ?? 0,
    letterSpacing: letterSpacing ?? 0,
    textDecorationLine: textDecorationLine
  }

  const required_style = {
    color: COLORS.text_red_color,
    fontFamily: TextWeights.medium,
    fontSize: SIZES.h12
  }

  return (
    <Text
      numberOfLines={numberOfLines}
      style={[textstyle, style]}
      onLayout={onLayout}
      onPress={onPress}

    >
      {text === undefined ? "" : (text ?? "")} {isrequired && <Text style={required_style} >*</Text>}
    </Text>
  );
};

export default CustomText;
