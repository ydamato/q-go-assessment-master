import React from 'react';
import { shallow } from 'enzyme';
import { Item } from '../index';
import _ from 'lodash';

const defaultProps = {
  deleteItem: jest.fn(),
  toggleItemStatus: jest.fn(),
  item: {
    id: 1, content: 'Test 1', isCompleted: false
  }
};

describe('ItemsList', () => {
  it('renders without crashing', () => {
    shallow(<Item {...defaultProps} />);
  });

  it('should display "set completed" button', () => {
    const renderedItem = shallow(<Item {...defaultProps} />);
    expect(renderedItem.find('.btn-set-completed')).toHaveLength(1);
    expect(renderedItem.find('.btn-set-incompleted')).toHaveLength(0);
  });

  it('should display "set incompleted" button', () => {
    const props = {
      ...defaultProps,
      item: {
        ...defaultProps.item,
        isCompleted: true
      }
    };
    const renderedItem = shallow(<Item {...props} />);
    expect(renderedItem.find('.btn-set-completed')).toHaveLength(0);
    expect(renderedItem.find('.btn-set-incompleted')).toHaveLength(1);
  });
});
