import React, { Component } from 'react';
import { View } from 'react-native';
import Firebase from '../config/firebase';
import { Card, Header, CardSection, Button, Spinner } from './compnents/common';
import LoginForm from './compnents/LoginForm';

class App extends Component{
    
    state = { loggedIn: null };

    componentWillMount(){
        Firebase.auth().onAuthStateChanged((user) => {
            if(user){
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false})
            }
        })
    }
renderContent(){
    switch(this.state.loggedIn){
        case true:
           return (<CardSection>
                      <Button onPress={() => Firebase.auth().signOut()}>
                        Log Out
                      </Button>
                    </CardSection>);
        case false:
          return <LoginForm />;

        default:
            return <Spinner size='large' />;
    }

   
    
}

    render(){
        return(
            <View>
                <Header headerText='Authentication'/>
                {this.renderContent()}
            </View>
        );
    }
};


export default App;