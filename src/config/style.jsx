import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#7D0A0A',
        fontFamily: 'Roboto'
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        fontFamily: 'Roboto'

    },
    center: {
        alignSelf: 'center'
    },
    button: {
        marginTop: 10,
        maxWidth: 260,
        alignSelf: 'flex-end',
        backgroundColor: 'black',
        color: 'white'
    },
    input: {
        backgroundColor: 'white',
        color: 'black',
    }
})

export default style;