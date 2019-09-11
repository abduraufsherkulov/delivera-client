import React, { useState, useEffect } from 'react'
import { Image, View, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Star, Clock, LocationIcon } from "../../assets/images/svgs/BundledSvg";
import { Card, ListItem, Avatar } from 'react-native-elements';
import { colors, getAdjustedFontSize } from "../../assets/styles/styles";
import { Ionicons } from "@expo/vector-icons";
import TouchableScale from 'react-native-touchable-scale';
import axios from 'axios';

function ProductCategories(props) {

  return (
    props.foods.map((u, i) => {
      // console.log(u);
      return (
        <ListItem
          key={u.id + u.image_id + ""}
          Component={TouchableScale}
          containerStyle={{ borderWidth: 1, borderColor: colors.borderColor, marginTop: getAdjustedFontSize(8), marginRight: getAdjustedFontSize(16), marginLeft: getAdjustedFontSize(16), borderRadius: 20 }}
          friction={90} //
          tension={100} // These props are passed to the parent component (here TouchableScale)
          activeScale={0.95} //
          // linearGradientProps={{
          //   colors: ['#FF9800', '#F44336'],
          //   start: [1, 0],
          //   end: [0.2, 0],
          // }}
          // ViewComponent={LinearGradient} // Only if no expo
          leftAvatar={<Avatar size="large"
            source={require('../../assets/images/simples/productimage.png')}
          />}
          title={<View style={{display: 'flex', flexDirection: 'column'}}><Text>asdsa</Text><Text>asdsa</Text><Text>asdsa</Text></View>}
          // titleStyle={{ color: 'red', fontWeight: 'bold' }}
          // subtitleStyle={{ color: 'red' }}
          // subtitle="Vice Chairman"
        />
      );
    })
  )
}


function MyListItem(props) {
  const { items } = props;
  return (
    <TouchableOpacity
      onPress={() => props.navigation.navigate('Details')}
    >
      <View style={styles.eachRow}>
        <View><Text style={{ fontSize: getAdjustedFontSize(24), fontFamily: 'bold' }}>{items.title}</Text></View>
        <View><Text style={{ fontSize: getAdjustedFontSize(12), fontFamily: 'regular', color: colors.disabledColor, paddingLeft: getAdjustedFontSize(8) }}>{items.foods.length} продуктов</Text></View>
        <View style={{ marginLeft: 'auto' }}><Ionicons name="ios-arrow-down" size={32} color="black" /></View>
      </View>
      <ProductCategories foods={items.foods} showMe="asd" />
    </TouchableOpacity>
  )
}

function RestaurantMainHeader(props) {
  return (
    <View>
      <Image source={require('../../assets/images/simples/biggermainfood.png')} />
      <View style={styles.infoPart}>
        <View style={styles.infoPartTop}>
          <View style={{ flexGrow: 1 }}>
            <Image source={require('../../assets/images/simples/biggerevosmain.png')} />
          </View>
          <View style={{ display: "flex", flexDirection: "column", flexGrow: 2, justifyContent: 'center' }}>
            <Text style={styles.entityTitle}>asd</Text>
            {/* <View style={{ display: "flex", flexDirection: "row", alignItems: 'center' }}><Star /><Text style={styles.comments}>21 отзыв</Text></View> */}
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
        </View>
        <View style={styles.lastInfoPart}>
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Clock />
            <Text style={styles.time}>15-25 мин</Text>
          </View>
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingLeft: getAdjustedFontSize(18) }}>
            <Clock />
            <Text style={styles.time}>в 2 км от вас</Text>
          </View>
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: 'auto' }}>
            <Text style={styles.status}>ЗАКРЫТО</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

function RestaurantMain(props) {
  const [allProducts, setallProducts] = useState(null)
  function _renderItem({ item, index }) {
    return (<MyListItem
      key={item.id + index}
      items={item}
      navigation={props.navigation}
    />)
  };

  function keyExtractor(item, index) {
    return item.id + index + "";
  }

  useEffect(() => {
    let ignore = false;
    // https://api.delivera.uz/app/get-entity-inner-products?entity_domain_id=47
    const endpoint = `https://api.delivera.uz/app/get-entity-inner-products?entity_domain_id=47`;
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
        // console.log(response.data);
        if (!ignore) setallProducts(response.data.categories);

      })
      .catch(error => {
        console.log(error, "error on refresh");
      });
    return () => {
      ignore = true;
    };
  }, [])
  return (
    <FlatList
      data={allProducts}
      renderItem={_renderItem}
      initialNumToRender={3}
      keyExtractor={keyExtractor}
      // ItemSeparatorComponent={this.renderSeparator}
      ListHeaderComponent={RestaurantMainHeader}
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
  )
}


const styles = StyleSheet.create({
  infoPart: {
    display: "flex",
    flexDirection: "column",
    padding: getAdjustedFontSize(16)
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
    marginTop: getAdjustedFontSize(16),
    paddingBottom: getAdjustedFontSize(16),
    borderBottomColor: colors.borderColor,
    borderBottomWidth: 1
  },
  entityTitle: {
    fontFamily: 'bold',
    fontSize: getAdjustedFontSize(24),

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
  },
  lastInfoPart: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: getAdjustedFontSize(16),
  },
  status: {
    color: '#D93131',
    textTransform: 'uppercase',
    fontSize: getAdjustedFontSize(12),
    fontFamily: 'bold'
  },
  eachRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: getAdjustedFontSize(16)
  }
});

export default RestaurantMain
