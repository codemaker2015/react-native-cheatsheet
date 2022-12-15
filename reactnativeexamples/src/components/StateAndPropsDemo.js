import { useState } from "react";
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export default App = (props) => {
    const [count, setCount] = useState(0);

    return (
        <View >
            <Text style={styles.header}>
                {props.title?.toUpperCase()}
            </Text>
            <Text>Count: {count}</Text>
        </View>
    );
}

App.defaultProps = {
    title: 'Hello React Native'
}

const styles = StyleSheet.create({
    header: {
        fontFamily: 'Roboto',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});