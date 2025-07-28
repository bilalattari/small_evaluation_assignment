/**
 * Misc. functions
 */
// language translation

import { Dimensions } from "react-native";
import Toast from "react-native-toast-message";

// first letter capitalize
export const capitalize = (str) => str?.charAt(0).toUpperCase() + str?.slice(1);


export const showToast = (type, message) => {
  Toast.show({
    type: type,
    text1: capitalize(type),
    text2: message,
    position: "bottom"
  });
}

export function requestHandler({
  apiService,
  setData,
  setLoading,
  isSuccessMessage = false,
  param_data,
  onDone,
}) {
  return async dispatch => {
    try {
      setLoading && dispatch(setLoading(true));
      const response = await apiService(param_data);
      if (!response?.data?.error) {
        setData && dispatch(setData(response?.data?.data));
        isSuccessMessage && showToast('success', response?.data?.msg ?? response?.data?.message ?? "");
        onDone && onDone(response?.data);
      } else {
        showToast('error', response?.data?.message ?? "");
      }
    } catch (error) {
      if (error?.status === 401) {
      }
      showToast('error', error?.data?.msg ?? error?.data?.message ?? "");
    } finally {
      setLoading && dispatch(setLoading(false));
    }
  };
}

export const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export const urlReg = /^(http[s]?:\/\/(www\.)?|ftp:\/\/(www\.)?|www\.){1}([0-9A-Za-z-\@:%_\+~#=]+)+((\.[a-zA-Z]{2,3})+)(\/(.)*)?(\?(.)*)?/g;

export const numberReg = /^\+|0{1,}(?:[0-9] ?){6,14}[0-9]$/;

const { width, height } = Dimensions.get("window");
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

export function scale(size) {
  return Math.floor((width / guidelineBaseWidth) * size);
}

export function verticalScale(size) {
  return Math.floor((height / guidelineBaseHeight) * size);
}

export function moderateScale(size, factor = 0.5) {
  return Math.floor(size + (scale(size) - size) * factor);
}