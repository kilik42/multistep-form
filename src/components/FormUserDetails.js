import React, { Component, PropTypes } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

/**
 * FormUserDetails
 */
export class FormUserDetails extends Component { // eslint-disable-line react/prefer-stateless-function
  continue = e => {
    e.preventDefault();
    this.props.nextStep();

  }
  render() {
    const {values, handleChange} = this.props;

    return (
      <MuiThemeProvider>
          <React.Fragment>
              <AppBar title="Enter User Details"/>

              <TextField

                  hintText="enter your first name"
                  floatingLabelText="First Name"
                  onChange={handleChange('firstName')}
              />

          </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

FormUserDetails.propTypes = {
  prop: PropTypes.type.isRequired
}

export default FormUserDetails;
