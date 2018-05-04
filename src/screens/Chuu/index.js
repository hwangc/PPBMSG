import React from 'react';
import { StyleSheet, View } from 'react-native';
import ItemC from '../../component/ItemContainer';
import MapC from '../../component/MapContainer';
import { MALL } from '../../constant';
import { fetchOrder } from '../../action';

export default class ChuuMain extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    return {
      title: 'Chuu',
      headerStyle: {
        backgroundColor: '#ffc9e4'
      }
    };
  };

  componentDidMount() {
    console.log('screen this props ', this.props);
    this.props.navigation.dispatch(fetchOrder('chuu'));
  }

  render() {
    return (
      <View style={styles.container}>
        <ItemC style={styles.itemArea} mall={MALL.CHUU} />
        <MapC style={styles.mapArea} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  itemArea: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  mapArea: { flex: 1, alignItems: 'center', justifyContent: 'center' }
});
