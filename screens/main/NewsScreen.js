import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function NewsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>NewsScreen</Text>
      <StatusBar style="auto" />
    </View>
  );
}
