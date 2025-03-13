import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AccountHeader from '../components/AccountHeader';
import Icons from '../../assets/svg/Crypto-Icon'
const Collectible: React.FC = () => {
  return(
    <View className="flex-1 w-screen bg-[#222222]">
      <AccountHeader accountName="Account 1" accountNumber={1} screenNumber={2}/>
      {/* <View className='flex-row p-4 bg-black justify-between'>
      <Text className='text-start text-white' style = {{ fontFamily: 'Inter', fontSize: 18 }}>Your Collectibles</Text>
        <TouchableOpacity >
          <Ionicons name="add" size={16} color="white" />
        </TouchableOpacity>     
      </View> */}
     <View className='flex my-6 h-3/4 items-center'>
      <Icons.Collectible />
      <Text className='text-center text-white font-semibold m-3' style = {{ fontFamily: 'Inter', fontSize: 16 }}>No Collectibles found</Text>
      <Text className='text-center text-[#999999] font-normal mx-20' style = {{ fontFamily: 'Inter', fontSize: 14 }}>Buy or transfer a collectible to start building your collection</Text>
      <View className='flex-row justify-center items-center mt-6'>
      <Icons.Manage />
      <Text className='text-center text-[#777777] font-medium pl-2' style = {{ fontFamily: 'Inter', fontSize: 16 }}>Manage collectible list</Text>
      </View>
     </View>
    </View>

  );
};

export default Collectible;