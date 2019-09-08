import React, {useState, useEffect} from 'react'
import { Image, View, FlatList, TouchableOpacity, Text } from 'react-native';
import axios from 'axios';



function MyListItem(props) {
    return (
      <TouchableOpacity
        onPress={() => props.navigation.navigate('Details')}
      ><Text>asd</Text>
      </TouchableOpacity>
    )
  }

function RestaurantMainHeader() {
    return (
        <Image source={require('../../assets/images/simples/biggermainfood.png')} />
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
            setallProducts(response.data.categories);
          })
          .catch(error => {
            console.log(error, "error on refresh");
          });
        // return () => {
        //   cleanup
        // };
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

export default RestaurantMain
