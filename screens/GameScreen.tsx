import {StyleSheet, Text, View} from 'react-native';

interface Props {
  userNumber: number;
}

const generateRandomeBetween = (
  min: number,
  max: number,
  exclude: number,
): number => {
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  if (randomNumber === exclude) {
    return generateRandomeBetween(min, max, exclude);
  } else {
    return randomNumber;
  }
};

export default function GameScreen({userNumber}: Props) {
  const initialGuess = generateRandomeBetween(1,100,userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess)

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
