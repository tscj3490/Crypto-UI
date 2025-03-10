import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const Swap: React.FC = () => {

  return(
    <View className="flex-1 w-screen bg-[#222222]">
      <View className='flex-row p-4 bg-black justify-between'>
      <Text className='text-start text-white' style = {{ fontFamily: 'Inter, Roboto, Arial', fontSize: 18 }}>Swap Token</Text>
        <TouchableOpacity >
          <Ionicons name="shield-checkmark" size={16} color="white" />
        </TouchableOpacity>     
      </View>
     <View className='flex my-6 h-3/4 items-center justify-center'>
      <Text className='text-center text-white font-medium m-auto' style = {{ fontFamily: 'Inter, Roboto, Arial', fontSize: 18 }}>Want to swap tokens?</Text>
     </View>
    </View>

  );
};

export default Swap;