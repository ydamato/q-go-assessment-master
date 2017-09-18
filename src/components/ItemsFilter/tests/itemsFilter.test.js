import React from 'react';
import { shallow } from 'enzyme';
import { ItemsFilter } from '../index';

const defaultProps = {
  showOnlyCompleted: false,
  toggleFilter: jest.fn()
};

describe('ItemsFilter', () => {
  it('should display "show completed" button', () => {
    const renderedItem = shallow(<ItemsFilter {...defaultProps} />);
    expect(renderedItem.find('.btn-show-all')).toHaveLength(0);
    expect(renderedItem.find('.btn-show-completed')).toHaveLength(1);
  });

  it('should display "show all" button', () => {
    defaultProps.showOnlyCompleted = true;
    const renderedItem = shallow(<ItemsFilter {...defaultProps}  />);
    expect(renderedItem.find('.btn-show-all')).toHaveLength(1);
    expect(renderedItem.find('.btn-show-completed')).toHaveLength(0);
  });
});
