# TiltOnHover Variant

Advanced 3D tilt effect component with multiple animation types and interactive features.

## Features

- ✅ **9 Different Tilt Animations**: basic, glare, scale, perspective, bounce, elastic, magnetic, float, parallax
- ✅ **3D Transform Effects**: Full perspective and depth control
- ✅ **Interactive Glare Effects**: Mouse-following light reflections
- ✅ **Gyroscope Support**: Mobile device orientation integration
- ✅ **Performance Optimized**: RequestAnimationFrame and smooth 60fps
- ✅ **Touch Support**: Optional touch device support
- ✅ **Customizable Axis**: X-only, Y-only, or both axes
- ✅ **TypeScript**: Full type safety
- ✅ **Accessible**: Proper interaction patterns

## Usage

### Basic Usage

```tsx
import { ReactiveImage } from "reactive-image";

<ReactiveImage
  variant="tiltOnHover"
  src="/image.jpg"
  alt="Image description"
  tiltMax={15}
/>;
```

### Animation Types

```tsx
// Basic tilt (default)
<ReactiveImage
  variant="tiltOnHover"
  animation="basic"
  tiltMax={12}
  src="/image.jpg"
  alt="Basic tilt"
/>

// Glare effect
<ReactiveImage
  variant="tiltOnHover"
  animation="glare"
  tiltMax={10}
  glare={{
    enabled: true,
    maxOpacity: 0.4,
    color: "rgba(255,255,255,0.3)",
    position: "mouse"
  }}
  src="/image.jpg"
  alt="Glare tilt"
/>

// Scale with tilt
<ReactiveImage
  variant="tiltOnHover"
  animation="scale"
  tiltMax={15}
  scale={1.05}
  src="/image.jpg"
  alt="Scale tilt"
/>

// 3D perspective
<ReactiveImage
  variant="tiltOnHover"
  animation="perspective"
  tiltMax={20}
  perspective={1200}
  src="/image.jpg"
  alt="3D perspective tilt"
/>
```

### Axis Control

```tsx
// Both axes (default)
<ReactiveImage
  variant="tiltOnHover"
  axis="both"
  tiltMax={15}
  src="/image.jpg"
  alt="Full tilt"
/>

// X-axis only (horizontal tilt)
<ReactiveImage
  variant="tiltOnHover"
  axis="x"
  tiltMax={10}
  src="/image.jpg"
  alt="Horizontal tilt only"
/>

// Y-axis only (vertical tilt)
<ReactiveImage
  variant="tiltOnHover"
  axis="y"
  tiltMax={10}
  src="/image.jpg"
  alt="Vertical tilt only"
/>
```

### Advanced Effects

```tsx
// Magnetic attraction
<ReactiveImage
  variant="tiltOnHover"
  animation="magnetic"
  tiltMax={12}
  src="/image.jpg"
  alt="Magnetic tilt"
/>

// Floating with shadow
<ReactiveImage
  variant="tiltOnHover"
  animation="float"
  tiltMax={8}
  shadow={true}
  src="/image.jpg"
  alt="Floating tilt"
/>

// Parallax effect
<ReactiveImage
  variant="tiltOnHover"
  animation="parallax"
  tiltMax={15}
  src="/image.jpg"
  alt="Parallax tilt"
/>
```

### Custom Timing

```tsx
<ReactiveImage
  variant="tiltOnHover"
  animation="elastic"
  timing={{
    duration: 150, // Mouse movement response
    reset: 600, // Reset animation duration
    easing: "ease-out",
  }}
  tiltMax={20}
  src="/image.jpg"
  alt="Custom timing"
/>
```

### Mobile & Gyroscope

```tsx
// Touch support
<ReactiveImage
  variant="tiltOnHover"
  enableTouch={true}
  tiltMax={10}
  src="/image.jpg"
  alt="Touch enabled tilt"
/>

// Gyroscope integration (mobile)
<ReactiveImage
  variant="tiltOnHover"
  gyroscope={true}
  tiltMax={15}
  src="/image.jpg"
  alt="Gyroscope tilt"
/>
```

### Event Callbacks

