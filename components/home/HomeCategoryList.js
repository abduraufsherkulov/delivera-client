import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator, Image, StyleSheet, TouchableOpacity } from "react-native";
import { ListItem, SearchBar, Card } from "react-native-elements";
import HomeBundleTop from './components/HomeBundleTop';
import { Star, Clock } from "../../assets/images/svgs/BundledSvg";
import { colors, getAdjustedFontSize } from "../../assets/styles/styles";
import axios from 'axios';

function MyListItem(props) {
  return (
    <TouchableOpacity
      onPress={() => props.navigation.navigate('Details')}
    >
      <Card
        containerStyle={{ borderWidth: 1, borderColor: '#EDEDED', padding: 10 }}
        // title='HELLO WORLD'
        image={require('../../assets/images/simples/mainfood.png')}>
        <View style={styles.infoPart}>
          <View style={styles.infoPartTop}>
            <View style={{ flexGrow: 1 }}>
              <Image source={require('../../assets/images/simples/evosmain.png')} />
            </View>
            <View style={{ display: "flex", flexDirection: "column", flexGrow: 2 }}>
              <Text style={styles.entityTitle}>{props.items.name}</Text>
              <View style={{ display: "flex", flexDirection: "row", alignItems: 'center' }}><Star /><Text style={styles.comments}>21 отзыв</Text></View>
            </View>
            <View style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, }}>
              <Text style={styles.delivery}>доставка</Text>
              <Text style={styles.km}>от <Text style={{ fontSize: getAdjustedFontSize(16) }}>7000</Text> сум</Text>
            </View>
          </View>
          <View style={styles.infoPartBottom}>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <Text style={styles.categories}>Бургеры</Text>
              <Text style={styles.categories}>Фаст-Фуд</Text>
              <Text style={styles.categories}>+2</Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <Clock />
              <Text style={styles.time}>15-25 мин</Text>
            </View>
          </View>
        </View>
        {/* <Button
        icon={<Icon name='code' color='#ffffff' />}
        backgroundColor='#03A9F4'
        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
        title='VIEW NOW' /> */}
      </Card>
    </TouchableOpacity>
  )
}

function HomeCategoryList(props) {
  const [topRestaurants, settopRestaurants] = useState(null)

  function renderSeparator() {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
    );
  };

  function renderHeader() {
    return <HomeBundleTop />;
  };


  function _renderItem({ item, index }) {
    return (<MyListItem
      key={item.id + index}
      items={item}
      navigation={props.navigation}
    />)
  };

  function keyExtractor(item, index) {
    return item.category_domain_id + index;
  }

  // renderFooter = () => {
  //   if (!this.state.loading) return null;

  //   return (
  //     <View
  //       style={{
  //         paddingVertical: 20,
  //         borderTopWidth: 1,
  //         borderColor: "#CED0CE"
  //       }}
  //     >
  //       <ActivityIndicator animating size="large" />
  //     </View>
  //   );
  // };

  useEffect(() => {
    let ignore = false;
    const endpoint = "https://api.delivera.uz/app/popular-entity-list";
    axios({
      method: "get",
      url: endpoint,
      auth: {
        username: "delivera",
        password: "X19WkHHupFJBPsMRPCJwTbv09yCD50E2"
      },
      headers: {
        "content-type": "application/json"
      }
    })
      .then(response => {
        if (!ignore) settopRestaurants(response.data);
      })
      .catch(error => {
        console.log(error, "error on refresh");
      });
    return () => {
      ignore = true;
    };
  }, [])
  return (
    <View style={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
      <FlatList
        data={topRestaurants}
        renderItem={_renderItem}
        initialNumToRender={3}
        keyExtractor={keyExtractor}
        // ItemSeparatorComponent={this.renderSeparator}
        ListHeaderComponent={renderHeader}
        legacyImplementation={true}
      // ListFooterComponent={this.renderFooter}
      // onRefresh={this.handleRefresh}
      // refreshing={this.state.refreshing}
      // onEndReached={this.handleLoadMore}
      // onEndReachedThreshold={50}
      // removeClippedSubviews={true}
      // maxToRenderPerBatch={5}
      // windowSize={5}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  infoPart: {
    display: "flex",
    flexDirection: "column"
  },
  infoPartTop: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  infoPartBottom: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: getAdjustedFontSize(8)
  },
  entityTitle: {
    fontFamily: 'bold',
    fontSize: getAdjustedFontSize(16),

  },
  comments: {
    fontFamily: 'regular',
    fontSize: getAdjustedFontSize(10),
    color: colors.disabledColor
  },
  delivery: {
    fontFamily: 'regular',
    fontSize: getAdjustedFontSize(10),
    color: colors.disabledColor,
    textAlign: 'right'
  },
  km: {
    fontFamily: 'bold',
    fontSize: getAdjustedFontSize(10),
    textAlign: 'right'
  },
  categories: {
    fontFamily: 'regular',
    fontSize: getAdjustedFontSize(10),
    backgroundColor: '#e9f3e8',
    borderRadius: 20,
    paddingRight: getAdjustedFontSize(5),
    paddingLeft: getAdjustedFontSize(5)
  },
  topInfoSide: {
    fontFamily: 'bold',
    fontSize: getAdjustedFontSize(14)
  },
  time: {
    fontFamily: 'regular',
    fontSize: getAdjustedFontSize(10),
    color: colors.disabledColor,
    marginLeft: getAdjustedFontSize(4)
  },
  bottomInfoSide: {
    fontFamily: 'regular',
    fontSize: getAdjustedFontSize(12),
    color: colors.disabledColor
  }
});



export default HomeCategoryList;
