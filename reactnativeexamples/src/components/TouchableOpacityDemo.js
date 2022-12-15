import React, { useState } from 'react';
import { Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';

const App = () => {
    const [count, setCount] = useState(0);
    const onIncrement = () => setCount(count + 1);
    const onDecrement = () => setCount(count - 1);

    return (
        <View
            style={{
                flex: 1,
                margin: 20,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            <Text>Count: {count}</Text>
            <TouchableOpacity
                onPress={onIncrement}
                style={{ backgroundColor: '#F3F3F3', margin: 20, padding: 20 }}>
                <Text>+</Text>
            </TouchableOpacity>
            <TouchableHighlight
                onPress={onDecrement}
                style={{ backgroundColor: '#F3F3F3', margin: 20, padding: 20 }}>
                <Text>-</Text>
            </TouchableHighlight>
        </View>
    );
};

export default App;