```tsx
<ReactiveImage
  variant="tiltOnHover"
  onTiltStart={({ tiltX, tiltY }) =>
    console.log("Tilt started", { tiltX, tiltY })
  }
  onTiltMove={({ tiltX, tiltY, mouseX, mouseY }) =>
    console.log("Tilt moving", { tiltX, tiltY, mouseX, mouseY })
  }
  onTiltEnd={() => console.log("Tilt ended")}
  tiltMax={15}
  src="/image.jpg"
  alt="With callbacks"
/>
```

### Advanced Styling

```tsx
<ReactiveImage
  variant="tiltOnHover"
  className="my-tilt-container"
  imgClassName="rounded-lg"
  tiltClassName="shadow-2xl" // Applied during tilt
  style={{ maxWidth: "300px" }}
  animation="glare"
  glare={{
    enabled: true,
    maxOpacity: 0.3,
    position: "mouse",
  }}
  reverse={false} // Reverse tilt direction
  resetOnLeave={true} // Reset when mouse leaves
  src="/image.jpg"
  alt="Advanced tilt"
/>
```

## Animation Types

| Animation     | Description                | Best For                       |
| ------------- | -------------------------- | ------------------------------ |
| `basic`       | Simple 3D tilt effect      | General purpose, cards         |
| `glare`       | Tilt with light reflection | Premium feel, product showcase |
| `scale`       | Tilt with scaling effect   | Interactive elements           |
| `perspective` | Enhanced 3D depth          | Immersive experiences          |
| `bounce`      | Bouncy reset animation     | Playful interactions           |
| `elastic`     | Smooth elastic reset       | Modern UI elements             |
| `magnetic`    | Attraction-like movement   | Dynamic interactions           |
| `float`       | Floating with shadows      | Card hover effects             |
| `parallax`    | Multi-layer movement       | Rich visual depth              |

## Glare Effect Options

| Property     | Type                  | Default                   | Description           |
| ------------ | --------------------- | ------------------------- | --------------------- |
| `enabled`    | `boolean`             | `false`                   | Enable glare effect   |
| `maxOpacity` | `number`              | `0.3`                     | Maximum glare opacity |
| `color`      | `string`              | `"rgba(255,255,255,0.3)"` | Glare color           |
| `position`   | `"center" \| "mouse"` | `"center"`                | Glare positioning     |

## Props Reference

| Prop            | Type                   | Default   | Description                    |
| --------------- | ---------------------- | --------- | ------------------------------ |
| `tiltMax`       | `number`               | `10`      | Maximum tilt angle in degrees  |
| `animation`     | `TiltAnimationType`    | `"basic"` | Animation type                 |
| `axis`          | `"both" \| "x" \| "y"` | `"both"`  | Tilt axis restriction          |
| `timing`        | `TiltTiming`           | `{}`      | Animation timing configuration |
| `perspective`   | `number`               | `1000`    | 3D perspective value           |
| `scale`         | `number`               | `1`       | Scale factor during tilt       |
| `glare`         | `GlareSettings`        | `{}`      | Glare effect configuration     |
| `shadow`        | `boolean`              | `false`   | Enable dynamic shadows         |
| `reverse`       | `boolean`              | `false`   | Reverse tilt direction         |
| `resetOnLeave`  | `boolean`              | `true`    | Reset when mouse leaves        |
| `gyroscope`     | `boolean`              | `false`   | Enable gyroscope support       |
| `enableTouch`   | `boolean`              | `false`   | Enable touch support           |
| `tiltClassName` | `string`               | -         | Class applied during tilt      |
| `onTiltStart`   | `function`             | -         | Tilt start callback            |
| `onTiltMove`    | `function`             | -         | Tilt move callback             |
| `onTiltEnd`     | `function`             | -         | Tilt end callback              |

## Performance Tips

1. **Use moderate tilt angles** (5-20 degrees) for best visual effect
2. **Limit perspective values** (800-1500px) for optimal performance
3. **Disable gyroscope** when not needed to save battery
4. **Use `resetOnLeave={true}`** for cleaner interactions
5. **Optimize glare effects** by using appropriate opacity values

## Browser Support

- ✅ Chrome 80+ (Full support including gyroscope)
- ✅ Firefox 75+ (Limited gyroscope support)
- ✅ Safari 13+ (iOS gyroscope supported)
- ✅ Edge 80+

## Accessibility

- ✅ Respects `prefers-reduced-motion`
- ✅ Keyboard navigation support
- ✅ Touch device optimization
- ✅ Screen reader friendly

## Examples

Check out the demo page for live examples of all animation types and configurations.
