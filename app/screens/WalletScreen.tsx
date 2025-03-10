import React, { useState } from 'react';
import { View, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AccountHeader from '../components/AccountHeader';
import BalanceDisplay from '../components/BalanceDisplay';
import ActionButtons from '../components/ActionButtons';
import Cards from '../components/Cards';
import CryptoAsset from '../components/CryptoAsset';
// Mock data for the crypto assets - exactly matching the first image

const cryptoAssets = [
  {
    name: "Solana",
    symbol: "SOL",
    amount: 0,
    value: 1614.15,
    change: 1187.86,
    iconUrl: require('..//../assets/crypto-icons/Solana.png'),
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    amount: 0.3118,
    value: 70.55,
    change: -3.72,
    // icon: NetworkEthereum,
    iconUrl: require('..//../assets/crypto-icons/Ethereum.png'),
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    amount: 23018.63887,
    value: 2.00,
    change: 0.74,
    // icon: NetworkEthereum,
    iconUrl: require('..//../assets/crypto-icons/Ethereum.png'),
  },
  {
    name: "Polygon",
    symbol: "POL",
    amount: 0,
    value: 0.00,
    change: 0.00,
    // icon: NetworkPolygon,
    iconUrl: require('..//../assets/crypto-icons/polygon.png'),
  },
  {
    name: "Bitcoin",
    symbol: "BTC",
    amount: 0,
    value: 0.00,
    change: +0.00,
    // icon: NetworkBitcoin,
    iconUrl: require('..//../assets/crypto-icons/bitcoin.png'),
  },

];

const WalletScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  // Hardcoded values to exactly match the first image
  const totalBalance = 1694.00;
  const totalProfit = 1172.50;
  const percentageChange = 224.83;

  return (
    <View className="flex-1 justify-center w-screen">
       <LinearGradient
        colors={['#0A3B29', '#0A2A1E', '#222222']}
        locations={[0, 0.2, 0.4, 0.9]}
        className="absolute top-0 left-0 right-0 bottom-0"
      />
      <AccountHeader accountName="Account 1" accountNumber={1} />
      <ScrollView className="flex-1">
        <StatusBar barStyle="light-content" />
        <BalanceDisplay 
          balance={totalBalance} 
          profit={totalProfit} 
          percentageChange={percentageChange} 
        />
        <ActionButtons />
        <Cards />
        <View className="flex-1 flex">
          {cryptoAssets.map((asset, index) => (
            <CryptoAsset
              key={index}
              name={asset.name}
              symbol={asset.symbol}
              amount={asset.amount}
              value={asset.value}
              change={asset.change}
              iconUrl={asset.iconUrl}
            />
          ))}
        </View>
        {/* <BottomTabBar activeTab={activeTab} onTabPress={setActiveTab} /> */}
      </ScrollView>
    </View>
  );
};

export default WalletScreen; 