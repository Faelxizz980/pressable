
import { ScrollView, View, Text, Pressable, Image, StyleSheet } from 'react-native';

import iconhist from '../assets/hist.png';


export default function Home(props) {
  return (
    <ScrollView>
      <View style={styles.container}>

        <Text style={styles.titulo}>Bem Vindo</Text>
        <Text style={styles.desc}>Venha descobrir quem é o maior samurai da história</Text>

        <Pressable
          onPress={() => { props.navigation.navigate('Tela1'); }}
          style={styles.btn}
        >
          <Image source={iconhist} style={styles.btnIcon} />
          <Text style={styles.btnLabel}>Quem é?</Text>
        </Pressable>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#180303ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    color: '#fff',  // corrigido 'Color' para 'color'
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  desc: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 20,
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 25,
    backgroundColor: '#631515ff',
    paddingVertical: 10,
    width: 200,
    marginBottom: 10,
  },
  btnIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  btnLabel: {
    color: '#fff',
    fontSize: 16,
  },
});
