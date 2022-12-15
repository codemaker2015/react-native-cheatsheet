import { useEffect } from 'react';
import { BackHandler } from 'react-native';

function App() {
    useEffect(() => {
        const backAction = () => {
            console.log("back button pressed");
            return false; // back button is enabled
            return true;  // back button is disabled
        };

        // Register for hardware back event and attach a handler to it
        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backAction,
        );

        return () => backHandler.remove();
    }, []);
};

export default App;