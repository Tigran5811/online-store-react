import React from 'react';
import { Consumer } from '../context/DialogsContext';

export const withDialog = (Component) => class Wrapper extends React.Component {
  render() {
    return (
      <Consumer>
        {(value) => <Component {...value} {...this.props} />}
      </Consumer>
    );
  }
};
