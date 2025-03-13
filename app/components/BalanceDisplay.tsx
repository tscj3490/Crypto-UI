// import { StyleSheet } from 'nativewind';
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
      <Text className="text-white font-semibold" style={{ fontFamily: 'Inter', fontSize: 38}}>{formattedBalance}</Text>
      <View className="flex-row mt-1 text-center items-center">
        <Text className='text-green-500 font-semibold' style={{fontFamily: 'Inter', fontSize: 18}}>{formattedProfit} </Text>
        <View className='text-green-500 font-semibold bg-green-900/50 px-[5px] py-[5px] rounded-[5px]'>
           <Text className='text-green-500 font-semibold' style={{fontFamily: 'Inter', fontSize: 16}}>{formattedPercentage}</Text>
        </View>
      </View>
    </View>
  );
};

// const styles =StyleSheet.create({
//   balanceStyle:{
//     fontFamily: 'Inter',
//     fontSize: 38,
//   },
//   profitStyle:{
//     fontFamily: 'Inter',
//     fontSize: 18,
//   },
//   percentageStyle:{
//     fontFamily: 'Inter',
//     fontSize: 16,
//   }
// });

export default BalanceDisplay; 