import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import ItemC from '../../component/ItemContainer';
import MapC from '../../component/MapContainer';
import { MALL } from '../../constant';

export class Icecream12Main extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ItemC style={styles.itemArea} mall={MALL.ICECREAM12} />
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

const Icecream12MainStack = createStackNavigator(
  {
    Icecream12: Icecream12Main
  },
  {
    navigationOptions: ({ navigation, navigationOptions }) => {
      return {
        title: 'Icecream12',
        headerStyle: {
          backgroundColor: '#ffc9e4'
        }
      };
    }
  }
);

export default Icecream12MainStack;
