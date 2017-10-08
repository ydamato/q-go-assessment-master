
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { importTodos } from '../../logic/actions';

export const ItemsImport = ({ importTodos }) => {
  return (
    <div>
        <button className="btn-import" onClick={importTodos}>Import todos</button>
    </div>
  );
};

ItemsImport.propTypes = {
  importTodos: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  importTodos: () => dispatch(importTodos())
});


export default connect(null,mapDispatchToProps)(ItemsImport);
