import React, { useEffect, useRef } from "react"; 
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";

import styles from '../styles/search';
import{COLORS, icons, images, SIZES} from '../constants';
import{ Nearbyjobs, POpularjobs, ScreenHeaderBtn,Welcome} from '../components';

const WelcomeScreen = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Create a spring animation for the "to" text
    Animated.spring(animatedValue, {
      toValue: 1, // This will animate "to" to the final position
      useNativeDriver: false,
    }).start();
  }, []);

  const interpolatedValue = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-100, 0], // Adjust the value for the desired position
  });

  return (
    <View style={styles.container}>
      <Text style={styles.appName}>
        Web{' '}
        <Animated.Text
          style={[
            styles.appName,
            {
              transform: [{ translateX: interpolatedValue }],
              position: 'relative',
            },
          ]}
        >
          to
        </Animated.Text>{' '}
        Doc
      </Text>
    </View>
  );
};
export default function App() {
  return <WelcomeScreen />;
}

