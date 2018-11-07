import React, { Component, PropTypes } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FormUserDetails from './FormUserDetails';
/**
 * FormUserDetails
 */
export class FormPersonalDetails extends Component { // eslint-disable-line react/prefer-stateless-function
  continue = e => {
    e.preventDefault();
    this.props.nextStep();

  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const {values, handleChange} = this.props;

    return (
      <MuiThemeProvider>
          <React.Fragment>
              <AppBar title="Enter Personal Details"/>

              <TextField
                  hintText="enter your occupation"
                  floatingLabelText="Occupation"
                  onChange={handleChange('occupation')}
                  defaultValue={values.occupation}
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
                  hintText="enter your city"
                  floatingLabelText="city"
                  onChange={handleChange('city')}
                  defaultValue={values.city}
              />

                <br/>

                <TextField
                    hintText="enter your bio"
                    floatingLabelText="bio"
                    onChange={handleChange('bio')}
                    defaultValue={values.bio}
                />

                  <br/>

                <RaisedButton
                    label ="Continue"
                    primary={true}
                    style={styles.button}
                    onClick={this.continue}
                />

                <RaisedButton
                    label ="Back"
                    primary={false}
                    style={styles.button}
                    onClick={this.back}
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


export default FormPersonalDetails;
