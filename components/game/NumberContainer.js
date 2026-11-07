import {View, Text, StyleSheet} from "react-native";

import Colors from "../../constants/colors";

function NumberContainer({children}) {
    return (
        /* Like here we used a View instead of a Text component 
        is because when we want to style the container  but the
        borderRaius only affect android devices when we just use 
        text component but when we use the view component we 
        can style it properly for all devices */
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
}

export default NumberContainer;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.accent500,
        padding: 24,
        borderRadius: 8,
        margin: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberText: {
        color: Colors.accent500, 
        fontSize: 36,
        fontFamily:"open-sans-bold",
        // fontWeight: 'bold',
    },
})