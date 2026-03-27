import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Contato() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Fale Conosco</Text>

      <View style={styles.card}>
        <Ionicons name="call-outline" size={22} color="blue" />
        <Text style={styles.texto}>Telefone: (19) 99999-9999</Text>
      </View>

      <View style={styles.card}>
        <Ionicons name="logo-whatsapp" size={22} color="green" />
        <Text style={styles.texto}>WhatsApp: (19) 98888-8888</Text>
      </View>

      <View style={styles.card}>
        <Ionicons name="location-outline" size={22} color="red" />
        <Text style={styles.texto}>Campinas - SP</Text>
      </View>

      <View style={styles.card}>
        <Ionicons name="business-outline" size={22} color="black" />
        <Text style={styles.texto}>CNPJ: 12.345.678/0001-99</Text>
      </View>

      <View style={styles.card}>
        <Ionicons name="mail-outline" size={22} color="blue" />
        <Text style={styles.texto}>empresa@malucosroupas.com</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F1F8",
    padding: 20
  },

  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    color: "orange",
    marginBottom: 20,
    textAlign: "center"
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
    borderLeftWidth: 5,
    borderLeftColor: "#FFD54F"
  },

  texto: {
    marginLeft: 10,
    fontSize: 15,
    color: "#2E2E2E"
  }
});