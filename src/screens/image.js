import React, { Component } from 'react'
import { StyleSheet, ActivityIndicator, View, } from 'react-native'

import ImageInfo from '../components/image'

import { getImage, getInfo } from '../utils/flickr'

export default class ImageScreen extends Component {

  constructor (props) {
    super(props);

    this.state = {
      uri: '',
      info: {}
    };
  }

  async componentDidMount () {
    const { id } = this.props.navigation.state.params;

    const [uri, info] = await Promise.all([getImage(id, 3), getInfo(id)]);

    this.setState({
      uri,
      info
    });
  }

  render () {
    return (
      <View style={styles.container}>
        {!this.state.uri
          ? <ActivityIndicator size="large" color="#0000ff"/>
          : <ImageInfo {...this.state} />}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 30
  }
})
