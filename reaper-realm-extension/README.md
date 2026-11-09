# Reaper Realm — Chrome Extension Prototype (v0.6.0)

A playable Manifest V3 Chrome extension prototype. It injects a full-screen canvas game into the active tab, scans visible DOM geometry into destructible structures, and renders a pixel-art/topographic miniature world.

## Features
- Explicit launch from extension popup; optional keyboard shortcut (`Alt+Shift+R`)
- Full-screen game world with camera-following Grim Reaper
- DOM-informed structures: headings, cards/sections, links/buttons, images/media, navigation; uses page text and computed colors to make landmarks more recognizable
- Hybrid contour-map + pixel-block art direction
- Scythe melee, soul bolts, grave bombs, terrain brush, soul pickups, combos, score
- Rebuild/restore-level action and exit/cleanup
- Original webpage DOM nodes are read but not deleted or rewritten; the game is a visual simulation

## Install locally
1. Unzip the project.
2. Open `chrome://extensions` in Chrome.
3. Enable **Developer mode**.
4. Choose **Load unpacked** and select the `reaper-realm-extension` folder.
5. Open a normal website and click the Reaper Realm extension icon.
6. Click **SUMMON THE REAPER**.

Keyboard controls:
- `W A S D` or arrow keys: move
- `Shift`: move faster
- Mouse: aim
- Click / hold click: attack / repeat attacks
- `1`: scythe, `2`: soul bolt, `3`: grave bomb, `4`: terraform brush
- `Space`: place a bomb at cursor
- `R`: regenerate level from the current page
- `Esc`: exit and restore page scrolling

## 3D character integration (v0.6.0)
- Uses the supplied `pixel_reaper.glb` with a local Three.js r180 module build and local `GLTFLoader`; no CDN/network dependency.
- Attempts to map `Idle`, `Walk`, and `ScytheTwirl` clips to idle, movement, and scythe attacks.
- Renders the 3D character on a transparent WebGL overlay above the existing destructible 2D terrain, with a soft radial ground shadow.
- If WebGL or model loading fails, the rest of the 2D game remains available and logs the error in DevTools.

## Architecture
- `manifest.json`: Manifest V3 permissions and shortcut
- `popup.html` / `popup.js`: toolbar launcher
- `game.js`: self-contained injected renderer, DOM scanner, controls, particles, and game loop

## Important limitations in this prototype
- The “topography” is a stylized 2D height-field illusion, not a true 3D mesh.
- DOM positions are sampled from the current viewport and projected into a larger playable map. This is a gameplay abstraction, not a pixel-perfect reconstruction.
- Dynamic pages may change after scanning; press `R` to rebuild.
- Browser-internal pages (`chrome://`, Chrome Web Store, some protected pages) cannot be injected.
- Cross-origin iframe contents are not scanned.
- This is intentionally local and reversible: it does not send page data anywhere and does not remove original elements.

## Character asset selection
The selected character source asset is `pixel_reaper.glb`, supplied by the project maintainer. Its GLB metadata contains `Idle`, `Wave`, `Walk`, and `ScytheTwirl` animation clips. The file is bundled locally and exposed as a web-accessible resource.

The world terrain and effects remain 2D; the player character is now rendered from the GLB in a transparent Three.js overlay. This is a hybrid prototype rather than a fully 3D terrain renderer.

## Suggested next milestones
1. Bundle Three.js and GLTFLoader locally and implement the GLB character renderer.
2. Drive `Idle` / `Walk` from movement and `ScytheTwirl` from attacks; add a soft contact shadow and tune model scale/orientation.
3. Improve layout-to-world mapping: group nested DOM elements, avoid duplicate overlapping structures, use text/image thumbnails, and preserve page proportions.
4. Add accessibility options, pause, volume, and settings.
5. Add automated smoke tests for launch/exit and representative pages.

