import React from 'react';
import {View, Text, ImageBackground, StyleSheet, FlatList} from 'react-native';

const Ingrediente = ({nombre, cantidad}) => {
  return (
    <View style={styles.ingredContainer}>
      <Text style={[styles.text, styles.ingrediente]}>{nombre}</Text>
      <Text style={[styles.text, styles.cantidad]}>{cantidad}</Text>
    </View>
  );
};

class DetailSCreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {route} = this.props;

    const params = route.params || {};
    const {details = {}, category} = params;
    return (
      <View style={styles.back}>
        <ImageBackground
          source={{uri: details.foto}}
          resizeMode="cover"
          style={styles.containerImg}>
          <View style={{opacity: 1}}>
            <Text style={styles.textImg}>{category}</Text>
            <Text style={styles.textImg}>{details.nombre}</Text>
          </View>
        </ImageBackground>
        <View style={styles.containerText}>
          <Text style={styles.text}>{details.porciones}</Text>
          <FlatList
            contentContainerStyle={{marginTop: 20}}
            data={details.ingredientes}
            renderItem={({item}) => (
              <Ingrediente nombre={item.ingrediente} cantidad={item.cantidad} />
            )}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  back: {
    flex: 1,
    backgroundColor: '#262625',
  },
  text: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
  textImg: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 30,
  },
  containerImg: {
    flex: 1,
    padding: 20,
    opacity: 0.8,
    justifyContent: 'flex-end',
  },
  containerText: {
    flex: 1,
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
