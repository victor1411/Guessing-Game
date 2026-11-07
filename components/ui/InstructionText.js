import {Text, StyleSheet} from 'react-native';
import Colors from "../../constants/colors";

function InstructionText({children, style}) {
    return (
        /* When we want the CSS  cascading feature which react
        native normally do not have we pass the style as a prop
        we can merge it with the normal StyleSheet by creating
        an arrayand the styles in the right can override the 
        styles in the left*/
        <Text style= {[styles.instructionText, style]}>{children}</Text>
    )
}

export default InstructionText;

const styles = StyleSheet.create({
    instructionText:{
        fontFamily:'open-sans',
        color: Colors.accent500,
        fontSize:24,
    },
})