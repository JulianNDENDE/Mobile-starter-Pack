import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';


export default Login = () => {
    const nav = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('Login', email);
        nav.navigate('Main', { email });
    };

    return (
        <View style={styles.container}>
            <TextInput
                label="Email"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
            />
            <TextInput
                label="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={styles.input}
            />
            <Button mode="contained" onPress={handleLogin}>
                Login
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    input: {
        marginBottom: 16,
        width: '100%',
    },
});
