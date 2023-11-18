import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from 'react-native-ionicons'

const HomeUser = ({ navigation }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://192.168.1.4:8000/api/product').then(response => {
      setData(response.data)
      .catch(error => console.log(error))
    })
  }, [])

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView className="flex">
        <View className="text-2xl mt-6 w-full p-3 border-b border-slate-300 flex flex-row justify-between items-center bg-white" >
          <Text className="text-base font-bold">MyCanteen</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Icon name='add' />
          </TouchableOpacity>
        </View>
        <View className="p-3">
          <View className="bg-blue-600 p-4 rounded-lg">
            <Text className="text-white text-bold">Saldo: Rp100.000</Text>
          </View>
        </View>
        <View style={styles.app}>
          <FlatList
            data={data}
            numColumns={2}
            keyExtractor={item => item.id}
            renderItem={({item}) => <Text>{item.name}</Text>}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const Item = ({ item }) => {
  return <View style={styles.item} className="w-full flex">

  </View>;
};

const styles = {
  app: {
    flex: 2, // the number of columns you want to devide the screen into
    marginHorizontal: "auto",
    width: 400
  },
  item: {
    flex: 1,
    maxWidth: "100%", // 100% devided by the number of rows you want
    alignItems: "center",

    // my visual styles; not important for the grid
    padding: 10,
    // backgroundColor: "rgba(249, 18  0, 45, 0.25)",
    // borderWidth: 1.5,
    // borderColor: "#fff"
  }
};

export default HomeUser;