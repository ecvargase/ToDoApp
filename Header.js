import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

class Header extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Header</Text>
                <TextInput
                    style={styles.texto}
                    onSubmitEditing={this.props.add}
                    onChangeText={this.props.setText}
                    placeholder="Texto a escribir"
                    value={this.props.text}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#eeee',
        justifyContent: 'center',
    },
    texto: {
        paddingHorizontal: 16,
        fontSize: 25,
    },
});


export default Header;
