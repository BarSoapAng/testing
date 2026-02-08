export const GAME_CONFIG = {
  camera: {
    position: [0, 0, 4],
    fov: 60,
  },
  clearColor: '#0b0b0f',
  colors: {
    primary: '#4fd1c5',
    ground: '#1f2937',
  },
  lighting: {
    ambientIntensity: 0.6,
    keyLightIntensity: 1,
    keyLightPosition: [5, 5, 5],
  },
} as const;
