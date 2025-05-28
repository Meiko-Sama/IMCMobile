import { StyleSheet, Text, View, TextInput, Modal, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  // useState -> HOOK que permite criar uma variavel de estado
  // Este hook retorna um array com dois valores ( valor atual e função de atualização )

  // ARMAZENANDO PESO E ALTURA DO USUARIO;
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");

  const [modalVisible, setModalVisible] = useState(false);

  // CALCULO DO IMC;
  const calcIMC = () => {
    let resultado = peso / (altura * altura);
  }

  return (

    // ELEMENTO PAI
    <View style={styles.container}>

      {/* INPUT DA PESO */}
      <TextInput
        placeholder='Digite seu peso em kg: '
        value={peso}
        onChangeText={(value) => setPeso(value)}
        style={{ width: "80%", borderBottomWidth: 1, borderColor: "black", bottom: 35 }}
      />

      {/* INPUT DA ALTURA */}
      <TextInput
        placeholder='Digite sua altura em m: '
        value={altura}
        onChangeText={(value) => setAltura(value)}
        style={{ width: "80%", borderBottomWidth: 1, borderColor: "black", bottom: 20 }}
      />

      {/* VAI TRANSFORMAR MEU MODAL TRUE, ele aparece */}
      <Button title="Ver resultado" onPress={() => setModalVisible(!modalVisible)} />

      {/* POP-UP QUE VAI APARECER O RESULTADO DO IMC DA PESSOA */}
      <Modal transparent={true} visible={modalVisible} animationType='slide'>
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>

            <Text> PI PO </Text>

            {/* VAI TRANSFORMAR MEU MODAL FALSE, por ele já estar aberto ele usa essa função para fechar */}
            <Button title="Fechar resultado" onPress={() => setModalVisible(!modalVisible)} />
          </View>
        </View>
      </Modal>

    </View >
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
