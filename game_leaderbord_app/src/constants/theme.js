import { Dimensions, Platform } from 'react-native';
const { width, height } = Dimensions.get('screen');
import { scale } from '../utils/functions';

export const isIOS = Platform.OS === 'ios';
export const keyboardAvoidingBehaviour = isIOS ? "padding" : "height"

export const COLORS = {
    primary: "#09001F",
    border_color: "#B4B2AA",
    border_color2: "#E9EAEC40",
    sky_blu_color: "#0EA5E9",
    yellow_color: "#FBBC05",
    purple_color: "#924FE8",
    sheet_background_color: "#171717",
    background_gray_color: "#7B7B7B",
    leaderboard_top_gradient: ['#B37FEB', '#22075E'],
    modal_background_color: "#00000065",
    white: "#FFFFFF",
    black: "#000000",
    transparent: "transparent"

}


export const SIZES = {
    // global sizes
    padding: scale(20),
    padding2: scale(12),

    // font sizes
    h6: scale(6),
    h7: scale(7),
    h8: scale(8),
    h9: scale(9),
    h10: scale(10),
    h11: scale(11),
    h12: scale(12),
    h13: scale(13),
    h14: scale(14),
    h15: scale(15),
    h16: scale(16),
    h18: scale(18),
    h20: scale(20),
    h22: scale(22),
    h24: scale(24),
    h26: scale(26),
    h28: scale(28),
    h35: scale(35),

    // app dimensions
    width,
    height,
};


const appTheme = { COLORS, SIZES };

export default appTheme;