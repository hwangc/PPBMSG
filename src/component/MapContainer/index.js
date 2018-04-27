import { connect } from 'react-redux';
import Map from '../Map';
import { successFetchLocAction } from '../../action';

const mapStateToProps = (state, ownProps) => {
  return {
    ...state.ppbMsgMap
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    _handleMapRegionChange: location => {
      dispatch(successFetchLocAction(location));
    }
  };
};

const MapC = connect(mapStateToProps, mapDispatchToProps)(Map);

export default MapC;
