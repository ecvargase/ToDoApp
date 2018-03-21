import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Tarea from './Tarea';

class Body extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.jobs}
                    renderItem={({ item }) =>
                        <Tarea item={item} deleteJobBody={this.props.deleteJobApp} />}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 8,
        backgroundColor: '#aaaa',
    },
});

export default Body;
