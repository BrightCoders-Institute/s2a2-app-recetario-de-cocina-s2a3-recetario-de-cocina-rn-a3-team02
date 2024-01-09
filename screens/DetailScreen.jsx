import React from 'react';
import {View, Text, Image} from 'react-native';

class DetailSCreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {route} = this.props;

    const params = route.params || {};
    const {details = {}} = params;
    return (
      <View>
        <Text>{details.id}</Text>
        <Text>{details.nombre}</Text>
        <Image
          source={{uri: details.foto}}
          style={{width: 100, height: 100}}
          onError={e => console.log('Error loading image', e)}
        />
        <Text>{details.foto}</Text>
        <Text>{details.porciones}</Text>
      </View>
    );
  }
}

export default DetailSCreen;
