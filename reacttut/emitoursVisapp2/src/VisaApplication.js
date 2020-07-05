import React, { Component } from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';


class VisaApplication extends Component {

    static navigationOptions = {
        title : "Visa Application Home"
        }

  render() {
    return (
            <View style={styles.container}>
            <Text style={{fontSize : 25, marginBottom : 20}}>Visa Application Home</Text><Button
            title='About'
            onPress = {() => this.props.navigation.navigate('About')}
            />
            </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default VisaApplication;
