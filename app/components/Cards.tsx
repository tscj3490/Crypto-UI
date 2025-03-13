import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const Cards: React.FC = () => {
  const items = [
    { img: require('../../assets/images/buy-crypto.png'), label: 'BUY CRYPTO', desc:'Buy your first crypto with a debit or credit card.'  },
    { img: require('../../assets/images/transfer-crypto.png'), label: 'TRANSFER CRYPTO', desc:'Deposit crypto from another wallet or exchange.' },
  ];

  return (
    <View className="flex justify-between px-5 py-3">
      <Text className='text-white text-base' style = {{ fontFamily: 'Inter'}}>Let's get started!</Text>
      {items.map((item, index) => (
        <TouchableOpacity 
          key={index} 
          className="flex-row items-center justify-between p-4 my-1 bg-[#3c315b] bg-opacity-40 rounded-2xl mx-1 border border-1 border-[#3c315b]"
        >
          <View className='flex-column justify-between items-start w-full flex-auto'>
            <Text className="text-gray-400  font-medium" style = {{ fontFamily: 'Inter', fontSize: 13 }}>{item.label}</Text>
            <Text className="text-white font-medium" style = {{ fontFamily: 'Inter', fontSize: 16 }}>{item.desc}</Text>
          </View>
          <View >
            <Image 
              source={item.img}
            />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Cards; 