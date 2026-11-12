import {useState} from "react";
import { StyleSheet, ImageBackground,SafeAreaView } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {useFonts} from "expo-font"
import AppLoading from "expo-app-loading"
import {StatusBar} from 'expo-status-bar'

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import Colors from "./constants/colors";

export default function App() {

  /* the useState hook here is used switch screens 
  when the user enters an input */
  const [userNumber, setUserNumber] = useState();
  /* the useState hook is used to manage the screen switch
  when the game is Over */
  const [gameIsOver, setGameIsOver] = useState(true);
  /* this useState hook is used to manage the round it took 
  for the computer to guess the right answer */
  const [guessRounds, setGuessRounds] = useState(0);

  /*usefont is a hook gotten from expo in react-native it is use 
  to create costom fonts */
  const [fontsLoaded] = useFonts({
    'open-sans':require("./assets/fonts/OpenSans-Regular.ttf"),
    'open-sans-bold':require("./assets/fonts/OpenSans-Bold.ttf"),
  })

  /* the if statement check if fontsloaded is not loaded and 
  return Apploading from expo */
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  
  /* the function pickedNumberHandler is used to update the state 
  variable userNumber when the user picks a number */
  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  /* the function gameOverHandler is used to change to the 
  game screen when the game is over */
  function gameOverHandler(numberOfRounds) {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds)
  }

  /* this function is used to start the game when the computer has guess the right answer */
  function startNewGameHandler() {
    setUserNumber(null);
    setGuessRounds(0);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />
  /* conditonal statement is used to check if the user has picked 
  a number */
  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
  }
  /* the conditional statement check if the game is Over */
  if (gameIsOver && userNumber) {
    screen = <GameOverScreen roundsNumber={guessRounds} userNumber={userNumber} onSartNewGame={startNewGameHandler} />
  }
  

  return (
    <>
    <StatusBar style= 'light' />
    /*by default View only takes as much space 
    as its content requires */
    <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}>
      {/* the image background component is like image component 
      but it renders image in the background instead of the foreground
       */}
      <ImageBackground 
      source={require("./assets/images/background.png")}
      resizeMode="cover"
      style={styles.rootScreen}
      imageStyle={styles.backgroundImage} // imageStyle is used to set the style of the image rendered in the background
      >
        {/* safe area view is used to ensure that the content
        is displayed within the safe area of the device only
         works IOS devices */}
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1, // flex is used to set the flex property of the root screen. It is set to 1 which means that the root screen will take up all available space in the parent container 
  },
  backgroundImage: {
    opacity: 0.15, // opacity is used to set the opacity of the background image. It is set to 0.15 which means that the background image will be 15% opaque and 85% transparent
  }
});
