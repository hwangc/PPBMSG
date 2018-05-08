import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import ItemC from '../../component/ItemContainer';
import MapC from '../../component/MapContainer';
import { MALL } from '../../constant';
import { fetchOrder } from '../../action';

class MossbeanMain extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    return {
      title: 'Mossbean',
      headerStyle: {
        backgroundColor: '#ffc9e4'
      }
    };
  };

  componentDidMount() {
    this.props.newOrder();
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

const mapDispatchToProps = dispatch => ({
  newOrder: () => dispatch(fetchOrder(MALL.MOSSBEAN))
});

export default connect(null, mapDispatchToProps)(MossbeanMain);
