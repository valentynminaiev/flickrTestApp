import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import PropTypes from 'prop-types';

const ImageInfo = ({uri, info}) =>
  <View style={styles.container}>
    <Image
      style={styles.image}
      source={{uri}}
    />
    <Text style={styles.text}>{info.owner.username} ({info.owner.realname})</Text>
  </View>

export default ImageInfo

ImageInfo.propTypes = {
  uri: PropTypes.string.isRequired,
  info: PropTypes.objectOf(PropTypes.any.isRequired),
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  image: {
    width: 240,
    height: 180
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 20
  }
})

