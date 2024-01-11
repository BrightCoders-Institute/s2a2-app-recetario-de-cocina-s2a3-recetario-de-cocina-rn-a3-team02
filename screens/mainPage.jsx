import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

// Map => info

const trending = require('../Recetas_Trending.json');
const recents = require('../Recetas_Recientes.json');

export const truncateString = (str, num) => {
  if (str === undefined) {
    return '';
  }

  if (Array.isArray(str)) {
    return str.join('').length > num
      ? str.join('').slice(0, num) + '...'
      : str.join('');
  }
  return str.length > num ? str.slice(0, num) + '...' : str;
};

const Carrusel = ({space, navigation}) => {
  const {data, style, title} = space
    ? {data: recents, style: styles.recents, title: 'Recents'}
    : {data: trending, style: styles.trending, title: 'Trending'};

  return (
    <View style={style}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        contentContainerStyle={styles.list}
        data={data.recetas}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() =>
              navigation.push('Details', {
                details: item,
                category: title,
              })
            }>
            <Image
              source={{uri: item.foto}}
              style={styles.image}
              onError={e => console.log('Error loading image', e)}
            />
            <Text style={styles.titleColor}>
              {truncateString(item.nombre, 12)}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const MainPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.navigator}>
        <Text>Navegador</Text>
      </View>
      <Carrusel space={false} navigation={navigation} />
      <Carrusel space={true} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    columnGap: 30,
  },
  container: {
    flex: 1,
    padding: 20,
    rowGap: 10,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#B83B6F',
    paddingBottom: 15,
  },
  navigator: {
    flex: 0.4,
  },
  recents: {
    flex: 1,
  },
  trending: {
    flex: 1,
    paddingBottom: 1,
  },
  image: {
    width: 150,
    height: 150,

    borderRadius: 10,
  },
  itemContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
  },
  titleColor: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 15,
  },
});

export default MainPage;
