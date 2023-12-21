import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

// Map => info

const data = require('../Recetas.json');

const Carrusel = ({ space }) => {
  return (
    <View>
      <Text>{space}</Text>
      <FlatList horizontal
          data={data.recetas}
          renderItem={({ item }) => (
          <TouchableOpacity>
              {/* Imagen */}
              <Text>{item.nombre}</Text>
          </TouchableOpacity>
          )}
      />
    </View>
);
};

const MainPage = () => {
  return (
    <View>
      <Carrusel space='Trendig' />
      <Carrusel space='Recents' />
    </View>
  );
};

export default MainPage;