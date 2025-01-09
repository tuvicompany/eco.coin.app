import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function PromoScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>PromoScreen</Text>
      <StatusBar style="auto" />
    </View>
  );
}
