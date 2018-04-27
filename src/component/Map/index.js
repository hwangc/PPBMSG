import React from 'react';
import { View } from 'react-native';
import { MapView } from 'expo';
import { styles } from './style';

export default class Map extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('map props', this.props.location);
    return (
      <View style={styles.map}>
        <MapView style={styles.map} region={this.props.location}>
          <MapView.Marker coordinate={this.props.location} />
        </MapView>
      </View>
    );
  }
}
