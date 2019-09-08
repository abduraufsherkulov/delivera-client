import React from 'react';
import { Image, Button } from 'react-native';
import {
  createAppContainer
} from "react-navigation";
import {
  createDrawerNavigator
} from "react-navigation-drawer";
import { createStackNavigator } from 'react-navigation-stack';
import { Ionicons } from "@expo/vector-icons";
import { HeaderButtons, HeaderButton, Item, hidd } from 'react-navigation-header-buttons';
import HomeCategoryList from "../home/HomeCategoryList";
import Beta from "../demo/beta";
import RestaurantMain from "../restaurants/RestaurantMain";
import BackIcon from "../../assets/images/mainAssets/backicon.png";


const IoniconsHeaderButton = passMeFurther => (
  // the `passMeFurther` variable here contains props from <Item .../> as well as <HeaderButtons ... />
  // and it is important to pass those props to `HeaderButton`
  // then you may add some information like icon size or color (if you use icons)
  <HeaderButton {...passMeFurther} IconComponent={Ionicons} iconSize={23} color="blue" />
);


const HomeStack = createStackNavigator({
  Home: {
    screen: HomeCategoryList,
    navigationOptions: {
      header: null
    }
  },
  Details: {
    screen: RestaurantMain,
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'transparent'
      },
      headerTransparent: true,
      headerBackImage: <Image source={BackIcon} />,
      headerRight: (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <Item style={{backgroundColor: 'white', borderRadius: 20}} title="search" iconName="ios-heart-empty" onPress={() => alert('search')} />
          <Item title="select" onPress={() => alert('select')} />
          <Item title="ss" onPress={() => alert('select')} />
          <Button title="asd" />
          {/* <HiddenItem title="hidden in overflow menu" onPress={() => alert('hidden in overflow')} /> */}
        </HeaderButtons>
      ),
    }
  },
});

const MyDrawerNavigator = createDrawerNavigator(
  {
    // For each screen that you can navigate to, create a new entry like this:
    Alpha: {
      screen: HomeStack
    },
    Beta: {
      screen: Beta
    }
  },
  {
    initialRouteName: "Alpha",
    drawerPosition: "left",
    //   contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: "DrawerOpen",
    drawerCloseRoute: "DrawerClose",
    drawerToggleRoute: "DrawerToggle"
  }
);

export const MyApp = createAppContainer(MyDrawerNavigator);
