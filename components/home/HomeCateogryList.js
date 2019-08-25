import React, { Component, PureComponent } from "react";
import { View, Text, FlatList, ActivityIndicator, Image } from "react-native";
import { ListItem, SearchBar, Card } from "react-native-elements";
import HomeBundleTop from './components/HomeBundleTop';
import { Star, Clock } from "../../assets/images/svgs/BundledSvg";




class MyListItem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Card
        containerStyle={{ borderWidth: 1, borderColor: '#EDEDED', padding: 10 }}
        // title='HELLO WORLD'
        image={require('../../assets/images/simples/mainfood.png')}>
        <View style={{ display: "flex", flexDirection: "column" }}>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <View>
              <Image source={require('../../assets/images/simples/evosmain.png')} />
            </View>
            <View style={{ display: "flex", flexDirection: "column" }}>
              <Text>EVOS</Text>
              <View style={{}}><Star /><Text>21 отзыв</Text></View>
            </View>
            <View style={{display: 'flex', flexDirection: 'column'}}>
              <Text>доставка</Text>
              <Text>от 7000 сум</Text>
            </View>
          </View>
          <View>

          </View>
        </View>
        {/* <Button
          icon={<Icon name='code' color='#ffffff' />}
          backgroundColor='#03A9F4'
          buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
          title='VIEW NOW' /> */}
      </Card>
    );
  }
}

class HomeCategoryList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false
    };
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const { page, seed } = this.state;
    const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
    this.setState({ loading: true });

    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: page === 1 ? res.results : [...this.state.data, ...res.results],
          error: res.error || null,
          loading: false,
          refreshing: false
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };

  handleRefresh = () => {
    this.setState(
      {
        page: 1,
        seed: this.state.seed + 1,
        refreshing: true
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

  handleLoadMore = () => {
    this.setState(
      {
        page: this.state.page + 1
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

  renderSeparator = () => {
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

  renderHeader = () => {
    return <HomeBundleTop />;
  };

  _renderItem = ({ item }) => (
    <MyListItem
      key={item.name.first}
      items={item}
    />
  );
  renderFooter = () => {
    if (!this.state.loading) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };


  render() {
    return (
      <View style={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
        <FlatList
          data={this.state.data}
          renderItem={this._renderItem}
          initialNumToRender={3}
          keyExtractor={item => item.email + Math.random()}
          // ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
          onRefresh={this.handleRefresh}
          refreshing={this.state.refreshing}
          onEndReached={this.handleLoadMore}
          onEndReachedThreshold={50}
          removeClippedSubviews={true}
        />
      </View>
    );
  }
}

export default HomeCategoryList;
