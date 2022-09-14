import {StyleSheet, Text, View} from 'react-native';

interface Props {
  userNumber: number;
}

export default function GameScreen({userNumber}: Props) {
  return (
    <View>
      <Text style={styles.title}>Opponent's Guess</Text>
      <View>
        <Text></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ddb52f',
    textAlign: 'center',
    borderWidth: 2,
    padding: 12,
    borderColor: '#ddb52f',
  },
});
