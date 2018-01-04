import React, { Component } from 'react'
import { StyleSheet, Button, TextInput, View } from 'react-native'

export default class MainScreen extends Component {

  constructor (props) {
    super(props)

    this.state = { searchText: '' }
  }

  handleSearchButton = () => {
    this.props.navigation.navigate('SearchResults', { request: this.state.searchText })
  }

  render () {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={searchText => this.setState({ searchText })}
          value={this.state.searchText}
          placeholder={'Search images'}
        />

        <Button
          onPress={this.handleSearchButton}
          title="Go!"
          color="#841584"
          disabled={this.state.searchText.length === 0}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 30
  },
  input: {
    height: 40,
    padding: 5,
    borderColor: 'gray',
    borderWidth: 1
  }
});
