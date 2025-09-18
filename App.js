import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Defina o componente para ser usado na navegação
import Tela1 from './screens/Tela1'; // Corrigido nome para seguir o padrão de convenção
import Tela2 from './screens/home'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Configuração da tela com nome e componente */}
        <Stack.Screen 
          name="Home" 
          component={Tela2} 
        />
        <Stack.Screen 
          name="Quem é?" 
          component={Tela1} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
