import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// import SwitchComponent from '../src/components/SearchBar';
import Carrusel from '../src/components/Carrusel';
import SearchBar from '../src/components/SearchBar';

const MainPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.navigator}>
        <SearchBar />
      </View>
      <Carrusel space={false} navigation={navigation} />
      <Carrusel space={true} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    rowGap: 10,
    backgroundColor: 'white',
  },
  navigator: {
    flex: 0.4,
  },
  itemContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
  },
});

export default MainPage;

// const Carrusel = ({space, navigation}) => {
//   const truncateString = (str, num) => {
//     if (str === undefined) {
//       return '';
//     }

//     if (Array.isArray(str)) {
//       return str.join('').length > num
//         ? str.join('').slice(0, num) + '...'
//         : str.join('');
//     }
//     return str.length > num ? str.slice(0, num) + '...' : str;
//   };

//   const {data, style, title} = space
//     ? {data: recents, style: styles.recents, title: 'Recents'}
//     : {data: trending, style: styles.trending, title: 'Trending'};

//   return (
//     <View style={style}>
//       <Text style={styles.title}>{title}</Text>
//       <FlatList
//         horizontal
//         contentContainerStyle={styles.list}
//         data={data.recetas}
//         renderItem={({item}) => (
//           <TouchableOpacity
//             style={styles.itemContainer}
//             onPress={() =>
//               navigation.push('Details', {
//                 details: item,
//                 category: title,
//               })
//             }>
//             <Image
//               source={{uri: item.foto}}
//               style={styles.image}
//               onError={e => console.log('Error loading image', e)}
//             />
//             <Text style={styles.titleColor}>
//               {truncateString(item.nombre, 12)}
//             </Text>
//           </TouchableOpacity>
//         )}
//       />
//     </View>
//   );
// };
