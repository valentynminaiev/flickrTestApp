import React from 'react'
import {
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native'
import PropTypes from 'prop-types';

const ThumbImage = ({handleOnPress, uri}) =>
  <TouchableOpacity onPress={handleOnPress}>
    <Image style={styles.thumb} source={{uri}} />
  </TouchableOpacity>

export default ThumbImage

ThumbImage.propTypes = {
  handleOnPress: PropTypes.func.isRequired,
  uri: PropTypes.string.isRequired,
}

const styles = StyleSheet.create({
  thumb: {
    width: 75,
    height: 75
  }
})
