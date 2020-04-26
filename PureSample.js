import React from 'react';
import PropTypes from 'prop-types';

/**
 * 
 */
class PureSample extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(`PureSample rendering ... `);
    return (
    <div className="d-pure-sample">
      <b>{this.props.children}</b>
      <span>id = {this.props.id}</span>
      <span>name = {this.props.name}</span>
    </div>
    );
  };
}

PureSample.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  children: PropTypes.any
};

/**
 * 
 */
class FakePureSample extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(`Fake Sample rendering ... `);
    return (
    <div className="d-pure-sample">
      <b>{this.props.children}</b>
      <span>id = {this.props.user.id}</span>
      <span>name = {this.props.user.name}</span>
    </div>
    );
  };
}

PureSample.propTypes = {
  user: PropTypes.any,
  children: PropTypes.any
};

export { PureSample, FakePureSample };
