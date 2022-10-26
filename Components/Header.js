import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../css/styles';

export function Header({setCurrentScreen}) {

    const stuff = (data) => {
        setCurrentScreen(data)
    }

    return <View style={styles.header}>
        <Button
            id='daily'
            onPress={() => stuff('daily')}
            title="Daily todo"
            accessibilityLabel="Daily todo"
        />
        <Button
            onPress={() => stuff('weekly')}
            title="Weekly todo"
            accessibilityLabel="Daily todo"
        />
        <Button
            onPress={() => stuff('ultimate')}
            title="Ultimate goal"
            accessibilityLabel="Daily todo"
        />
    </View>
}
