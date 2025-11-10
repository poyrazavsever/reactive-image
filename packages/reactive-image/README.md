# Reactive Image

🚀 **A modern React image component library with interactive animations**

Reactive Image provides beautiful, performant image animations for modern web applications. Built with TypeScript, optimized for performance, and designed for accessibility.

## Features

- ✅ **4 Animation Variants**: HoverSwitch, ZoomOnHover, TiltOnHover, ClickExpand
- ✅ **36+ Animation Types**: Wide variety of effects and transitions
- ✅ **Performance Optimized**: GPU acceleration, lazy loading, image preloading
- ✅ **TypeScript First**: Full type safety and IntelliSense support
- ✅ **Accessible**: ARIA attributes, keyboard navigation, screen reader friendly
- ✅ **Responsive**: Mobile-friendly with touch support
- ✅ **Zero Dependencies**: Only requires React as peer dependency

## Installation

```bash
npm install reactive-image
# or
yarn add reactive-image
# or
pnpm add reactive-image
```

## Quick Start

```tsx
import { ReactiveImage } from "reactive-image";

// Hover to switch between images
<ReactiveImage
  variant="hoverSwitch"
  src="/image1.jpg"
  hoverSrc="/image2.jpg"
  alt="Hover switch example"
/>

// Zoom effect on hover
<ReactiveImage
  variant="zoomOnHover"
  src="/image.jpg"
  alt="Zoom example"
  zoomScale={1.2}
/>

// 3D tilt effect
<ReactiveImage
  variant="tiltOnHover"
  src="/image.jpg"
  alt="Tilt example"
  animation="glare"
/>

// Click to expand modal
<ReactiveImage
  variant="clickExpand"
  src="/image.jpg"
  alt="Expand example"
  modalAnimation="scaleFade"
/>
```

## Animation Variants

### HoverSwitch (8 animations)

Switch between two images on hover with smooth transitions.

- `fade`, `crossfade`, `slide`, `slideUp`, `slideDown`, `zoom`, `blur`, `rotateY`, `scaleRotate`

### ZoomOnHover (10 animations)

Zoom and transform effects triggered by mouse hover.

- `scale`, `scaleRotate`, `scaleBlur`, `scaleFade`, `scaleSlide`, `perspective`, `pulse`, `bounce`, `elastic`

### TiltOnHover (9 animations)

3D tilt effects that follow mouse movement.

- `basic`, `glare`, `scale`, `perspective`, `bounce`, `elastic`, `magnetic`, `float`, `parallax`

### ClickExpand (9 animations)

Modal overlay activated by clicking the image.

- `scaleFade`, `slideUp`, `slideDown`, `slideLeft`, `slideRight`, `springPop`, `zoomBounce`, `rotateIn`, `flipIn`

## Performance

- **GPU Acceleration**: All animations use CSS transforms and `will-change` properties
- **60fps Animations**: Smooth performance on modern devices
- **Optimized Loading**: Smart image preloading and lazy loading support
- **Bundle Size**: ~54KB minified (no external dependencies)

## Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## TypeScript

This library is built with TypeScript and includes comprehensive type definitions.

```tsx
import type { ReactiveImageProps, HoverSwitchProps } from "reactive-image";
```

## License

MIT © [Poyraz Avsever](https://github.com/poyrazavsever)

## Links

- 📖 [Documentation](https://reactive-image.vercel.app)
- 🎮 [Interactive Demos](https://reactive-image.vercel.app/showcase)
- 🐛 [Issues](https://github.com/poyrazavsever/reactive-image/issues)
