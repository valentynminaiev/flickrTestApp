import React, { Component } from 'react';
import {
  StyleSheet,
  ActivityIndicator,
  View,
} from 'react-native';
import ThumbImage from '../components/thumb'

import { getImage } from '../utils/flickr'

export default class ThumbWrap extends Component {

  constructor(props) {
    super(props)

    this.state = {
      uri: undefined,
    }
  }

  async componentDidMount() {
    const { id } = this.props.photo;

    const uri = await getImage(id, 0);

    this.setState({
      uri
    })
  }

  handleOnPress = () => {
    this.props.handleOpenPhoto(this.props.photo.id);
  }

  render() {
    return (
      <View style={styles.container}>
        {!this.state.uri
          ? <ActivityIndicator size="small" color="#0000ff" />
          : <ThumbImage uri={this.state.uri} handleOnPress={this.handleOnPress} />
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: 75,
    height: 75,
    margin: 3,
    marginTop: 0,
    marginRight: 0,
    alignContent: 'center',
    justifyContent: 'center'
  },
})
