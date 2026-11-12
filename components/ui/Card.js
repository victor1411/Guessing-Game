<<<<<<< HEAD
import {View, StyleSheet, Dimensions} from 'react-native'
=======
import {View, StyleSheet} from 'react-native'
>>>>>>> 97caf6e60b6d663c19490f37162f95314ea78e75
import Colors from "../../constants/colors";

function Card({children}) {
    return (
        <View style={styles.card}>
            {children}
        </View>
    )
}
<<<<<<< HEAD
export default Card;

/* Dimensions API is built in to react-native it is not a 
component we will use in the JSX code instead it is a 
javascript object we can use any where in our javascript
code including the styles to get info out of it some of the 
info we could get out of it are the device width and height*/

const deviceWidth = Dimensions.get('window').width;
=======
export default Card
>>>>>>> 97caf6e60b6d663c19490f37162f95314ea78e75

const styles = StyleSheet.create({
    card: {
        // flex:1,
<<<<<<< HEAD
        marginTop:deviceWidth < 380 ? 18 : 36,
=======
        marginTop:36,
>>>>>>> 97caf6e60b6d663c19490f37162f95314ea78e75
        marginHorizontal:24,
        padding:16,
        backgroundColor:Colors.primary800, // backgroundColor is used to set the background color of the input container
        borderRadius:8, // borderRadius is used to set the rounded corners of the input container
        // Shadow properties for iOS and Android
        elevation:4, // Box shadow for Android
        shadowColor:'black', // Box shadow for iOS which uses shadowColor, shadowOffset, shadowRadius, and shadowOpacity
        shadowOffset:{width:0, height:2},
        shadowRadius:6,
        shadowOpacity:0.25,
        alignItems:'center',
        justifyContent:'center',
    },
})