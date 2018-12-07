import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, Button, CardSection, Input, Spinner } from './common';
import firebase from 'firebase';

class LoginForm extends Component {
    state = { email: '', password: '', err: '', loading: false };

    onButtonPress(){
        const { email, password } = this.state;
        this.setState({err: '', loading: true});
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(this.onLoginFail.bind(this));
        });
    }

    onLoginFail(){
       this.setState({ err: 'Authentication Failed', loading: false });
    }

    onLoginSuccess() {
       this.setState({
            email: '', 
            password: '',
            err: '',
            loading: false
            });
    }

    renderButton(){
        if(this.state.loading){
            return <Spinner size='large' />
        };

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
            Log In
           </Button> 
        );
    }

    render(){
        return(
            <Card>
                <CardSection>
                    <Input 
                    value={this.state.text}
                    onChangeText={text => this.setState({ email: text })}
                    label="Email"
                    placeholder="User@email.com"
                    />
                </CardSection>    
                <CardSection>
                    <Input 
                     placeholder="password"
                     value={this.state.password}
                     onChangeText={password => this.setState({ password })}
                     label='Password'
                     secureTextEntry
                    />
                </CardSection>

                <Text style={styles.errTextStyle}>{this.state.err}</Text>    

                <CardSection>
                     {this.renderButton()}
               </CardSection> 
            </Card>    
        );
    }
}

const styles = {
    errTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

export default LoginForm;