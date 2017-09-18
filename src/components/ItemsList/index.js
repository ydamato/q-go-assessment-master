import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Item from '../Item';
import { getItems } from '../../logic/selectors'
import './styles.css';

export const ItemsList = ({ items }) => {
  return (
    <div>
      <ul className={'itemsList-ul'}>
        {
          items.length < 1 && 
          <p id={'items-missing'}>
            Add some tasks above.
          </p>
        }
        {
          items.map(
            (item, index) => (
              <li key={item.id}>
                <Item item={item} />
              </li>
            )
          )
        }
      </ul>
    </div>
  );
};

ItemsList.propTypes = {
  items: PropTypes.array.isRequired
};

const mapStateToProps = state => ({ 
  items: getItems(state)
});

export default connect(mapStateToProps, null)(ItemsList);
