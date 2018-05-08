import React from 'react';
import { View } from 'react-native';
import { MapView } from 'expo';
import { styles } from './style';

export default class Map extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.map}>
        {this.props.location && (
          <MapView style={styles.map} region={this.props.location}>
            <MapView.Marker coordinate={this.props.location} />
          </MapView>
        )}
      </View>
    );
  }
}
