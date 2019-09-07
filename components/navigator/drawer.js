import {
  createAppContainer
} from "react-navigation";
import {
  createDrawerNavigator
} from "react-navigation-drawer";
import { createStackNavigator } from 'react-navigation-stack';
import HomeCategoryList from "../home/HomeCategoryList";
import Beta from "../demo/beta";
import RestaurantMain from "../restaurants/RestaurantMain";

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeCategoryList,
    navigationOptions: {
      header: null
    }
  },
  Details: RestaurantMain,
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
