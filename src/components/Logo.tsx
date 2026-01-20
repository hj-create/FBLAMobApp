import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Logo = ({ size = 100 }: { size?: number }) => {
  const fontSize = size * 0.6; // Scale font size based on logo size
  
  return (
    <View style={[styles.container, { height: size }]}>
      <View style={styles.logoText}>
        <Text style={[styles.letter, styles.blueText, { fontSize }]}>F</Text>
        <Text style={[styles.letter, styles.yellowText, { fontSize }]}>B</Text>
        <Text style={[styles.letter, styles.blueText, { fontSize }]}>L</Text>
        <Text style={[styles.letter, styles.yellowText, { fontSize }]}>A</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  logoText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  letter: {
    fontWeight: '900',
    fontStyle: 'italic',
    letterSpacing: 2,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
    // Additional shadow for better depth
    elevation: 5,
  },
  blueText: {
    color: '#003DA5', // Deep blue FBLA color
  },
  yellowText: {
    color: '#FFD700', // Gold/Yellow color
  },
});

export default Logo;
