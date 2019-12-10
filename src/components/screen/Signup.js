import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Button from '../shared/Button';
import TextInput from '../shared/TextInput';
import { colors } from '../../utils/Styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',

    flexWrap: 'nowrap',
  },
  wrapper: {
    marginTop: 40,
    width: '78%',

    flexDirection: 'column',
    alignItems: 'center',
  },
  btnWrapper: {
    width: '100%',

    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  btnRegister: {
    backgroundColor: colors.dodgerBlue,
    borderColor: colors.dodgerBlue,
    borderRadius: 4,
    borderWidth: 1,
    width: 136,
    height: 60,
    marginLeft: 4,
    marginTop: 24,
    marginBottom: 48,
    shadowColor: colors.dodgerBlue,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 4,
    shadowOpacity: 0.3,

    alignItems: 'center',
    justifyContent: 'center',
  },
  txtRegister: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
})
export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: '',
      statusMsg: '',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <TextInput
            style={{marginTop: 40}}
            txtLabel='EMAIL'
            txtHint='Please write email address.'
            txt={this.state.email}
            onTextChagned={(text) => {this.onTextChanged('EMAIL', text);}} 
          />
          <TextInput
            style={{ marginTop: 24 }}
            txtLabel='PASSWORD'
            txtHint='Pleas write password.'
            txt={ this.state.password }
            onTextChagned={(text) => {this.onTextChanged('PASSWORD', text);}}
            isPassword 
          />
          <TextInput
            style={{ marginTop: 24 }}
            txtLabel='NAME'
            txtHint='Pleas write name'
            txt={ this.state.name }
            onTextChagned={(text) => {this.onTextChanged('NAME', text);}} 
          />
          <TextInput
            style={{ marginTop: 24 }}
            txtLabel='STATUS MESSAGE'
            txtHint='Pleas write status message.'
            txt={ this.state.statusMsg }
            onTextChagned={(text) => {this.onTextChanged('STATUS_MSG', text);}} 
          />
          <View style={styles.btnWrapper}>
            <Button
              isLoading={this.state.isRegistering}
              onPress={() => {}}
              style={styles.btnRegister}
              textStyle={styles.txtRegister}
            >Register</Button>
          </View>
        </View>
      </View>
    );
  }

  onTextChanged = (type, text) => {
    switch(type) {
        case 'EMAIL':
            this.setState({
                email: text,
            });
        break;
        case 'PASSWORD':
            this.setState({
                password: text,
            });
        break;
        case 'NAME':
            this.setState({
                name: text,
            });
        break;
        case 'STATUS_MSG':
            this.setState({
                statusMsg: text,
            });
        break;
    }
  } 
}