import {useState, useEffect} from "react";

import {View,Text, StyleSheet, Alert, FlatList, useWindowDimensions} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

import Title from "../components/ui/Title";
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText'
import PrimaryButton from "../components/ui/PrimaryButton";
import NumberContainer from "../components/game/NumberContainer";
import GuessLogItem from '../components/game/GuessLogItem'


/* this function generates a random number between min and 
max, excluding the exclude value */
function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    
    /* this conditional is used to check if the generated 
    random number is equal to the exclude value. If it is, 
    the function will call itself recursively until a valid 
    random number is generated. */
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    }else {
        return rndNum;
    }
}
/* the usernumber is passed as a prop to the GameScreen  component
this is called props drilling the userNumber is gotten from 
the App component this done so that the computer does not 
automatically guess the same number */

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({userNumber, onGameOver}) {
    /* the variable initialGuess is assigned the value of 
    the generateRandomBetween function */
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    /* the useState hook is used to manage the state of 
    the current guess and the initial guess is set as the 
    default value */
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    const [guessRounds, setGuessRounds] = useState([initialGuess]);

    /* the useWindowDimensions is a react-native hook used to get
    the width and height of a device  but it watches internally 
    to the changes of the device dimensions  and adjust accordingly
    for example the user switches from rotate to protrait */
    const {width, height} = useWindowDimensions()
    
    /* the useeffect hook hook is used to pass a function to 
    check if the currentGuess by the computer is equal to the 
    Number input by the user and to execute the onGameover 
    function which is gooten from the App component by prop 
    drilling */
    useEffect(() => {
        if (currentGuess === userNumber){
            onGameOver(guessRounds.length);
        }
    },[currentGuess, userNumber, onGameOver]);

    useEffect(() => {
        minBoundary = 1;
        maxBoundary= 100;
    }, [])

    /* the nextGuessHandler function is used to generate 
    the next guess based on the user's input */
    function nextGuessHandler(direction) {
        
        /* this conditional is used to check if the user is 
        lying about their number */
        if((direction === 'lower' && currentGuess < userNumber) || (direction === 'higher' && currentGuess > userNumber)) {
            /* Alert is an object that holds a method that we can 
            call to show an alert*/
            Alert.alert("Don't lie!", 'You know that this is wrong...', [{text: 'Sorry!', style: 'cancel'}]);
            return;
        }

        /*the if condition is used to check the direction of 
        the guess */
        if(direction === 'lower') {
            maxBoundary = currentGuess;
        }else {
            minBoundary = currentGuess + 1;
        }
        // console.log(minBoundary, maxBoundary);
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber);
        setGuessRounds(prevGuessRounds => [ newRndNumber, ...prevGuessRounds]);
    }

    const guessRoundsListLength= guessRounds.length;

    let content = <>
    <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                {/* we want to put the button in a row that why  it is
                wraped with the view components and we used our custom 
                button for the + and - */}
                <InstructionText style={styles.instructionText}>Higher or Lower</InstructionText>
                <View style={styles.buttons}>
                    {/* the bind method is used to pass the direction 
                    as an argument to the nextGuessHandler function */}
                    <View style={styles.button}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}>
                            <Ionicons name='add' size={24}/>
                        </PrimaryButton>
                    </View>
                    <View style={styles.button}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                            <Ionicons name='remove' size={24}/>
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
    </>;

    if (width > 500) {
        content = (<>
        <View style = {styles.buttonsWide}>
            <View style={styles.button}>
                <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}>
                    <Ionicons name='add' size={24}/>
                </PrimaryButton>
            </View>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View style={styles.button}>
                <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                    <Ionicons name='remove' size={24}/>
                </PrimaryButton>
            </View>
        </View>
        </>);
    }

    return(
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            {/* GUESS */}
            {content}
            {/*  LOG ROUNDs */}
            <View style = {styles.listContainer}>
                {/* {guessRounds.map(guessRound => <Text key={guessRound}>{guessRound}</Text>)} */}
                <FlatList 
                data={guessRounds} 
                renderItem={(itemData) =><GuessLogItem roundNumber={guessRoundsListLength - itemData.index} guess={itemData.item} />}
                keyExtractor={(item) => item} 
                />
            </View>
        </View>
    )
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex:1,
        padding:24,
        alignItems: "center"
    },
    instructionText:{
        marginBottom:12
    },
    buttons:{
        flexDirection: 'row',
    },
    button:{
        flex: 1,
    },
    buttonsWide: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    listContainer: {
        flex:1,
        padding:16,
    }

})