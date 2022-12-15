function App() {
    return (
        <>
            <Image source={require('./assets/logo.jpg')} />
            <Image source={{ uri: 'https://github.com/codemaker2015/codemaker2015/raw/main/codemaker.png' }} />
            <Image source={{ uri: 'data:image/png;base64,<base64-string>=' }} />
        </>
    );
}   