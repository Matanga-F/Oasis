import { View, Text } from 'react-native'
import React, {useState} from 'react'
import chatroom from './styles/chatrom.styles';
const Chat = () => {
    // const { user } = useContext(appContext);
    const data = [1, 2, 3, 4, 5, 6, 7];
    const [wrapVisible, setWrapVisible] = useState(true);
    const [iconName, setIconName] = useState('close-outline');
  
    const slideAnimation = {
      from: { translateY: 0 },
      to: { translateY: wrapVisible ? 0 : -500 },
      // easing: wrapVisible ? Animatable.easing.inOut(0) : Animatable.easing.easeOut(0.5),
      duration: 300, // Adjust the duration as needed
    };
  return (
    <View style={chatroom.container}>
        <View>

        </View>
    </View>
    // <View style={chats.container}>
    //   <View style={chats.innerContainer}>

    //     <ScrollView>
          
    //       {wrapVisible ? (
    //       <View style={chats.wrap}>
    //         <Animatable.View animation={slideAnimation}>
    //           <View>
    //             <TouchableOpacity onPress={() => setWrapVisible(false)}>
    //               <Ionicons name='close-outline' style={chats.closeCross} />
    //             </TouchableOpacity>
    //             </View>
    //         </Animatable.View>

    //         <View style={chats.rowContainer}>
    //         <Text style={chats.text}>Follow some accounts to get started</Text>
    //         <TouchableOpacity>
    //           <Text style={chats.grid}>see all</Text>
    //         </TouchableOpacity>
    //       </View>


    //         <FlatList
    //           data={data}
    //           horizontal
    //           showsHorizontalScrollIndicator={false}
    //           renderItem={({ item, index }) => (
    //             <View style={chats.tab}>
    //               <View>
    //                 <View>
    //                   <TouchableOpacity>
    //                     <Ionicons name='close-outline' style={chats.cross} />
    //                   </TouchableOpacity>
    //                 </View>
    //                 <Image source={user} size={26} style={chats.useProfile} />
    //                 <Text style={chats.text}>
    //                   Zayne{' '}
    //                   <Ionicons name='sunny-outline' size={13} style={chats.status} />
    //                 </Text>
    //                 <Text style={chats.recommended}>recommended</Text>
    //                 <TouchableOpacity style={chats.connect}>
    //                   <Text style={chats.text}>Connect</Text>
    //                 </TouchableOpacity>
    //               </View>
    //             </View>
    //           )}
    //           keyExtractor={(item) => item.toString()}
    //         />
    //       </View>
    //     ) : (
    //       <TouchableOpacity onPress={() => setWrapVisible(true)}>
    //         <Ionicons name='chevron-down-outline' style={chats.closeCross} />
    //       </TouchableOpacity>
    //     )}

    //       <View>
    //         <Text style={chats.chat}>Chats</Text>
    //         <UserAvator />
    //         <Text style={chats.chatOptions}>Tap and hold on a chat for more options</Text>
    //       </View>
    //     </ScrollView>
    //   </View>
    // </View>
  )
}

export default Chat