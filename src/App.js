import React, { Component } from 'react';
import { View } from 'react-native';
import Firebase from '../config/firebase';
import { Card, Header, CardSection, Button } from './compnents/common';
import LoginForm from './compnents/LoginForm';

class App extends Component{
    componentWillMount(){
    }
    render(){
        return(
            <View>
                <Header headerText='Authentication'/>
                <LoginForm />
            </View>
        );
    }
};


export default App;