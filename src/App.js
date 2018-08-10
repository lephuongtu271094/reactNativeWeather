/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { MainStack } from './navigation/MainStack';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import addReducers from './reducers/index';
let store = createStore(addReducers);
const App = () => (
    <Provider store={store}>
        <MainStack />
    </Provider>
);

export default App;