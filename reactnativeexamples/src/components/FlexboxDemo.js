import { View, Text, StyleSheet } from "react-native";

const App = () => {
    return (
        <View style={[styles.container, {
            // Try setting `flexDirection` to `"column"`.
            flexDirection: "column"
        }]}>
            <View style={{ flex: 1, backgroundColor: "red" }} />
            <View style={{ flex: 2, backgroundColor: "orange" }} />
            <View style={{ flex: 3, backgroundColor: "green" }} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    }
});

export default App;