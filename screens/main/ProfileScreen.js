import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>ProfileScreen</Text>
      <StatusBar style="auto" />
    </View>
  );
}
