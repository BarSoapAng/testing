import { Canvas } from '@react-three/fiber/native';
import { StyleSheet, View } from 'react-native';

import { GAME_CONFIG } from './config';
import { Scene } from './Scene';

export function GameCanvas() {
  return (
    <View style={styles.container}>
      <Canvas
        style={styles.canvas}
        camera={GAME_CONFIG.camera}
        gl={{ antialias: true }}>
        <Scene />
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
