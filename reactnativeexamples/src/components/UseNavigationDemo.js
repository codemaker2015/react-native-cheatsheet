import * as React from 'react';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function App() {
    const navigation = useNavigation();

    return (
        <Button
            title="Back"
            onPress={() => {
                navigation.goBack();
            }}
        />
    );
}
export default App;