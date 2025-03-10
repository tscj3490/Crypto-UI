import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import Icons from "../../assets/svg/Crypto-Icon";

const ActionButtons: React.FC = () => {
  const actions = [
    { icon: Icons.Receive, label: 'Receive' },
    { icon: Icons.Send, label: 'Send' },
    { icon: Icons.Swap, label: 'Swap' },
    { icon: Icons.Buy, label: 'Buy' },
  ];

  return (
    <View className="flex-row justify-between px-4 py-3 grid grid-cols-4">
      {actions.map((action, index) => (
        <TouchableOpacity 
          key={index} 
          className="items-center justify-center h-[70px] bg-gray-500/10 rounded-2xl mx-1"
        >
          <action.icon /> 
          <Text className="text-gray-400 mt-1 font-medium" style = {{ fontFamily: 'Inter, Roboto, Arial', fontSize: 13 }}>{action.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ActionButtons; 