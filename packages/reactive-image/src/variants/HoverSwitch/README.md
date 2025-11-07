# HoverSwitch Variant

Advanced hover switch component with multiple animations and performance optimizations.

## Features

- ✅ **9 Different Animations**: fade, slide, crossfade, zoom, blur, rotateY, slideUp, slideDown, scaleRotate
- ✅ **Performance Optimized**: Image preloading, lazy loading support, optimized re-renders
- ✅ **Touch Support**: Optional touch device support
- ✅ **Customizable Timing**: Duration, delay, easing controls
- ✅ **TypeScript**: Full type safety
- ✅ **Accessible**: Proper ARIA attributes and keyboard support
- ✅ **Responsive**: Works great on all screen sizes

## Usage

### Basic Usage

```tsx
import { ReactiveImage } from "reactive-image";

<ReactiveImage
  variant="hoverSwitch"
  src="/original.jpg"
  hoverSrc="/hover.jpg"
  alt="Image description"
/>;
```

### Animation Types

```tsx
// Fade animation (default)
<ReactiveImage
  variant="hoverSwitch"
  animation="fade"
  src="/image1.jpg"
  hoverSrc="/image2.jpg"
  alt="Fade effect"
/>

// Slide animation
<ReactiveImage
  variant="hoverSwitch"
  animation="slide"
  src="/image1.jpg"
  hoverSrc="/image2.jpg"
  alt="Slide effect"
/>

// Zoom animation
<ReactiveImage
  variant="hoverSwitch"
  animation="zoom"
  src="/image1.jpg"
  hoverSrc="/image2.jpg"
  alt="Zoom effect"
/>

// 3D Rotate animation
<ReactiveImage
  variant="hoverSwitch"
  animation="rotateY"
  src="/image1.jpg"
  hoverSrc="/image2.jpg"
  alt="3D rotate effect"
/>
```

### Custom Timing

```tsx
<ReactiveImage
  variant="hoverSwitch"
  animation="zoom"
  timing={{
    duration: 500, // Animation duration in ms
    delay: 100, // Animation delay in ms
    easing: "ease-out", // CSS easing function
  }}
  src="/image1.jpg"
  hoverSrc="/image2.jpg"
  alt="Custom timing"
/>
```

### Performance Options

```tsx
<ReactiveImage
  variant="hoverSwitch"
  preloadHover={true} // Preload hover image for better UX
  disableLazy={false} // Keep lazy loading enabled
  src="/image1.jpg"
  hoverSrc="/image2.jpg"
  alt="Performance optimized"
/>
```

### Touch Device Support

```tsx
<ReactiveImage
  variant="hoverSwitch"
  enableTouch={true} // Enable touch support for mobile
  src="/image1.jpg"
  hoverSrc="/image2.jpg"
  alt="Touch enabled"
/>
```

### Event Callbacks

```tsx
<ReactiveImage
  variant="hoverSwitch"
  onAnimationStart={() => console.log("Animation started")}
  onAnimationEnd={() => console.log("Animation finished")}
  src="/image1.jpg"
  hoverSrc="/image2.jpg"
  alt="With callbacks"
/>
```

### Advanced Styling

```tsx
<ReactiveImage
  variant="hoverSwitch"
  className="my-container"
  imgClassName="rounded-lg shadow-lg"
  hoverClassName="scale-105" // Additional class when hovered
  style={{ maxWidth: "400px" }}
  src="/image1.jpg"
  hoverSrc="/image2.jpg"
  alt="Custom styled"
/>
```

## Animation Types

| Animation     | Description                 | Best For                       |
| ------------- | --------------------------- | ------------------------------ |
| `slide`       | Horizontal slide transition | Before/after comparisons       |
| `crossfade`   | Smooth crossfade effect     | Product variations             |
| `zoom`        | Scale and fade effect       | Product details                |
| `blur`        | Blur to focus transition    | Artistic effects               |
| `rotateY`     | 3D flip effect              | Card flip interactions         |
| `slideUp`     | Vertical slide up           | Reveal effects                 |
| `slideDown`   | Vertical slide down         | Reveal effects                 |
| `scaleRotate` | Combined scale and rotate   | Dynamic interactions           |

## Props Reference

| Prop               | Type                       | Default  | Description                    |
| ------------------ | -------------------------- | -------- | ------------------------------ |
| `hoverSrc`         | `string`                   | -        | Image source for hover state   |
| `animation`        | `HoverSwitchAnimationType` | `"fade"` | Animation type                 |
| `timing`           | `HoverSwitchTiming`        | `{}`     | Animation timing configuration |
| `preloadHover`     | `boolean`                  | `true`   | Preload hover image            |
| `disableLazy`      | `boolean`                  | `false`  | Disable lazy loading           |
| `enableTouch`      | `boolean`                  | `false`  | Enable touch device support    |
| `hoverClassName`   | `string`                   | -        | Additional class when hovered  |
| `onAnimationStart` | `() => void`               | -        | Animation start callback       |
| `onAnimationEnd`   | `() => void`               | -        | Animation end callback         |

## Performance Tips

1. **Use `preloadHover={true}`** for critical images that users are likely to hover
2. **Keep `disableLazy={false}`** for better page load performance
3. **Choose appropriate `timing.duration`** - shorter for UI elements (200-300ms), longer for artistic effects (400-600ms)
4. **Use `enableTouch={true}`** only when needed to avoid unnecessary touch event listeners

## Browser Support

- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+

## Examples

Check out the demo page for live examples of all animation types and configurations.
