import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const _Layout = ({ children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Web to Doc App</Text>
      </View>
      <View style={styles.content}>{children}</View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2023 Web to Doc</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#007AFF', // Header background color
    padding: 10,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 10,
  },
  footer: {
    backgroundColor: '#007AFF', // Footer background color
    padding: 10,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: 'white',
  },
});

export default _Layout;
