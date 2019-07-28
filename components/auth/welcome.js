import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";
import { RegisterSvg, Logo } from "../../assets/images/svgs/BundledSvg";
import { colors, getAdjustedFontSize } from "../../assets/styles/styles";

export default class Welcome extends Component {
  render() {
    return (
      <React.Fragment>
        <View style={styles.logo}>
          <Logo />
        </View>
        <Swiper
          style={styles.wrapper}
          dot={<View style={styles.dot} />}
          activeDot={<View style={styles.activeDot} />}
          nextButton={<Text style={styles.nextButton}>Далее</Text>}
          prevButton={<Text style={styles.prevButton}>назад</Text>}
          buttonWrapperStyle={styles.buttonWrapperStyle}
          paginationStyle={{
            marginBottom: "30%"
          }}
          showsButtons={true}
        >
          <View style={styles.slide1}>
            <RegisterSvg />
            <Text style={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor labore .
            </Text>
          </View>
          <View style={styles.slide2}>
            <RegisterSvg />
            <Text style={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor labore .
            </Text>
          </View>
          <View style={styles.slide3}>
            <RegisterSvg />
            <Text style={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor labore .
            </Text>
          </View>
        </Swiper>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 0.7
  },
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "black",
    fontSize: getAdjustedFontSize(14),
    fontFamily: "regular",
    textAlign: "center",
    paddingHorizontal: 40,
    paddingTop: 20
  },
  logo: {
    flex: 0.3,
    alignItems: "center",
    justifyContent: "center"
  },
  dot: {
    backgroundColor: "#EDEDED",
    width: 16,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3
  },
  activeDot: {
    backgroundColor: colors.mainColor,
    width: 16,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3
  },
  nextButton: {
    backgroundColor: colors.mainColor,
    fontFamily: "regular",
    color: "white",
    fontSize: getAdjustedFontSize(14),
    textTransform: "uppercase",
    padding: 10,
    borderRadius: 20
  },
  prevButton: {
    color: colors.mainColor,
    fontFamily: "regular",
    fontSize: getAdjustedFontSize(14),
    textTransform: "uppercase",
    padding: 10,
    borderRadius: 20
  },
  buttonWrapperStyle: {
    backgroundColor: "transparent",
    flexDirection: "row",
    position: "absolute",
    top: "40%",
    left: 0,
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: "space-between",
    alignItems: "center"
  }
});
