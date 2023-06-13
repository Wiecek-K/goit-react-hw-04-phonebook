import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

class Filter extends Component {
  static propTypes = {
    onInputChange: PropTypes.func.isRequired,
  };

  render() {
    return (
      <>
        <p>Find contact by name</p>
        <input
          className={css.input}
          type="text"
          name="filter"
          onChange={this.props.onInputChange}
        />
      </>
    );
  }
}
export default Filter;
