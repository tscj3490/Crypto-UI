import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const Activity: React.FC = () => {

  return(
    <View className="flex-1 w-screen bg-[#222222]">
     <View className='flex-row p-4 bg-black justify-between items-center'>
      <Text className='text-start text-white' style = {{ fontFamily: 'Inter, Roboto, Arial', fontSize: 22 }}>Recent Activity</Text>
      <TouchableOpacity >
          <Ionicons name="link-sharp" size={16} color="white" />
        </TouchableOpacity>     
     </View>
     <View className='flex my-6 h-3/4 items-center'>
      <Text className='text-center text-[#919191] font-medium ' style = {{ fontFamily: 'Inter, Roboto, Arial', fontSize: 18 }}>No Activity</Text>
     </View>
    </View>

  );
};

export default Activity