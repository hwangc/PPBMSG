import React from 'react';
import { StyleSheet, View } from 'react-native';
import ItemC from '../../component/ItemContainer';
import MapC from '../../component/MapContainer';
import { MALL } from '../../constant';

export default class MossbeanMain extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    return {
      title: 'Mossbean',
      headerStyle: {
        backgroundColor: '#ffc9e4'
      }
    };
  };

  componentDidMount() {
    console.log('screen this props ', this.props);
  }

  render() {
    return (
      <View style={styles.container}>
        <ItemC style={styles.itemArea} mall={MALL.MOSSBEAN} />
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
