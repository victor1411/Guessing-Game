import {useState} from "react";
import {
    TextInput, 
    View, 
    StyleSheet, 
    Alert, 
    Text, 
    useWindowDimensions,
    keyboardAvoidingView,
    ScrollView,
} from "react-native";
import Colors from "../constants/colors";


import PrimaryButton from "../components/ui/PrimaryButton";
import InstructionText from'../components/ui/InstructionText'
import Title from '../components/ui/Title';
import Card from '../components/ui/Card'

function StartGameScreen({onPickNumber}) {
    /* the useState hook is used to manage user input the empty string 
    in the useState is because the TextInput is a Value is a string which 
    we will bind to the state variable enteredNumber*/
    const [enteredNumber, setEnteredNumber] = useState('');
    
    /* the useWindowDimensions is a react-native hook used to get
    the width and height of a device  but it watches internally 
    to the changes of the device dimensions  and adjust accordingly
    for example the user switches from rotate to protrait */
    const {width, height}= useWindowDimensions();
    
    /* the function numberInputHandler is used to update the state variable enteredNumber
    when the user types in the TextInput. The function takes the 
    input value as a parameter and updates the state variable 
    enteredNumber with that value. */
    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
    }

    /* the resetInputHandler function is used to reset the input 
    field */
    function resetInputHandler() {
        setEnteredNumber('');
    }
    
    /* the function confirmInputHandler is used to confirm the 
    user's input and proceed to the next screen. */
    function confirmInputHandler() {
    // the parseInt function is used to convert a string to a number
        const chosenNumber = parseInt(enteredNumber);

        /* this conditional is used to check if chosenNumber is 
        not a number (NaN) or if it is less than or equal to 0 or 
        greater than 99. If any of these conditions are true, the 
        function will return and not proceed to the next screen. */
        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            /*Alert is not a component but an object that holds a method
            that we can call to show an alert*/
            Alert.alert(
                "Invalid Number!",
                "Number has to be a number between 1 and 99.",
                [{text: 'Okay', style: 'destructive', onPress: () => resetInputHandler}]
            );
            return;
        }
        onPickNumber(chosenNumber);
        console.log("Valid Number!");
    }

    const marginTopDistance = height < 380 ? 30 : 100;

    return(
        <ScrollView style = {styles.screen}>
        {/*  keyboardAovidingView is a react-native component  
        which you an use in your JSX code that allows you to wrap
        other content  with it   */}
        <keyboardAvoidingView style = {styles.screen} behavior = "position">
        <View style={[styles.rootContainer, {marginTop: marginTopDistance}]}>
            <Title>Guess My Number</Title>
        <Card>
            <InstructionText>Enter a Number</InstructionText>
            <TextInput 
            style={styles.numberInput} 
            maxLength={2} // the maxLength property is used to set the maximum number of charaters that can be entered in the input field
            keyboardType= "number-pad" // the keyboardType property is used to set the type of keyboard that will be displayed when the input field is focused. In this case, it is set to "number-pad" which will display a numeric keypad for the user to enter numbers.
            autoCapitalize ="none" // the autoCapitalize property is used to set the capitalization behavior of the input field. In this case, it is set to "none" which means that the input field will not automatically capitalize any letters entered by the user.
            autoCorrect = {false} // the autoCorrect property is used to set the autocorrect behavior of the input field. In this case, it is set to false which means that the input field will not automatically correct any spelling errors made by the user.
            onChangeText={numberInputHandler} // the onChangeText property is used to set the function that will be called when the text in the input field changes. In this case, it is set to the numberInputHandler function which will update the state variable enteredNumber with the new value of the input field.
            value={enteredNumber} // the value property is used to bind the value of the input field to the state variable enteredNumber. This means that the value of the input field will always be equal to the value of the state variable enteredNumber.
            />
            {/* Custom Button */}
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
            </View>
        </Card>
        </View>
        </keyboardAvoidingView>
        </ScrollView>
    )
}

export default StartGameScreen;

// const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    screen: {
        flex:1,
    },

    rootContainer: {
        flex:1,
        // marginTop: deviceHeight < 380 ? 30 : 100,
        alignItems:'center',
    },


    numberInput: {
        height:50,
        width:50,
        fontSize:32,
        borderBottomColor:Colors.accent500, // borderColor is used to set the color of the border of the input field
        borderBottomWidth:2,// borderWidth is used to set the width of the  border of the input field
        color:Colors.accent500,
        marginVertical:8, // marginVertical is used to set the  margin of the top and bottom of the input field
        fontWeight:'bold',
        textAlign:'center'
    },
    buttonsContainer: {
        flexDirection:'row', // flexDirection is used to set the direction of the flex items in the container. In this case, it is set to 'row' which means that the flex items will be arranged in a row.
    },
    buttonContainer: {
        flex:1, // flex is used to set the flex grow factor of the button container. In this case, it is set to 1 which means that the button container will grow to fill the available space in the input container.
    }
}); 

