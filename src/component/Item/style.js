import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  slideWrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemImage: {
    width,
    flex: 0.9
  },
  itemImageCaption: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
