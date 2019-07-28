import React, { Component } from 'react';
import {FlatList, View, TouchableOpacity, Text} from 'react-native';
import Home from '../../home/Home';

class MyListItem extends React.PureComponent {
    _onPress = () => {
      this.props.onPressItem(this.props.id);
    };
  
    render() {
      const textColor = this.props.selected ? 'red' : 'black';
      return (
        <TouchableOpacity onPress={this._onPress}>
          <View>
            <Text style={{color: textColor}}>{this.props.title}</Text>
          </View>
        </TouchableOpacity>
      );
    }
  }
  
export default class CategoryList extends React.PureComponent {
    state = {selected: new Map()};
  
    _keyExtractor = (item, index) => item.id;
  
    _onPressItem = (id) => {
      // updater functions are preferred for transactional updates
      this.setState((state) => {
        // copy the map rather than modifying state.
        const selected = new Map(state.selected);
        selected.set(id, !selected.get(id)); // toggle
        return {selected};
      });
    };
  
    _renderItem = ({item}) => (
      <MyListItem
        id={item.id}
        onPressItem={this._onPressItem}
        selected={!!this.state.selected.get(item.id)}
        title={item.title}
      />
    );
  
    render() {
      return (
        <FlatList
          ListHeaderComponent={<Home />}
          data={this.props.data}
          extraData={this.state}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      );
    }
  }