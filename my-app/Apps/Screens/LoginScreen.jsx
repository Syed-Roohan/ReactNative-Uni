import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from '../../hooks/useWarmUpBrowser';
import { useOAuth } from '@clerk/clerk-expo';
WebBrowser.maybeCompleteAuthSession();
export default function LoginScreen() {
    useWarmUpBrowser();
    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
    const onPress = React.useCallback(async () => {
        try {
          const { createdSessionId, signIn, signUp, setActive } =
            await startOAuthFlow();
    
          if (createdSessionId) {
            setActive({ session: createdSessionId });
          } else {
            // Use signIn or signUp for next steps such as MFA
          }
        } catch (err) {
          console.error("OAuth error", err);
        }
      }, []);
    return (
    <View>
      <Image className="w-full h-[400px] bg-cover bg-center object-cover" source={require('../../assets/images/login.png')}/>

      <View className="p-10">
      <Text className="text-[30px] font-bold">Syed's Gameplay</Text>
      <Text className="text-[15px] mt-4 text-slate-500">Play any paid game you want!</Text>
     <TouchableOpacity onPress={onPress} className="p-3 bg-blue-500 rounded-full mt-20">
        <Text className="text-white text-center text-[18px]">Get Started</Text>
     </TouchableOpacity>
      </View>
    </View>
  )
}