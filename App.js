/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button 
} from 'react-native';
import Sound from 'react-native-sound'
import AudioPlayer from 'react-native-play-audio';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
const url ="https://firebasestorage.googleapis.com/v0/b/journalists-80ee8.appspot.com/o/user-events%2F1jEeLNlKgZdSYm5u9wADFjoXE632%2F-L35fvSSudpK7Od2olcM-1516235634740.aac?alt=media&token=f8f7164b-6687-4041-8f02-8c748bcc10df"
export default class App extends Component<{}> {
  playTrack = () => {
    const track = new Sound(url, null, (e) => {
      if (e) {
        console.log('error loading track:', e)
      } else {
        track.play()
      }
    })
  }

  aplay = () =>{
    AudioPlayer.prepare(url, () => {
      AudioPlayer.play();
        
      
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
         <Button title="play me" onPress={this.aplay} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
