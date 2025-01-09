import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function ScanScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>ScanScreen</Text>
      <StatusBar style="auto" />
    </View>
  );
}
