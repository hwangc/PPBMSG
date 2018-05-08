import { connect } from 'react-redux';
import Item from '../Item';

const mapStateToProps = (state, ownProps) => {
  return {
    ...state.ppbMsgOrder
  };
};

const ItemC = connect(mapStateToProps)(Item);

export default ItemC;
