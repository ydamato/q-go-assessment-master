import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteItem, toggleItemStatus } from '../../logic/actions';

export const Item = ({ item, deleteItem, toggleItemStatus }) => {

  const deleteItemHandler = () => {
    deleteItem(item.id)
  };

  const toggleItemStatusHandler = () => {
    toggleItemStatus(item.id)
  };


  return (
    <div>
      {item.content}
      {
        item.isCompleted ?
        <button className="btn-set-incompleted" onClick={toggleItemStatusHandler}>set to incompleted</button> :
        <button className="btn-set-completed" onClick={toggleItemStatusHandler}>set to completed</button>
      }
      <button onClick={deleteItemHandler}>X</button>
    </div>
  );
};

Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired
  }),
  deleteItem: PropTypes.func.isRequired,
  toggleItemStatus: PropTypes.func.isRequired
  
};

const mapDispatchToProps = dispatch => ({
  deleteItem: itemId => dispatch(deleteItem(itemId)),
  toggleItemStatus: (itemId) => dispatch(toggleItemStatus(itemId))
});

export default connect(null, mapDispatchToProps)(Item);
