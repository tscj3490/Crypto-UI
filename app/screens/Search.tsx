import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AccountHeader from '../components/AccountHeader';


const Search: React.FC = () => {
  return(
    <View className="flex-1 w-screen bg-[#222222]">
          <AccountHeader accountName="Account 1" accountNumber={1} screenNumber={5}/>

     <View className='flex-row p-2 justify-center items-center'>
      <View className='flex-row justify-start items-center p-2  bg-[#181818] border border-[#2F2F2F] rounded-md py-1'>
      <Ionicons name="search" size={18} color="#666666" />
      <TextInput className='text-start text-white w-[90%]' style = {{ fontFamily: 'Inter', fontSize: 14 }} 
      placeholder=' Search for sites, tokens'
      placeholderTextColor={'#666666'}/>
      </View>
     </View>
     <View className='flex my-6 h-3/4 items-center'>
      <Text className='text-center text-white font-medium ' style = {{ fontFamily: 'Inter', fontSize: 18 }}>Search Page</Text>
     </View>
    </View>

  );
};

export default Search;