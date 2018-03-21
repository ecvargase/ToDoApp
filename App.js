import React from 'react';
import { StyleSheet, View, AsyncStorage, Button } from 'react-native';
import Header from './Header';
import Body from './Body';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tareas: [],
      texto: '',
    };
  }

  setText = (value) => {
    console.log(value);
    this.setState({ texto: value });
  }

  addJob = () => {
    this.setState({
      tareas: [...this.state.tareas, { texto: this.state.texto, key: Date.now() }],
      texto: '',
    });
    console.log(this.state.tareas.length);
  }

  removeJob = (id) => {
    const newJob = this.state.tareas.filter((tarea) => {
      return tarea.key !== id;
    });
    this.setState({
      tareas: newJob,
    });
  }

  saveStorage = () => {
    AsyncStorage.setItem('@AppToDo:arrayJobs', JSON.stringify(this.state.tareas))
      .then((valor) => {
        console.log(valor);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  readStorage = () => {
    AsyncStorage.getItem('@AppToDo:arrayJobs')
      .then((valor) => {
        console.log(JSON.parse(valor));
      })
      .catch((error) => {
        console.log(error);
      });
  }


  render() {
    return (
      <View style={styles.container}>
        <Header
          setText={this.setText}
          add={this.addJob}
          text={this.state.texto}
        />
        <Button
          title="Guardar"
          onPress={this.saveStorage}
        />
        <Button
          title="Leer"
          onPress={this.readStorage}
        />

        <Body
          jobs={this.state.tareas}
          deleteJobApp={this.removeJob}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
