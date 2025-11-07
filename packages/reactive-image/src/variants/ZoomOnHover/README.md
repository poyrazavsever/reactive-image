# ZoomOnHover Variant

Advanced zoom-on-hover component with multiple animation types and extensive customization options.

## Features

- ✅ **9 Different Zoom Animations**: scale, scaleRotate, scaleBlur, scaleFade, scaleSlide, perspective, pulse, bounce, elastic
- ✅ **Flexible Transform Origins**: 9 predefined positions + cursor following
- ✅ **Performance Optimized**: Smooth animations with CSS transforms
- ✅ **Touch Support**: Optional touch device support
- ✅ **Customizable Effects**: Opacity, blur, rotation combinations
- ✅ **TypeScript**: Full type safety
- ✅ **Accessible**: Proper cursor styles and keyboard support
- ✅ **Responsive**: Works great on all screen sizes

## Usage

### Basic Usage

```tsx
import { ReactiveImage } from "reactive-image";

<ReactiveImage
  variant="zoomOnHover"
  src="/image.jpg"
  alt="Image description"
  zoomScale={1.2}
/>;
```

### Animation Types

```tsx
// Simple scale (default)
<ReactiveImage
  variant="zoomOnHover"
  animation="scale"
  zoomScale={1.3}
  src="/image.jpg"
  alt="Scale effect"
/>

// Scale with rotation
<ReactiveImage
  variant="zoomOnHover"
  animation="scaleRotate"
  zoomScale={1.2}
  rotation={15}
  src="/image.jpg"
  alt="Scale and rotate"
/>

// Scale with blur effect
<ReactiveImage
  variant="zoomOnHover"
  animation="scaleBlur"
  zoomScale={1.15}
  blurAmount={2}
  src="/image.jpg"
  alt="Scale with blur"
/>

// Elastic bounce effect
<ReactiveImage
  variant="zoomOnHover"
  animation="elastic"
  zoomScale={1.25}
  timing={{ duration: 600 }}
  src="/image.jpg"
  alt="Elastic zoom"
/>
```

### Transform Origins

```tsx
// Center origin (default)
<ReactiveImage
  variant="zoomOnHover"
  origin="center"
  zoomScale={1.2}
  src="/image.jpg"
  alt="Center zoom"
/>

// Corner origins
<ReactiveImage
  variant="zoomOnHover"
  origin="top-left"
  zoomScale={1.3}
  src="/image.jpg"
  alt="Top-left zoom"
/>

// Cursor following zoom
<ReactiveImage
  variant="zoomOnHover"
  origin="cursor"
  followCursor={true}
  zoomScale={1.4}
  src="/image.jpg"
  alt="Cursor following zoom"
/>
```

### Custom Timing

```tsx
<ReactiveImage
  variant="zoomOnHover"
  animation="bounce"
  timing={{
    duration: 800,
    delay: 100,
    easing: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
  }}
  zoomScale={1.2}
  src="/image.jpg"
  alt="Custom bounce timing"
/>
```

### Advanced Effects

```tsx
<ReactiveImage
  variant="zoomOnHover"
  animation="scaleFade"
  zoomScale={1.3}
  opacityChange={0.8}      // Fade to 80% opacity
  containZoom={true}       // Prevent overflow
  src="/image.jpg"
  alt="Scale with fade"
/>

<ReactiveImage
  variant="zoomOnHover"
  animation="perspective"
  zoomScale={1.2}
  rotation={20}            // 3D rotation effect
  src="/image.jpg"
  alt="3D perspective zoom"
/>
```

### Touch Device Support

```tsx
<ReactiveImage
  variant="zoomOnHover"
  enableTouch={true} // Enable touch support for mobile
  animation="pulse"
  zoomScale={1.15}
  src="/image.jpg"
  alt="Touch enabled zoom"
/>
```

### Event Callbacks

