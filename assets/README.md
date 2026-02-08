# Assets

This folder holds runtime assets loaded by the game. Keep filenames lowercase with dashes.

## Supported Formats
- Models: .glb, .gltf, .bin, .obj, .mtl
- Textures: .png, .jpg, .ktx2
- Audio: .mp3, .wav, .ogg

## Conventions
- Put source files in their matching folder: models/, textures/, audio/.
- Prefer compressed or optimized assets. Keep individual files small when possible.
- If an asset has dependencies (like .gltf + .bin + textures), keep them together in a subfolder.
