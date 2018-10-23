import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from '@firebase/app'
import '@firebase/auth'
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
        apiKey: "AIzaSyCVNSFQNTskAmx9guVQbFXiGAn9pzebgeQ",
        authDomain: "manager-7dde4.firebaseapp.com",
        databaseURL: "https://manager-7dde4.firebaseio.com",
        projectId: "manager-7dde4",
        storageBucket: "manager-7dde4.appspot.com",
        messagingSenderId: "783547901786"
      };
      firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
          <LoginForm />
      </Provider>
    );
  }
}

export default App;