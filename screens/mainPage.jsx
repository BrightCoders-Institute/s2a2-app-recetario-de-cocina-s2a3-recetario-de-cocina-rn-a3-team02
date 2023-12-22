import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

// Map => info

const data = require('../Recetas.json');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  navegador: {
    flex: 1,
    backgroundColor: 'lightgreen',
  },
  recents: {
    flex: 3,
    backgroundColor: 'pink',
  },
  trending: {
    flex: 2,
    backgroundColor: 'lightblue',
  },
  itemContainer: {
    // item
  },
});

const Carrusel = ({space}) => {
  return (
    <View style={space ? styles.recents : styles.trending}>
      <Text>{space ? 'Recents' : 'Trending'}</Text>
      <FlatList
        horizontal
        data={data.recetas}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.itemContainer}>
            <Image
              source={{uri: item.foto}}
              style={{width: 150, height: 150}}
              onError={e => console.log('Error loading image', e)}
            />
            <Text>{item.nombre}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const MainPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navegador}>
        <Text>Navegador</Text>
      </View>
      <Carrusel space={false} />
      <Carrusel space={true} />
    </View>
  );
};

export default MainPage;
