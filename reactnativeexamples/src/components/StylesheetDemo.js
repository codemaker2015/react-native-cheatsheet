function App() {
    return (
        <>
            <Text style={styles.heading}>React Native</Text>
            <Text style={styles.message}>Hello World</Text>
        </>
    );
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 16,
    },
    message: {
        fontSize: 11,
        textTransform: 'uppercase',
    },
});