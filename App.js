import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Button,
  Pressable,
  Modal,
} from 'react-native';


import Formulario from './src/components/Formulario';

const App = () => {

  //los hooks se colocan en la parte superior
  // no registrarlos en condicionales y no despues de un return


  const [modalVisible, setModalVisible] = useState(false)
  return (
    <View style={styles.conatainer}>
      <Text style={styles.titulo}>Administrador de citas {''}
      <Text style ={styles.tituloBold}>Veterinaria</Text>
      </Text>
        <Pressable
        onPress={() => setModalVisible(true)}
        style={styles.btnNuevaCita}
        >
          <Text
          style={styles.btnTextoNuevaCita}
          >Nueva Cita</Text>
        </Pressable>
        <Formulario
          modalVisible = {modalVisible}
        />
        
    </View>
    );
};

const styles = StyleSheet.create({
  conatainer :{
    backgroundColor : '#F3F4F6',
    flex: 1,
    
  },
  titulo : {
    textAlign : 'center',
    fontSize : 30,
    color : '#000',
    fontWeight : '600'
  },
  tituloBold :{
    fontWeight : '900',
    color : '#6D2869'
  },
  btnNuevaCita :{
    backgroundColor : '#6D2869',
    padding : 15,
    marginTop: 30,
    marginHorizontal: 20,
    borderRadius : 10,

  },
  btnTextoNuevaCita :{
    textAlign : 'center',
    color : '#FFF',
    fontWeight : '900',
    fontSize : 20,
    textTransform : 'uppercase'
  }
})

export default App;