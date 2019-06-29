import * as Font from "expo-font";

// export const cacheAssets = Asset.loadAsync;
// export const cacheFonts = Font.loadAsync;
export const cacheFonts = fonts => {
  return fonts.map(font => Font.loadAsync(font));
};
