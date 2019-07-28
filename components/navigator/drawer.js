import {
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import Home from "../home/Home";
import CategoryList from "../category/components/CategoryList";
import Beta from "../demo/beta";

const MyDrawerNavigator = createDrawerNavigator(
  {
    // For each screen that you can navigate to, create a new entry like this:
    Alpha: {
      screen: CategoryList
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
