import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import ImageCarol from '../../assets/carol.jpg';
import LinearGradient from 'react-native-linear-gradient';

import { ThreeText, NumberOfThreesText, NavItem, NavText } from './styles';

import EvilIcons from 'react-native-vector-icons/EvilIcons';
import IonIcons from 'react-native-vector-icons/Ionicons';

export default function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image style={styles.avatar} source={ImageCarol}/>
     
        <View style={styles.profileInfo}>
           <Text style={styles.name}>@carol_quiterio</Text>
           <Text style={styles.data}>Desde 2020</Text>
        </View>
      </View>

      <LinearGradient
        style={styles.iconTabRound}
        start={{x: 0, y: 1}}
        end={{x: 0, y: 0}}
        colors={['#08DDB4', '#34cb79']}>
        <ThreeText>TOTAL DE ÁRVORES SALVAS</ThreeText>
        <NumberOfThreesText>289</NumberOfThreesText>
      </LinearGradient>

      <View style={styles.options}>
        <NavItem>
            <EvilIcons name="gear" size={30}  color="#787878"/>
             <NavText>Configurações</NavText>
        </NavItem>
        
        <NavItem>  
          <EvilIcons name="pencil" size={30}  color="#787878"/>   
          <NavText>Histórico</NavText>
        </NavItem>

        <NavItem> 
          <IonIcons name="chatbubble-ellipses-outline" size={25} color="#787878" />  
          <NavText>Meus</NavText>
        </NavItem>
        
        <NavItem>
           <IonIcons name="help-circle-outline" size={26}  color="#787878"/>
           <NavText>Como ganhar moedas?</NavText>
        </NavItem>
        
        <NavItem>
          <IonIcons name="log-in-outline" size={26}  color="#787878"/>
          <NavText>Sair</NavText> 
        </NavItem>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
    margin: 5,
  },
  iconTabRound: {
    height: '20%',
    width: '100%',
    borderRadius: 14,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
    shadowColor: '#9C27B0',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },

  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 30,
    paddingTop: 0,
    paddingRight: 150,
  },
  avatar: {
    width: 81,
    height: 86,
    borderRadius: 40,
  },
  profileInfo: {
    marginLeft: 16,
  },
  name: {
    fontSize: 20,
  },
  data: {
    color: '#787878',
    fontSize: 16,
  },

  options: {
    flex: 0,
    paddingRight: 200,
    justifyContent: 'space-evenly',
  },

});
