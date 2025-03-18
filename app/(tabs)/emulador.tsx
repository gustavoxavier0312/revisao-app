import { StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabconfigScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Emulador</ThemedText>
      </ThemedView>

      <ThemedText style={styles.topic}>1. Escolher o Tipo de Emulador</ThemedText>
      <ThemedText style={styles.topic}>2. Estudo da Arquitetura do Sistema a Ser Emulado</ThemedText>
      <ThemedText style={styles.topic}>3. Desenvolvimento de Componentes do Emulador</ThemedText>
      <ThemedText style={styles.topic}>4. Desenvolvimento de Entrada e Saída</ThemedText>
      <ThemedText style={styles.topic}>5. Engenharia Reversa e Testes</ThemedText>
      <ThemedText style={styles.topic}>6. Otimização de Desempenho</ThemedText>
      <ThemedText style={styles.topic}>7. Interface Gráfica (UI) e Usabilidade</ThemedText>
      <ThemedText style={styles.topic}>8. Licenciamento e Legalidade</ThemedText>
      <ThemedText style={styles.topic}>9. Distribuição e Manutenção</ThemedText>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  topic: {
    marginVertical: 8, // Adiciona um espaçamento entre os tópicos
  },
});