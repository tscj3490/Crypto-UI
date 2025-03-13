import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AccountHeader from '../components/AccountHeader';
import Feather from '@expo/vector-icons/Feather';
const Activity: React.FC = () => {

  return(
    <View className="flex-1 w-screen bg-[#222222]">
    <AccountHeader accountName="Account 1" accountNumber={1} screenNumber={4}/>
     <View className='flex my-3 h-3/4 items-center content-center'>
     <View className='flex-row pb-4 w-screen justify-between items-center'>
      <Text className='text-start text-white mx-auto' style = {{ fontFamily: 'Inter', fontSize: 22 }}>Recent Activity</Text>
      <TouchableOpacity className='mr-3'>
        <Feather name="more-horizontal" size={14} color="#666666" />
      </TouchableOpacity>
     </View>
      <Text className='text-center text-[#919191] font-medium my-auto' style = {{ fontFamily: 'Inter', fontSize: 18 }}>No activity</Text>
      </View>
    </View>
  );
};

export default Activity