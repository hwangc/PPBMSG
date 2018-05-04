import React from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './style';
import { setDateTime } from '../../lib/common';
import Swiper from 'react-native-swiper';

export default class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // this.props.newOrder();
  }

  slideList(itemsInfo) {
    return itemsInfo.map((item, index) => (
      <View style={styles.slide} key={index}>
        <Text numberOfLines={1} style={styles.itemImageCaption}>
          {item.name}
        </Text>
        <Image style={styles.itemImage} source={{ uri: item.image }} />
      </View>
    ));
  }

  render() {
    return (
      <View style={styles.container}>
        <Swiper
          style={styles.slideWrapper}
          onMomentumScrollEnd={(e, state, context) =>
            console.log('index:', state.index)
          }
        >
          {this.slideList(this.props.itemsInfo)}
        </Swiper>
        <Text>{setDateTime()}</Text>
        <Text>Order Number: {this.props.prdNum}</Text>
        <Text>Order Address: {this.props.orderAddress}</Text>
      </View>
    );
  }
}
