import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Collectible: React.FC = () => {

  return(
    <View className="flex-1 w-screen bg-[#222222]">
      <View className='flex-row p-4 bg-black justify-between'>
      <Text className='text-start text-white' style = {{ fontFamily: 'Inter, Roboto, Arial', fontSize: 18 }}>Your Collectibles</Text>
        <TouchableOpacity >
          <Ionicons name="add" size={16} color="white" />
        </TouchableOpacity>     
      </View>
     <View className='flex my-6 h-3/4 items-center justify-center'>
      <Text className='text-center text-white font-medium m-auto' style = {{ fontFamily: 'Inter, Roboto, Arial', fontSize: 18 }}>No Collectibles</Text>
     </View>
    </View>

  );
};

export default Collectible;