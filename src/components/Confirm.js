import React, { Component, PropTypes } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

/**
 * FormUserDetails
 */
export class FormUserDetails extends Component { // eslint-disable-line react/prefer-stateless-function
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
    const {values: {firstName, lastName, email, occupation, city, bio}} = this.props;

    return (
      <MuiThemeProvider>
          <React.Fragment>
              <AppBar title="Confirm User Data"/>

            <List>
              <ListItem
              primaryText="First Name"
              secondaryText={ firstName}

              />
              <ListItem
              primaryText="last Name"
              secondaryText={ lastName}

              />

              <ListItem
              primaryText="email"
              secondaryText={ email}

              />
              <ListItem
              primaryText="occupation"
              secondaryText={ occupation}

              />
              <ListItem
              primaryText="city"
              secondaryText={ city}

              />
              <ListItem
              primaryText="bio"
              secondaryText={ bio}

              />
            </List>

                <RaisedButton
                    label ="Confirm & Continue"
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


export default FormUserDetails;
