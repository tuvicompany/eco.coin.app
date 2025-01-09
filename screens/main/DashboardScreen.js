import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function DashboardScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>DashboardScreen</Text>
      <StatusBar style="auto" />
    </View>
  );
}
