import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const Search: React.FC = () => {
  return(
    <View className="flex-1 w-screen bg-[#222222]">
     <View className='flex-row p-4 bg-black justify-between items-center'>
      <View className="w-8 h-8 rounded-full bg-purple-400 items-center justify-center mr-2">
          <Text className="text-purple-900 font-bold text-xs">K</Text>
      </View>
      <View className='flex-row justify-start items-center w-4/5 bg-[#2b2b2b]  rounded-md p-2'>
      <Ionicons name="search" size={20} color="#8E8E93" />
      <TextInput className='text-start text-gray-400' style = {{ fontFamily: 'Inter, Roboto, Arial', fontSize: 14 }} 
      placeholder=' Search for sites, tokens'/>
      </View>
      <TouchableOpacity >
          <Ionicons name="add" size={16} color="white" />
      </TouchableOpacity>     
     </View>
     <View className='flex my-6 h-3/4 items-center'>
      <Text className='text-center text-white font-medium ' style = {{ fontFamily: 'Inter, Roboto, Arial', fontSize: 18 }}>Search Page</Text>
     </View>
    </View>

  );
};

export default Search;