<<<<<<< HEAD
import {View, Text, StyleSheet, Dimensions} from "react-native";
=======
import {View, Text, StyleSheet} from "react-native";
>>>>>>> 97caf6e60b6d663c19490f37162f95314ea78e75

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

<<<<<<< HEAD

/* Dimensions API is built in to react-native it is not a 
component we will use in the JSX code instead it is a 
javascript object we can use any where in our javascript
code including the styles to get info out of it some of the 
info we could get out of it are the device width and height*/
const deviceWidth = Dimensions.get('window').width;

=======
>>>>>>> 97caf6e60b6d663c19490f37162f95314ea78e75
const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.accent500,
<<<<<<< HEAD
        /*we are using the tentary expression asking if the device
        Width is less than 450  it should use padding of 12 but if 
        not use 24 for the pasdding */
        padding: deviceWidth < 380 ? 12 : 24,
        borderRadius: 8,
        margin: deviceWidth < 380 ? 12 : 24,
=======
        padding: 24,
        borderRadius: 8,
        margin: 24,
>>>>>>> 97caf6e60b6d663c19490f37162f95314ea78e75
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberText: {
        color: Colors.accent500, 
<<<<<<< HEAD
        fontSize: deviceWidth < 380 ? 28 : 36,
        fontFamily:"open-sans-bold",
        // fontWeight: 'bold',
    },
})

=======
        fontSize: 36,
        fontFamily:"open-sans-bold",
        // fontWeight: 'bold',
    },
})
>>>>>>> 97caf6e60b6d663c19490f37162f95314ea78e75
