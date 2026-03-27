import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      
      <Image
        source={require("../../../assets/malucos.png")} 
        style={styles.logo}
      />

      <Text style={styles.titulo}>Maluco’s Roupas</Text>

      <Text style={styles.descricao}>
        Estilo sem regras! Vista-se com atitude e encontre peças únicas
        cheias de personalidade.
      </Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate("Produtos")}
      >
        <Ionicons name="cart-outline" size={20} color="#fff" />
        <Text style={styles.textoBotao}>Ver Produtos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoSecundario}
        onPress={() => navigation.navigate("Contato")}
      >
        <Ionicons name="call-outline" size={20} color="#ffffff" />
        <Text style={styles.textoBotaoSec}>Contato</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F1F8",
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },

  logo: {
    width: 260,
    height: 300,
    marginBottom: 20,
    borderRadius: 80
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "orange"
  },

  descricao: {
    textAlign: "center",
    color: "#2E2E2E",
    marginVertical: 20
  },

  botao: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "orange",
    padding: 12,
    borderRadius: 10,
    width: "80%",
    justifyContent: "center",
    marginTop: 10
  },

  botaoSecundario: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ff8623",
    padding: 12,
    borderRadius: 10,
    width: "80%",
    justifyContent: "center",
    marginTop: 10
  },

  textoBotao: {
    color: "#fff",
    marginLeft: 8,
    fontWeight: "bold"
  },

  textoBotaoSec: {
    color: "#ffffff",
    marginLeft: 8,
    fontWeight: "bold"
  }
});