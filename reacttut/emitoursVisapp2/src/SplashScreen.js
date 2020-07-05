import React, { Component } from 'react';
import {  Platform,StyleSheet, View, Text , Image,ActivityIndicator, Dimensions, Modal} from 'react-native';

class SplashScreen extends Component {
    componentDidMount()
    {
        setTimeout(() =>{
        this.props.navigation.navigate('Dashboard');
        },9000)
    }

  render() {
    return (
        <View style={styles.container}>
        <Image source={{uri:'asset:/logo/292045c9-0625-41e9-b717-eea6d8deb6e9_200x200.png'}}
        style={styles.logo}
        />

        <ActivityIndicator size="large" color="blue" style={{margin:10}} />
      </View>
    );
  }
}

const styles =  StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    logo:{
        width:150,
        height:150
    }

})

export default SplashScreen;
