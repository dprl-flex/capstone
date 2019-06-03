import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';

export default class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = (ev, history) => {
    this.props.navigation.navigate('Family');
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.header}>Mender</Text>
          <Text style={{ fontSize: 12, marginBottom: 16 }}>
            login to your account
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={email => this.setState({ email })}
          />
          <TextInput
            style={styles.input}
            secureTextEntry
            placeholder="password"
            onChangeText={password => {
              this.setState({ password });
            }}
          />

          <TouchableOpacity
            style={{
              backgroundColor: '#8EB51A',
              padding: 10,
              margin: 10,
              width: 300
            }}
            onPress={this.handleSubmit}
          >
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: '#7DC6CD',
              padding: 10,
              margin: 10,
              width: 300
            }}
            onPress={() => this.props.navigation.navigate('SignUp')}
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#FF9900',
              padding: 10,
              margin: 10,
              width: 300
            }}
            onPress={() => this.props.navigation.navigate('ForgotPassword')}
          >
            <Text style={styles.buttonText}>Forgot Password</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    height: 40,
    backgroundColor: '#D3D3D4',
    marginBottom: 20,
    width: 300,
    paddingHorizontal: 10
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF'
  },
  header: {
    padding: 10,
    marginBottom: 30,
    fontSize: 75
  }
});
