
import {View, Text,Pressable ,StyleSheet} from "react-native";

import Colors from "../../constants/colors";

function PrimaryButton({children, onPress}) {
            /* This the function that will be pass as a value to the
        onPress prop */
        // function pressHandler(){
        //     onPress();
        // }
    return (
        /* the View and Text components are used to create a 
        custom button componets that can be reused throughout the
        app. On there own the do not have any functionality that a 
        regular button would have */
        <View style={styles.buttonOuterContainer}>
        {/*  Pressable is a component that can be used to create a 
        button that can be pressed by the user. It is similar to 
        the Touchable  component, but it has more features 
        and is more customizable. The Pressable component can be 
        used to create a button that can be pressed by the user.
        Pressable has an onPress prop which takes a 
        function as a value which ensures that the onPress will be 
        executed when the button is pressed. Android_ripple is used
        to create a ripple effect when the button is pressed the 
        arrow function below is called when ever the button is pressed the
        arrow function is used because IOS does not have a built-in ripple effect. So we
        create a style for the pressed state. the style object received as a parameter 
         pressed is a boolean value that indicates whether the button is currently pressed */}
        <Pressable 
        style={({pressed}) => 
            pressed 
            ? [styles.buttonInnerContainer, styles.pressed] 
            : styles.buttonInnerContainer} 
            onPress={onPress} 
            android_ripple={{color: Colors.primary600}}
            >
            <Text style={styles.buttonText} >{children}</Text>
        </Pressable>
        </View>
    
    );
}



export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28, // borderRadius is used to set the rounded corners of the button
        margin: 4,  // margin is used to set the margin of the button
        overflow: 'hidden', // overflow is used to set the overflow behavior of the button. In this case, it is set to 'hidden' which means that any content that goes beyond  the button will be hidden.
    },
    buttonInnerContainer: {
        backgroundColor: Colors.primary500, // backgroundColor is used to set the background color of the button
        paddingVertical: 8,// paddingVertical is used to set the top and bottom padding of the button
        paddingHorizontal: 16,// paddingHorizontal is used to set the left and right padding of the button
        elevation: 2, // elevation is used to set the shadow of the button on Android
    },
    buttonText: {
        color: 'white', // color is used to set the text color of the button
        textAlign: 'center', // textAlign is used to set the text alignment of the button
    },
    pressed: {
        opacity: 0.75, // opacity is used to set the opacity of the button when it is pressed
    }
});