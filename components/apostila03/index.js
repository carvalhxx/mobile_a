import React, {useState}  from 'react'
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function apostila03() {

    const [contador, setContador] = useState(0)

    function AddNumber() {
        setContador(contador +1);
        console.log(contador);
    }

    function RemNumber() {
        setContador(contador - 1);
        console.log(contador)
    }

    function ZerNumber() {
        setContador(contador - contador);
        console.log(contador)
    }

    return(
        <View style={styles.container} >
            <Text style={styles.paragraph}> Exemplo 3 apostila </Text>

            <Text style={styles.textCounter}>{contador}</Text>
            
            <TouchableOpacity
            style={styles.button1}
            onPress={() =>AddNumber ()}
            >
                <Text style={styles.textButton}>+</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.button2}
            onPress={() =>ZerNumber ()}
            >
                <Text style={styles.textButton}>-</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.button3}
            onPress={() =>ZerNumber ()}
            >
                <Text style={styles.textButton}>Zerar</Text>
            </TouchableOpacity>
        </View>
    );
}