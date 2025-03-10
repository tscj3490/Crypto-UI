import React from 'react';
import { View, Text } from 'react-native';

type BalanceDisplayProps = {
  balance: number;
  profit: number;
  percentageChange: number;
};

const BalanceDisplay: React.FC<BalanceDisplayProps> = ({ 
  balance, 
  profit, 
  percentageChange 
}) => {
  const formattedBalance = balance.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  
  const formattedProfit = profit > 0 ? `+${profit.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}` : profit.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  
  const formattedPercentage = percentageChange > 0 ? 
    `+${percentageChange.toFixed(2)}%` : 
    `${percentageChange.toFixed(2)}%`;

  return (
    <View className="items-center py-4 gap-y-1">
      <Text className="text-white font-semibold" style ={{fontSize: 38, fontFamily: 'Inter, Roboto, Arial'}}>{formattedBalance}</Text>
      <Text className="text-green-500 font-medium mt-1" style ={{fontSize: 18, fontFamily: 'Inter, Roboto, Arial'}}>
        <Text className='font-semibold text-lg'>{formattedProfit} </Text>
        <Text className='font-semibold bg-green-900/35 px-[3px] py-[1px] rounded-[5px]' style ={{ fontSize: 15, fontFamily: 'Inter, Roboto, Arial'}}>{formattedPercentage}</Text>
      </Text>
    </View>
  );
};

export default BalanceDisplay; 