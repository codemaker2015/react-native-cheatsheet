import React, {useState, useEffect} from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Linking,
  Dimensions,
  ActivityIndicator,
} from 'react-native';

const {width, height} = Dimensions.get('window');

function Link(props) {
  return (
    <Text
      {...props}
      accessibilityRole="link"
      style={StyleSheet.compose(styles.link, props.style)}
    />
  );
}

function App() {
  const [logoUri, setLogoUri] = useState(
    'https://avatars.githubusercontent.com/',
  );
  const [loading, setLoading] = useState(false);

  const getLogoUri = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        'https://api.github.com/users/codemaker2015',
      );
      const json = await response.json();
      setLogoUri(json?.avatar_url);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log('component is mounted');
    getLogoUri();
    return () => {
      console.log('component is unmounted');
    };
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.app}>
      <View style={styles.header}>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <Image
            accessibilityLabel="React logo"
            source={{uri: logoUri}}
            resizeMode="contain"
            style={styles.logo}
          />
        )}
        <Text style={styles.title}>Vishnu Sivan</Text>
      </View>
      <Text style={styles.subTitle}>Immersive tech lead, TCS RapidLabs</Text>
      <Text style={styles.text}>
        Seasoned professional, forward looking software engineer with 3+ years
        of experience in creating and executing innovative solutions in
        immersive field to enhance business productivity.
        {'\n\n'}
        <Link
          href="https://github.com/necolas/react-native-web"
          onPress={() => {
            Linking.openURL('https://github.com/codemaker2015');
          }}>
          Know more about me
        </Link>
      </Text>
      <Button
        onPress={() => {
          Linking.openURL('mailto:codemaker2015@gmail.com');
        }}
        title="Contact Me"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F3F3',
    width: width,
    height: height,
  },
  logo: {
    width: 180,
    height: 180,
    borderRadius: 10,
  },
  header: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    marginVertical: 10,
    textAlign: 'center',
  },
  subTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
    textAlign: 'center',
  },
  text: {
    lineHeight: 20,
    fontSize: 18,
    margin: 18,
    textAlign: 'center',
  },
  link: {
    color: '#1B95E0',
  },
});
export default App;