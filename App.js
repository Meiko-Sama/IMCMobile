import { StyleSheet, Text, View, TextInput, Modal, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  // useState -> HOOK que permite criar uma variavel de estado
  // Este hook retorna um array com dois valores ( valor atual e função de atualização )

  // ARMAZENANDO PESO E ALTURA DO USUARIO;
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");

  // Aqui está armazenando a variavel texto que guardara as respostas das mensagens
  // do IMC
  const [texto, setTexto] = useState("")

  const [modalVisible, setModalVisible] = useState(false);

  // CALCULO DO IMC;
  const calcIMC = () => {
    let resultado = peso / (altura * altura);
    console.log(resultado)

    // Vendo se a variavel resultado, que contem a conta do IMC, segue os padrões
    // do IMC.

    if (resultado < 18.5) {
      setTexto("Está abaixo do peso");
    }
    else if (resultado <= 24.9) {
      setTexto("Tem peso normal");
    }
    else if (resultado <= 29.9) {
      setTexto("Tem excesso de peso");
    }
    else if (resultado < 35) {
      setTexto("Possui Obesidade");
    }
    else {
      setTexto("Obesidade Extrema");
    }

    // O trecho desse codigo que estava no botão serve para estar aqui para abrir
    // o modal dentro do IF utilizando a variavel setTexto.
    setModalVisible(!modalVisible)
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

      {/* VAI TRANSFORMAR MEU MODAL TRUE, ele aparece na tela e calcula
      o IMC na hora que clicam nele */}

      <Button title="Ver resultado" onPress={calcIMC} />

      {/* POP-UP QUE VAI APARECER O RESULTADO DO IMC DA PESSOA */}
      <Modal transparent={true} visible={modalVisible} animationType='slide'>
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>

            {/* Ele imprime a mensagem que foi feita nos IF, se encaixando no calculo IMC */}
            <Text style={{ color: "black", fontSize: 15 }}> {texto} </Text>

            {/* VAI TRANSFORMAR MEU MODAL FALSE, por ele já estar aberto ele usa essa função para fechar */}
            <Button title="Fechar resultado" onPress={() => setModalVisible(!modalVisible)} />
          </View>
        </View>
      </Modal>

    </View >
  );
}

// ESTILIZAÇÃO DOS ELEMENTOS PRESENTES
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
    backgroundColor: "rgba(71, 98, 112, 0.6)",
    borderRadius: 20,
  },
  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: "#028ae2",
    alignItems: "center",
  }

});
