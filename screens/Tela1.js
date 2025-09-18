import React from 'react';
import { ScrollView, View, Text, Pressable, Image, StyleSheet } from 'react-native';

import foto from '../assets/Miyamoto.jpg';
import iconhist from '../assets/hist.png';
import home from '../assets/home.png';  // Importando a imagem do ícone home corretamente

export default function Tela1(props) {
  return (
    <ScrollView>
      <View style={styles.container}>

        <Text style={styles.titulo}>Miyamoto Musashi</Text>
        <Text style={styles.desc}>O maior samurai da história</Text>

        <Image source={foto} style={styles.foto} />

        <Pressable
          onPress={() => { props.navigation.navigate('scnd'); }}
          style={styles.btn}
        >
          <Image source={iconhist} style={styles.btnIcon} />
          <Text style={styles.btnLabel}>História</Text>
        </Pressable>

        <Pressable
          onPress={() => { props.navigation.navigate('Home'); }}  
          style={styles.btn}
        >
          <Image source={home} style={styles.btnIcon} />
          <Text style={styles.btnLabel}>Home</Text>
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
  foto: {
    width: 300,
    height: 300,
    borderRadius: 150,
    marginBottom: 30,
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
