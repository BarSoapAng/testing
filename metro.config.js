// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

const extraAssetExts = ['glb', 'gltf', 'bin', 'obj', 'mtl', 'ktx2'];
config.resolver.assetExts = Array.from(
  new Set([...(config.resolver.assetExts ?? []), ...extraAssetExts])
);

module.exports = config;
