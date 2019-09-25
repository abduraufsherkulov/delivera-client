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
import { HeaderButtons, HeaderButton, Item } from 'react-navigation-header-buttons';
import { Logo } from "../../assets/images/svgs/BundledSvg";
import HomeCategoryList from "../home/HomeCategoryList";
import Beta from "../demo/beta";
import RestaurantMain from "../restaurants/RestaurantMain";
import BackIcon from "../../assets/images/mainAssets/backicon.png";
import ChooseAttributes from '../attributes/ChooseAttributes';

const CustomDrawerContentComponent = props => (
  <ScrollView>
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: 'always', horizontal: 'never' }}
    >
      <Logo />
      <DrawerNavigatorItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


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
        backgroundColor: 'white'
      },
      // headerTransparent: true,
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
  ChooseAttributes: {
    screen: ChooseAttributes,
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'white'
      },
      // headerTransparent: true,
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
    // navigationOptions: {
    //   headerStyle: {
    //     backgroundColor: '#f4511e',
    //   },
    //   headerTintColor: '#fff',
    //   headerTitleStyle: {
    //     color: 'white',
    //   }
    // },
    // contentOptions: {
    //   activeTintColor: '#e91e63',
    //   itemsContainerStyle: {
    //     marginVertical: 0,
    //   },
    //   iconContainerStyle: {
    //     opacity: 1
    //   }
    // },
    drawerType: 'slide',
    drawerPosition: "left",
    //   contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: "DrawerOpen",
    drawerCloseRoute: "DrawerClose",
    drawerToggleRoute: "DrawerToggle"
  }
);

export const MyApp = createAppContainer(MyDrawerNavigator);
