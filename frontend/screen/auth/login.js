import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Button, BackHandler } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { buttonStyle, textInputStyle } from '../../assets/style/basic';

function LoginScreen({ navigation }) {
  const [text, onChangeText] = useState('Useless Text');

  return (
    <SafeAreaView className="bg-white h-full">
      <View className="flex">
        <View className="text-2xl w-full p-3 border-b border-slate-300 flex flex-row justify-between items-center" >
          <Text className="text-base font-bold">Login</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text className="text-md text-blue-600 font-bold">Sign In</Text>
          </TouchableOpacity>
        </View>
        <View className="p-3 pt-6">
          <View>
            <Text className="text-md py-2">Username</Text>
            <TextInput

              className={`${textInputStyleLogin}`}
              onChangeText={onChangeText}
              placeholder='Username'
            // value={text}
            />
          </View>
          <View className="">
            <Text className="text-md py-2">Password</Text>
            <TextInput
              className={`${textInputStyleLogin} border`}
              onChangeText={onChangeText}
              placeholder='Password'
            // value={text}
            />
          </View>
          <View className="mt-4">
            <TouchableOpacity onPress={() => {navigation.navigate('TabUser')}} className={`${buttonStyle}`}>
              <Text className="text-white text-base font-bold">Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
const textInputStyleLogin =
  "tracking-widest border p-3 py-2 text-base border-slate-300 rounded-lg w-full text-base ";


const styles = StyleSheet.create({})

export default LoginScreen;
