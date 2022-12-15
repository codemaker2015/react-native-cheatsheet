import React from 'react';
import { FlatList, Text, View } from 'react-native';

const App = () => {
    return (
        <View>
            <FlatList
                data={[
                    { key: 'January' },
                    { key: 'February' },
                    { key: 'March' },
                    { key: 'April' },
                ]}
                renderItem={({ item }) => <Text>{item.key}</Text>}
            />
        </View>
    );
};