import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5F5F5',
        padding: 8,
    },
    paragraph: {
        margin: 24,
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#9E9E9E'
    },
    button1: {
        backgroundColor: '#9E9E9E',
        height: 60,
        width: 70,
        justifyContent: 'center',
        position: "absolute",
        left: 75,
        bottom: 250,
    },
    button2: {
        backgroundColor: '#9E9E9E',
        height: 60,
        width: 70,
        position: "absolute",
        left: 230,
        bottom: 250
    },
    button3: {
        backgroundColor: '#9E9E9E',
        height: 40,
        width: 150,
        justifyContent: 'center',
        position: 'absolute',
        bottom: 200,
        left: 110,
        borderRadius: 25,
        
    },
    textButton: {
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
        justifyContent: 'center'
    },
    counter: {
        borderWidth: 4,
        borderColor: '#9E9E9E',
        padding: 8,
        marginTop: 8,
        justifyContent: 'center',
    },
    textCounter: {
        fontSize: 32,
        color: '#424242',
        textAlign: 'center',
        fontWeight: 'bold',
        position: 'absolute',
        left: '50'
    }
});

export default styles