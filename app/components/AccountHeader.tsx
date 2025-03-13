import React from 'react';
import { View, Text, TouchableOpacity,Image, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import  Entype from '@expo/vector-icons/Entypo';
import { Tooltip } from '@rneui/themed';
import { Modal } from 'react-native';
import Feather from '@expo/vector-icons/Feather';

const { height } = Dimensions.get('window'); 

type AccountHeaderProps = {
  accountName: string;
  accountNumber: number;
  screenNumber: number;
};
const TokenList = [
  {
    name: "Solana",
    address: "0xffc8dEe10c19D209417BCa9DbC42Af47242DD49C",
    iconUrl: require('..//../assets/crypto-icons/Solana.png'),
  },
  {
    name: "Ethereum",
    address: "0xffc8dEe10c19D209417BCa9DbC42Af47242DD49C",
    iconUrl: require('..//../assets/crypto-icons/Ethereum.png'),
  },
  {
    name: "Base",
    address: "0xffc8dEe10c19D209417BCa9DbC42Af47242DD49C",
    iconUrl: require('..//../assets/crypto-icons/Ethereum.png'),
  },
  {
    name: "Polygon",
    address: "0xffc8dEe10c19D209417BCa9DbC42Af47242DD49C",
    iconUrl: require('..//../assets/crypto-icons/polygon.png'),
  },
  {
    name: "Bitcoin",
    address: "0xffc8dEe10c19D209417BCa9DbC42Af47242DD49C",
    iconUrl: require('..//../assets/crypto-icons/bitcoin.png'),
  },

];

const AccountHeader: React.FC<AccountHeaderProps> = ({ accountName, accountNumber, screenNumber }) => {
  const [open, setOpen] = React.useState(false);
  const [isModalVisible, setModalVisible] = React.useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View className="flex-row justify-between items-center px-4 pt-6 pb-6 mt-4 ">
      <View className="flex-row items-center">
        <TouchableOpacity className="w-8 h-8 rounded-full bg-purple-400 items-center justify-center mr-2" onPress={toggleModal}>
          <Text className="text-purple-900 font-bold text-xs">A{accountNumber}</Text>
        </TouchableOpacity>
        <Modal animationType="fade" visible={isModalVisible} transparent={true} onRequestClose={toggleModal}>
        <View className='flex justify-between bg-black w-20 rounded-md ml-2 my-2 p-2 items-center' style={{ height: height - 36 }}>
          <View>
         <TouchableOpacity className='flex w-10 h-10 items-center justify-center mx-auto' onPress={toggleModal}>
          <Ionicons name="arrow-back-sharp" size={18} color="grey"></Ionicons>
         </TouchableOpacity>
         <TouchableOpacity className="w-12 h-12 rounded-full bg-[#ab9ff2] items-center justify-center mx-auto mt-4" onPress={toggleModal}>
          <Text className="text-[#222222] font-bold text-xs">A{accountNumber}</Text>
         </TouchableOpacity>
         <Text className="text-[#ab9ff2] font-medium text-xs">{accountName}</Text>
         </View>
         <View className='w-full'>
         <View className='h-[2] bg-gray-500 mb-2'></View>
         <TouchableOpacity className='flex w-10 h-10 items-center justify-center mx-auto' onPress={toggleModal}>
          <Ionicons name="add" size={20} color="grey"></Ionicons>
         </TouchableOpacity>
         <TouchableOpacity className='flex w-10 h-10 items-center justify-center mx-auto' onPress={toggleModal}>
         <Feather name="edit-2" size={20} color="grey" />
         </TouchableOpacity>
         <TouchableOpacity className='flex w-10 h-10 items-center justify-center mx-auto' onPress={toggleModal}>
          <Ionicons name="settings-outline" size={20} color="grey"></Ionicons>
         </TouchableOpacity>
         </View>
        </View>
      </Modal>

        <View className='flex justify-between items-center'>
            <Tooltip visible={open}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            popover={
            <View className='flex justify-between items-center'>
              {TokenList.map((token, index) => (
               <View className='flex-row justify-between items-center w-full my-1'>
                <View className='flex-row'>
                <Image source={token.iconUrl} style={{
                  width:20,
                  height:20,
                }} />
                <Text className='text-white mx-2 text-center font-bold' style={{fontFamily: 'Inter'}}>{token.name}</Text>
                </View>
                <Text className='text-gray-500 text-center font-bold' style={{fontFamily: 'Inter'}}> {token.address.slice(0,6) + '...' + token.address.slice(-4)}</Text>
              </View>
              ))}
            </View>
            }
            containerStyle={{
             backgroundColor: "#000",
             minWidth: 250, // minimum width
             maxWidth: 350, // maximum width
             minHeight: 150, // minimum height
             maxHeight: 250, // maximum height
             borderRadius: 10, // border radius
             borderBlockColor:"#000",
            }}
            >
          <View className='flex-row justify-center items-center'>
           <Text className="text-white font-medium text-base">{accountName}</Text>
           <Ionicons name="chevron-down" size={16} color="white" style={{ marginLeft: 2 }} />
          </View>
           </Tooltip>
        </View>
      </View>
      { screenNumber == 1 &&
      <View className="flex-row">
        <TouchableOpacity className="mr-4">
          <Feather name="maximize" size={22} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="search" size={22} color="white" />
        </TouchableOpacity>
      </View>
      }
      {screenNumber == 3 &&  
      <View className="flex-row">
      <TouchableOpacity className="mr-4">
      <Feather name="sliders" size={14} color="#666666" />
      </TouchableOpacity>
       </View>
      }
    </View>
  );
};

export default AccountHeader;