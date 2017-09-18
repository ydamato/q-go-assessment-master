
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleFilter } from '../../logic/actions';
import { isShowOnlyCompleted } from '../../logic/selectors'

export const ItemsFilter = ({ showOnlyCompleted, toggleFilter }) => {
  return (
    <div>
      {
        showOnlyCompleted ?
        <button className="btn-show-all" onClick={toggleFilter}>show all todos</button> :
        <button className="btn-show-completed" onClick={toggleFilter}>show completed todos</button>
      }
    </div>
  );
};

ItemsFilter.propTypes = {
  showOnlyCompleted: PropTypes.bool.isRequired,
  toggleFilter: PropTypes.func.isRequired
};

const mapStateToProps = state => ({ 
  showOnlyCompleted: isShowOnlyCompleted(state)
});


const mapDispatchToProps = dispatch => ({
  toggleFilter: () => dispatch(toggleFilter())
});


export default connect(mapStateToProps,mapDispatchToProps)(ItemsFilter);
