import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './Apps/Screens/LoginScreen';
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './Apps/Screens/Navigations/TabNavigation';
export default function App() {
  return (
    <ClerkProvider publishableKey='pk_test_YWNlLWJlZS05My5jbGVyay5hY2NvdW50cy5kZXYk'>
      <View className="flex-1 bg-white">
      <SignedIn>
          <NavigationContainer>
            <TabNavigation/>
          </NavigationContainer>
        </SignedIn>
        <SignedOut>
      <LoginScreen/>  
        </SignedOut>
    </View>
    </ClerkProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
