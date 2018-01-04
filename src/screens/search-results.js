import React, { Component } from 'react'
import { StyleSheet, ActivityIndicator, ScrollView, Text, View, } from 'react-native'

import ImageThumb from '../containers/thumb'

import { getResults } from '../utils/flickr'

export default class SearchScreen extends Component {

  constructor (props) {
    super(props)

    this.state = {
      photos: []
    }
  }

  async componentDidMount () {
    const { request } = this.props.navigation.state.params

    const photos = await getResults(request)

    this.setState({ photos })
  }

  handleOpenPhoto = (id) => {
    this.props.navigation.navigate('Image', { id })
  }

  render () {
    const { request } = this.props.navigation.state.params

    return (
      <View style={styles.container}>
        <ScrollView>

          <Text style={styles.text}>{request}</Text>

          <View style={styles.results}>

            {this.state.photos.length === 0 ? (
              <ActivityIndicator size="large" color="#0000ff"/>
            ) : (
              this.state.photos.map(photo => <ImageThumb
                key={photo.id}
                photo={photo}
                handleOpenPhoto={this.handleOpenPhoto} />
              )
            )}

          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 30
  },
  text: {
    fontSize: 20,
    marginBottom: 15
  },
  results: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});
