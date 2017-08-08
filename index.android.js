// Index.android.js - place code in here for Android!!!

// Import a library to help create a component
import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header'
import AlbumList from './src/components/AlbumList'


// Create a component
const App = () => (
	<View style={{ flex: 1 }}>
		<Header headerText={'Albums'} />
		<AlbumList />
	</View>
);
// Render it to the device
AppRegistry.registerComponent('albums', () => App);
//Z:/reactnative/albums/android/app/src/main/java/src/components/header.js