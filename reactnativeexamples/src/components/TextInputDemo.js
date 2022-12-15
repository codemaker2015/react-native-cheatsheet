import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

const App = () => {
    const [text, setText] = useState('');
    return (
        <View style={{ padding: 15 }}>
            <TextInput
                style={{ height: 50 }}
                placeholder="Enter name"
                onChangeText={name => setText(name)}
                defaultValue={text}
            />
            <Text style={{ padding: 10, fontSize: 30 }}>{text}</Text>
        </View>
    );
};

export default App;