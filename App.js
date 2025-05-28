import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Modal, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  // useState -> HOOK que permite criar uma variavel de estado
  // Este hook retorna um array com dois valores ( valor atual e função de atualização )

  const [nome, setNome] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Digite seu nome: '
        value={nome}
        onChangeText={(value) => setNome(value)}
        style={{ width: "80%", borderBottomWidth: 1, borderColor: "black" }}
      />
      {nome ? <Text style={{ color: "#000" }}> Olá {nome}, seja bem-vindo! </Text> : null}

      {/* VAI TRANSFORMAR MEU MODAL TRUE, ele aparece */}
      <Button title="Abrir Modal" onPress={() => setModalVisible(!modalVisible)} />

      <Modal transparent={true} visible={modalVisible} animationType='slide'>
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>

            <Text> MEU PRIMEIRO MODAL </Text>

            {/* VAI TRANSFORMAR MEU MODAL FALSE, por ele já estar aberto ele usa essa função para fechar */}
            <Button title="Fechar Modal" onPress={() => setModalVisible(!modalVisible)} />
          </View>
        </View>
      </Modal>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(71, 98, 112, 0.6)"
  },
  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: "red",
    borderRadius: 20,
    alignItems: "center"
  }

});
