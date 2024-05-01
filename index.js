import React, { useState, useEffect } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';

const CustomToast = ({ message, duration = 2000 }) => {
    const [visible, setVisible] = useState(true);
    const opacity = useState(new Animated.Value(1))[0];

    useEffect(() => {
        const timer = setTimeout(() => {
            hideMessage();
        }, duration);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    const hideMessage = () => {
        Animated.timing(opacity, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
        }).start(() => {
            setVisible(false);
        });
    };

    if (!visible) {
        return null;
    }

    return (
        <Animated.View style={[styles.container, { opacity }]}>
            <View style={styles.toast}>
                <Text style={styles.message}>{message}</Text>
            </View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        alignItems: 'center',
    },
    toast: {
        backgroundColor: '#333',
        borderRadius: 8,
        padding: 12,
    },
    message: {
        color: '#fff',
        fontSize: 14,
    },
});

export default CustomToast;