```tsx
<ReactiveImage
  variant="zoomOnHover"
  onZoomStart={() => console.log("Zoom started")}
  onZoomEnd={() => console.log("Zoom finished")}
  zoomScale={1.2}
  src="/image.jpg"
  alt="With callbacks"
/>
```

### Advanced Styling

```tsx
<ReactiveImage
  variant="zoomOnHover"
  className="my-zoom-container"
  imgClassName="rounded-lg shadow-lg"
  zoomClassName="shadow-2xl" // Additional class when zoomed
  style={{ maxWidth: "400px" }}
  containZoom={true}
  zoomScale={1.3}
  src="/image.jpg"
  alt="Custom styled zoom"
/>
```

## Animation Types

| Animation     | Description                   | Best For                        |
| ------------- | ----------------------------- | ------------------------------- |
| `scale`       | Simple scale transformation   | General purpose, product images |
| `scaleRotate` | Scale with rotation effect    | Dynamic interactions            |
| `scaleBlur`   | Scale with blur effect        | Artistic effects, backgrounds   |
| `scaleFade`   | Scale with opacity change     | Subtle interactions             |
| `scaleSlide`  | Scale with slight translation | Card hover effects              |
| `perspective` | 3D perspective transformation | Modern, depth effects           |
| `pulse`       | Quick pulse effect            | Button-like interactions        |
| `bounce`      | Bouncy elastic effect         | Playful interactions            |
| `elastic`     | Smooth elastic transformation | Premium feel interactions       |

## Transform Origins

| Origin         | Description         | Use Case                   |
| -------------- | ------------------- | -------------------------- |
| `center`       | Center of image     | Most common, balanced zoom |
| `top`          | Top edge            | Header images, banners     |
| `bottom`       | Bottom edge         | Footer images, cards       |
| `left`         | Left edge           | Side navigation items      |
| `right`        | Right edge          | Side navigation items      |
| `top-left`     | Top-left corner     | Corner focus effects       |
| `top-right`    | Top-right corner    | Corner focus effects       |
| `bottom-left`  | Bottom-left corner  | Corner focus effects       |
| `bottom-right` | Bottom-right corner | Corner focus effects       |
| `cursor`       | Mouse position      | Interactive exploration    |

## Props Reference

| Prop            | Type                | Default    | Description                             |
| --------------- | ------------------- | ---------- | --------------------------------------- |
| `zoomScale`     | `number`            | `1.15`     | Zoom scale factor                       |
| `animation`     | `ZoomAnimationType` | `"scale"`  | Animation type                          |
| `origin`        | `ZoomOrigin`        | `"center"` | Transform origin point                  |
| `timing`        | `ZoomTiming`        | `{}`       | Animation timing configuration          |
| `followCursor`  | `boolean`           | `false`    | Enable cursor following (cursor origin) |
| `opacityChange` | `number`            | `1`        | Opacity during zoom (0-1)               |
| `blurAmount`    | `number`            | `0`        | Blur amount in pixels                   |
| `rotation`      | `number`            | `0`        | Rotation in degrees                     |
| `containZoom`   | `boolean`           | `false`    | Prevent zoom overflow                   |
| `enableTouch`   | `boolean`           | `false`    | Enable touch device support             |
| `zoomClassName` | `string`            | -          | Additional class when zoomed            |
| `onZoomStart`   | `() => void`        | -          | Zoom start callback                     |
| `onZoomEnd`     | `() => void`        | -          | Zoom end callback                       |

## Performance Tips

1. **Use moderate zoom scales** (1.1-1.3) for better performance
2. **Avoid high blur amounts** on low-end devices
3. **Use `containZoom={true}`** to prevent layout shifts
4. **Choose appropriate animation duration** - shorter for UI (200-400ms), longer for artistic effects (600-800ms)
5. **Enable touch sparingly** to avoid unnecessary event listeners

## Browser Support

- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+

## Examples

Check out the demo page for live examples of all animation types and configurations.
