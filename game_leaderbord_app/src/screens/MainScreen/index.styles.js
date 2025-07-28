import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

export const styles = StyleSheet.create({
    main_view: {
        flex: 1,
        paddingTop: SIZES.padding
    },
    top_view: {
        width: "90%",
        alignSelf: "center",
        borderRadius: SIZES.padding2,
        height: SIZES.padding * 3.6,
        overflow: "hidden",
        paddingHorizontal: SIZES.padding2,
        marginTop: SIZES.padding * 2
    },
    border: {
        borderWidth: 1,
        borderColor: COLORS.white + "20",
        marginTop: SIZES.padding * 1.5
    },
    list: {
        paddingHorizontal: SIZES.padding
    },
    sheet_indicator: {
        backgroundColor: COLORS.background_gray_color,
        width:SIZES.padding * 2.5
    },
})