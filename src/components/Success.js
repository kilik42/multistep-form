import React, { Component, PropTypes } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppBar from 'material-ui/AppBar';

/**
 * FormUserDetails
 */
export class Success extends Component { // eslint-disable-line react/prefer-stateless-function
  continue = e => {
    e.preventDefault();
    //process form

    this.props.nextStep();

  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {

    return (
      <MuiThemeProvider>
          <React.Fragment>
              <AppBar title="Success"/>

             <h1>Thank you for  your submission </h1>
             <p> You will get an email with further instructions </p>
          </React.Fragment>
      </MuiThemeProvider>
    );
  }
}




export default Success;
