import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const colors = {
  mainColor: "#6BB267",
  disabledColor: "#BFBFBF",
  borderColor: "#EDEDED",
  mainBoldColor: "#33C37B"
};

export const fonts = {
  regular: require("../fonts/Roboto-Regular.ttf"),
  medium: require("../fonts/Roboto-Medium.ttf"),
  bold: require("../fonts/Roboto-Bold.ttf")
};

export const getAdjustedFontSize = size => {
  return (parseInt(size) * width + height) / 400;
};
