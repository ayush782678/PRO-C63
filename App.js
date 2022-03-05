import * as React from 'react';
import { Text, View, StyleSheet, TextInput,TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      displayText:""
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={'#9c8210'}
          centerComponent={{
            text: 'monkey chunky',
            style: { color: '#fff', fontSize: 20 },
          }}
        />
        <TextInput
          onChangeText={(text) => {
            this.setState({ text: text });
          }}
          value={this.state.text}
          style={styles.inputbox}></TextInput>
          <TouchableOpacity onPress={()=>{this.setState({displayText:this.state.text})}} style={styles.goButton}><Text style={styles.buttonText}>Search</Text></TouchableOpacity>
<Text style={styles.displayText}>{this.state.displayText}
</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a8b8b8',
  },
  inputbox: {
    marginTop: 200,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  goButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
  },
  buttonText: { textAlign: 'center', fontSize: 30, fontWeight: 'bold' },
  displayText: { textAlign: 'center', fontSize: 30 },
});
