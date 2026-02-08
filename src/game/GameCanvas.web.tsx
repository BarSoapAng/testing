import { Canvas } from '@react-three/fiber';
import { StyleSheet, View } from 'react-native';

import { GAME_CONFIG } from './config';
import { ActiveScene } from './entry';

export function GameCanvas() {
  return (
    <View style={styles.container}>
      <Canvas style={styles.canvas} camera={GAME_CONFIG.camera}>
        <ActiveScene />
      </Canvas>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GAME_CONFIG.clearColor,
  },
  canvas: {
    flex: 1,
  },
});
