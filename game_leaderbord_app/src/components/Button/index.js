import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "../index";
import { COLORS, SIZES } from "../../constants";
import { TextWeights } from "../../config";

const CustomButton = ({
  style,
  onPress,
  buttonText,
  textStyle,
  isDisabled,
  color,
  size,
  weight,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[styles.container, { backgroundColor: isDisabled ? COLORS.background_gray_color : COLORS.white + "30" }, style]}
      disabled={isDisabled}
    >
      <Text
        text={buttonText}
        style={textStyle}
        weight={weight ?? TextWeights.medium}
        size={size ?? SIZES.h14}
        color={color ?? COLORS.white}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    height: SIZES.padding * 2.4,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    borderRadius: SIZES.padding * 2,
  },
});

export default CustomButton;
