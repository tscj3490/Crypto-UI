import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AccountHeader from '../components/AccountHeader';


const Swap: React.FC = () => {

  return(
    <View className="flex-1 w-screen bg-[#222222]">
      <AccountHeader accountName="Account 1" accountNumber={1} screenNumber={3}/>
      {/* <View className='flex-row p-4 bg-black justify-between'>
      <Text className='text-start text-white' style = {{ fontFamily: 'Inter', fontSize: 18 }}>Swap Token</Text>
        <TouchableOpacity >
          <Ionicons name="shield-checkmark" size={16} color="white" />
        </TouchableOpacity>     
      </View> */}
     <View className='flex my-6 h-3/4 items-center justify-center'>
      <Text className='text-center text-white font-medium m-auto' style = {{ fontFamily: 'Inter', fontSize: 18 }}>Want to swap tokens?</Text>
     </View>
    </View>

  );
};

export default Swap;