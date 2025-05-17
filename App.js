import { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  StatusBar,
} from 'react-native';

import HomeScreen from './screens/HomeScreen';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import Colors from './constants/colors';

function App() {
  const [screenState, setScreenState] = useState('home'); // 'home' | 'start' | 'game' | 'gameover'
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  function goToStartGameScreen() {
    setScreenState('start');
  }

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
    setScreenState('game');
  }

  function gameOverHandler(numberOfRounds) {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
    setScreenState('gameover');
  }

  function startNewGameHandler() {
    setUserNumber(null);
    setGuessRounds(0);
    setScreenState('start');
  }

  function goToHomeScreenHandler() {
    setUserNumber(null);
    setGuessRounds(0);
    setScreenState('home');
  }

  let screen;

  if (screenState === 'home') {
    screen = <HomeScreen onStartGame={goToStartGameScreen} />;
  } else if (screenState === 'start') {
    screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
  } else if (screenState === 'game') {
    screen = (
      <GameScreen
        userNumber={userNumber}
        onGameOver={gameOverHandler}
        onGoHome={goToHomeScreenHandler}
      />
    );
  } else if (screenState === 'gameover') {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        roundsNumber={guessRounds}
        onStartNewGame={startNewGameHandler}
        onGoHome={goToHomeScreenHandler}
      />
    );
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={require('./assets/Images/numbers.jpg')}
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={{ flex: 1, backgroundColor: 'transparent' }}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </>
  );
}

export default App;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    opacity: 0.55,
  },
});
