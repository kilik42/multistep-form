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
                  defaultValue={values.firstName}
              />

                <br/>
              <TextField
                  hintText="enter your last name"
                  floatingLabelText="Last Name"
                  onChange={handleChange('lastName')}
                  defaultValue={values.lastName}
              />

                 <br/>
              <TextField
                  hintText="enter your email"
                  floatingLabelText="Email"
                  onChange={handleChange('firstName')}
                  defaultValue={values.email}
              />

                <br/>

                <RaisedButton
                    label ="Continue"
                    primary={true}
                    style={styles.button}

                    onClick={this.continue}

                    
                />

          </React.Fragment>
      </MuiThemeProvider>
    );
  }
}


const styles = {
  button: {
    margin: 15
  }
}
FormUserDetails.propTypes = {
  prop: PropTypes.type.isRequired
}

export default FormUserDetails;
