import { connect } from 'react-redux';
import Item from '../Item';

const mapStateToProps = (state, ownProps) => {
  return {
    ...state.ppbMsgOrder
  };
};

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     newOrder: () => {
//       dispatch(fetchOrder(ownProps.mall));
//     }
//   };
// };

const ItemC = connect(mapStateToProps)(Item);

export default ItemC;
