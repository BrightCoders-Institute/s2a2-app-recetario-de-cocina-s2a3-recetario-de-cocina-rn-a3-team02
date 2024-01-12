import React from 'react';
import {View, Text, ImageBackground, StyleSheet, FlatList} from 'react-native';

import Button from '../src/components/Button';

import liked from '../img/liked.png';
import unLiked from '../img/unliked.png';

import send from '../img/send.png';
import sended from '../img/sended.png';

const Ingrediente = ({nombre, cantidad}) => {
  return (
    <View style={styles.ingredContainer}>
      <Text style={[styles.text, styles.ingrediente]}>{nombre}</Text>
      <Text style={[styles.text, styles.cantidad]}>{cantidad}</Text>
    </View>
  );
};

const DetailSCreen = props => {
  const {route} = props;

  const params = route.params || {};
  const {details = {}, category} = params;
  return (
    <View style={styles.back}>
      <ImageBackground
        source={{uri: details.foto}}
        resizeMode="cover"
        style={styles.containerImg}>
        <Button state1={liked} state2={unLiked} processNum={1} />
        <Button state1={send} state2={sended} processNum={2} />
        <View style={styles.imageText}>
          <Text style={styles.textImg}>{category}</Text>
          <Text style={styles.textImg}>{details.nombre}</Text>
        </View>
      </ImageBackground>
      <View style={styles.containerText}>
        <Text style={styles.text}>{details.porciones}</Text>
        <FlatList
          contentContainerStyle={{marginTop: 20, paddingBottom: 20}}
          data={details.ingredientes}
          renderItem={({item}) => (
            <Ingrediente nombre={item.ingrediente} cantidad={item.cantidad} />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  back: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    color: 'black',
    fontSize: 17,
    fontWeight: 'bold',
  },
  imageText: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  textImg: {
    color: 'black',
    fontSize: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    paddingLeft: 10,
  },
  containerImg: {
    flex: 0.4,
    padding: 20,
  },
  containerText: {
    flex: 0.6,
    margin: 10,
    paddingTop: 5,
    rowGap: 15,
  },
  ingredContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 15,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.2,
  },
  ingrediente: {
    flex: 1,
  },
  cantidad: {
    flex: 1,
    textAlign: 'right',
  },
});

export default DetailSCreen;
