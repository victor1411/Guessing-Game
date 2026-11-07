import {View, StyleSheet} from 'react-native'
import Colors from "../../constants/colors";

function Card({children}) {
    return (
        <View style={styles.card}>
            {children}
        </View>
    )
}
export default Card

const styles = StyleSheet.create({
    card: {
        // flex:1,
        marginTop:36,
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