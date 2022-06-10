import { NativeBaseProvider, StatusBar } from 'native-base';
import AppStack from './src/components/stacks/AppStack';

export default function App() {
  return (
    <NativeBaseProvider>
     <AppStack />
     <StatusBar barStyle="light-content" />
    </NativeBaseProvider>
  );
}
