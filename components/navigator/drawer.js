import {
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import {
  createDrawerNavigator
} from "react-navigation-drawer";
import HomeCateogryList from "../home/HomeCateogryList";
import Beta from "../demo/beta";

const MyDrawerNavigator = createDrawerNavigator(
  {
    // For each screen that you can navigate to, create a new entry like this:
    Alpha: {
      screen: HomeCateogryList
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
