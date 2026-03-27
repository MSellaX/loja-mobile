import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const produtos = [
  {
    id: 1,
    nome: "Calça Cargo",
    imagem: "https://m.media-amazon.com/images/I/51p13+xbmZL._AC_.jpg",
    precoNormal: 299.90,
    precoPix: 269.90,
  },
  {
    id: 2,
    nome: "Camiseta Estampada",
    imagem: "https://down-br.img.susercontent.com/file/sg-11134201-23030-wu4itpxxr7nv4c",
    precoNormal: 459.90,
    precoPix: 399.90,
  },
  {
    id: 3,
    nome: "Tenis nike",
    imagem: "https://maze.jetassets.com.br/produto/20241230152910_119999881_D.jpg",
    precoNormal: 899.90,
    precoPix: 829.90,
  },
  {
    id: 4,
    nome: "Oculos Escuros Ray Ban ",
    imagem: "https://images2.ray-ban.com//cdn-record-files-pi/27963482-2559-481b-a65d-b2ea00e10b96/5139f136-53bf-4830-9c2a-b2ea00e10feb/0RW4012__601S1Z__P21__shad__al31.png?impolicy=RB_Product_clone&width=720&bgc=%23f2f2f2",
    precoNormal: 2989.90,
    precoPix: 2879.90,
  },
  {
    id: 5,
    nome: "Blusa de frio",
    imagem: "https://static.zattini.com.br/produtos/blusa-frio-feminina-masculina-moletom-preto-liso-canguru-com-capuz-bolsos-casaco-agasalho-conforto/14/K6R-0148-014/K6R-0148-014_zoom1.jpg?ts=1680551792&ims=1088x",
    precoNormal: 549.90,
    precoPix: 499.90,
  },
];

export default function App() {
  const [quantidades, setQuantidades] = useState({});

  const alterarQuantidade = (id, tipo) => {
    setQuantidades((prev) => {
      const atual = prev[id] || 1;
      let novaQuantidade = atual;

      if (tipo === 'add') {
        novaQuantidade = atual + 1;
      } else if (tipo === 'remove' && atual > 1) {
        novaQuantidade = atual - 1;
      }

      return { prev, [id]: novaQuantidade };
    });
  };

  const adicionarAoCarrinho = (produto) => {
    const quantidade = quantidades[produto.id] || 1;
    Alert.alert(
      "Sucesso!",
      `${quantidade}x ${produto.nome} adicionado ao carrinho`,
      [{ text: "OK" }]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Nossos Produtos</Text>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {produtos.map((produto) => {
          const qtd = quantidades[produto.id] || 1;

          return (
            <View key={produto.id} style={styles.card}>
              <Image source={{ uri: produto.imagem }} style={styles.imagem} />

              <View style={styles.info}>
                <Text style={styles.nome}>{produto.nome}</Text>

                <View style={styles.precos}>
                  <Text style={styles.precoNormal}>
                    R$ {produto.precoNormal.toFixed(2)}
                  </Text>
                  <Text style={styles.precoPix}>
                    R$ {produto.precoPix.toFixed(2)}
                  </Text>
                  <Text style={styles.pixLabel}>à vista no PIX</Text>
                </View>

                <View style={styles.quantidadeContainer}>
                  <TouchableOpacity
                    style={styles.btnQuantidade}
                    onPress={() => alterarQuantidade(produto.id, 'remove')}
                  >
                    <Text style={styles.btnQuantidadeTexto}>-</Text>
                  </TouchableOpacity>

                  <Text style={styles.quantidade}>{qtd}</Text>

                  <TouchableOpacity
                    style={styles.btnQuantidade}
                    onPress={() => alterarQuantidade(produto.id, 'add')}
                  >
                    <Text style={styles.btnQuantidadeTexto}>+</Text>
                  </TouchableOpacity>
                </View>

                <TouchableOpacity
                  style={styles.btnAdicionar}
                  onPress={() => adicionarAoCarrinho(produto)}
                >
                  <Text style={styles.btnAdicionarTexto}>
                    Adicionar ao Carrinho
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: 'orange',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 18,
    textAlign: 'center',
  },
  scrollContent: {
    padding: 15,
    paddingBottom: 30,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 18,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 5,
  },
  imagem: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  info: {
    padding: 15,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  precos: {
    marginBottom: 12,
  },
  precoNormal: {
    textDecorationLine: 'line-through',
    color: '#999',
    fontSize: 14,
  },
  precoPix: {
    color: '#00a650',
    fontSize: 22,
    fontWeight: 'bold',
  },
  pixLabel: {
    color: '#00a650',
    fontSize: 13,
    fontWeight: '600',
  },
  quantidadeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 12,
    gap: 15,
  },
  btnQuantidade: {
    backgroundColor: 'orange',
    width: 40,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnQuantidadeTexto: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  quantidade: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    minWidth: 30,
    textAlign: 'center',
  },
  btnAdicionar: {
    backgroundColor: 'orange',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 8,
  },
  btnAdicionarTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});