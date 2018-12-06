import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, Button, CardSection, Input } from './common';
import firebase from 'firebase';

class LoginForm extends Component {
    state = { email: '', password: '', err: '' };

    onButtonPress(){
        const { email, password } = this.state;
        this.setState({err: ''});
        firebase.auth().signInWithEmailAndPassword(email, password)
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch((err) =>{
                this.setState({err: 'Authentication Failed'});
            });
        });
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
                    <Button onPress={this.onButtonPress.bind(this)}>
                     Log In
                    </Button>    
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