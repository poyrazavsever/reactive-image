<img src="./public/tr/logo/logo.png" width="64" height="64">

# Reactive Image

**Reactive Image** - A powerful, interactive, and customizable visual component collection for React applications. Delivers stunning animations and smooth transitions to enhance user experience.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-ISC-green.svg)
![React](https://img.shields.io/badge/react-%E2%89%A518.0.0-blue.svg)
![TypeScript](https://img.shields.io/badge/typescript-%E2%89%A55.0.0-blue.svg)
![Size](https://img.shields.io/badge/size-~15kb-lightgrey.svg)

## Features

### **4 Powerful Interactive Variants**

- **HoverSwitch** - Image switching on mouse hover
- **ZoomOnHover** - Mouse-driven zoom effects
- **TiltOnHover** - 3D tilt and perspective effects
- **ClickExpand** - Click-to-expand modal viewing

### **Performance Focused**

- Optimized animations with modern CSS transforms
- RequestAnimationFrame-based smooth motion
- Lazy loading support
- Minimal bundle size (~15kb)

### **Fully Customizable**

- 35+ different animation types
- CSS-in-JS or external stylesheet support
- Custom timing and easing functions
- Flexible sizing for responsive design

### **Multi-Platform Support**

- Special optimization for touch devices
- Gyroscope support (mobile devices)
- Keyboard navigation (accessibility)
- Compatible with all modern browsers

### **Developer Friendly**

- **Full TypeScript** support and type safety
- Comprehensive API reference and documentation
- React 18+ and Next.js compatibility
- ESM and CommonJS export support

### **Accessibility**

- ARIA labels and roles
- Screen reader compatibility
- Keyboard navigation support
- `prefers-reduced-motion` support

## Quick Start

### Installation

```bash
# npm
npm install reactive-image

# yarn
yarn add reactive-image

# pnpm
pnpm add reactive-image

# bun
bun add reactive-image
```

### Basic Usage

```jsx
import { ReactiveImage } from "reactive-image";

function App() {
  return (
    <ReactiveImage
      variant="zoomOnHover"
      src="/image.jpg"
      alt="Beautiful landscape"
      zoomScale={1.3}
      animation="elastic"
    />
  );
}
```

## Variants and Examples

### 1. HoverSwitch - Image Switching

Transitions between different images when mouse hovers over the element.

```jsx
// Slide animation
<ReactiveImage
  variant="hoverSwitch"
  src="/image1.jpg"
  hoverSrc="/image2.jpg"
  alt="Before and after"
  animation="slide"
  slideDirection="right"
  timing={{ duration: 400, easing: "ease-out" }}
/>

// 3D rotation effect
<ReactiveImage
  variant="hoverSwitch"
  src="/front-face.jpg"
  hoverSrc="/back-face.jpg"
  alt="Card flip"
  animation="rotateY"
  timing={{ duration: 600 }}
/>

// Crossfade transition
<ReactiveImage
  variant="hoverSwitch"
  src="/day.jpg"
  hoverSrc="/night.jpg"
  alt="Day night transition"
  animation="crossfade"
  preloadHover={true}
/>
```

**Available Animations:**

- `slide` - Horizontal/vertical sliding
- `crossfade` - Smooth transition
- `zoom` - Zoom-in transition
- `blur` - Blur effect
- `rotateY` - 3D rotation
- `slideUp/slideDown` - Vertical sliding
- `scaleRotate` - Scaling + rotation

### 2. ZoomOnHover - Zoom Effects

Various zoom animations and customizations.

```jsx
// Basic zoom
<ReactiveImage
  variant="zoomOnHover"
  src="/product.jpg"
  alt="Product detail"
  zoomScale={1.25}
  animation="scale"
  origin="center"
/>

// Mouse-following zoom
<ReactiveImage
  variant="zoomOnHover"
  src="/map.jpg"
  alt="Interactive map"
  zoomScale={1.5}
  origin="cursor"
  followCursor={true}
  animation="scale"
/>

// Elastic bounce effect
<ReactiveImage
  variant="zoomOnHover"
  src="/artwork.jpg"
  alt="Art piece"
  zoomScale={1.4}
  animation="elastic"
  timing={{ duration: 600 }}
  rotation={5}
/>

// 3D perspective zoom
<ReactiveImage
  variant="zoomOnHover"
  src="/modern-design.jpg"
  alt="Modern design"
  animation="perspective"
  zoomScale={1.3}
  rotation={15}
/>
```

**Zoom Types:**

- `scale` - Simple scaling
- `scaleRotate` - Scaling with rotation
- `scaleBlur` - With blur effect
- `scaleFade` - With opacity change
- `perspective` - 3D perspective
- `elastic` - Elastic bounce
- `bounce` - Bounce effect
- `pulse` - Pulse effect

### 3. TiltOnHover - 3D Tilt Effects

Realistic 3D tilt and perspective animations.

```jsx
// Basic tilt effect
<ReactiveImage
  variant="tiltOnHover"
  src="/card.jpg"
  alt="Interactive card"
  tiltMax={15}
  animation="basic"
  axis="both"
/>

// Tilt with light reflection
<ReactiveImage
  variant="tiltOnHover"
  src="/premium-product.jpg"
  alt="Premium product"
  tiltMax={12}
  animation="glare"
  glare={{
    enabled: true,
    maxOpacity: 0.4,
    position: "mouse"
  }}
/>

// Magnetic attraction effect
<ReactiveImage
  variant="tiltOnHover"
  src="/interactive.jpg"
  alt="Magnetic effect"
  animation="magnetic"
  tiltMax={10}
  enableTouch={true}
/>

// Gyroscope support (mobile)
<ReactiveImage
  variant="tiltOnHover"
  src="/mobile.jpg"
  alt="Mobile optimized"
  gyroscope={true}
  tiltMax={20}
  axis="both"
/>
```

**Tilt Animations:**

- `basic` - Basic 3D tilt
- `glare` - Light reflection effect
- `scale` - Scaling with tilt
- `perspective` - Advanced 3D depth
- `magnetic` - Magnetic attraction
- `float` - Floating effect + shadow
- `parallax` - Multi-layer movement
- `bounce/elastic` - Flexible return

### 4. ClickExpand - Modal Expansion

Click-to-expand modal viewing.

```jsx
// Spring pop animation
<ReactiveImage
  variant="clickExpand"
  src="/gallery.jpg"
  alt="Gallery image"
  modalAnimation="springPop"
  backdrop="blur"
  caption="Beautiful landscape photo"
  modalSize="lg"
/>

// Glassmorphism effect
<ReactiveImage
  variant="clickExpand"
  src="/artwork.jpg"
  alt="Art piece"
  modalAnimation="rotateIn"
  backdrop="glass"
  caption="Modern art collection"
  customBackdrop={{
    backgroundColor: "rgba(100, 50, 150, 0.15)",
    backdropFilter: "blur(20px) saturate(200%)"
  }}
/>

// 3D flip entrance animation
<ReactiveImage
  variant="clickExpand"
  src="/portfolio.jpg"
  alt="Portfolio work"
  modalAnimation="flipIn"
  backdrop="dark"
  modalSize="xl"
  animationDuration={400}
/>
```

**Modal Animations:**

- `scaleFade` - Scaling + fade
- `slideUp/slideDown` - Up/down sliding
- `springPop` - Spring bounce
- `zoomBounce` - Zoom + bounce
- `rotateIn` - Rotate entrance
- `flipIn` - 3D flip

## Advanced Customization

### Custom Timing Settings

```jsx
<ReactiveImage
  variant="zoomOnHover"
  timing={{
    duration: 500, // Animation duration (ms)
    delay: 100, // Start delay (ms)
    easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)", // Custom easing
  }}
/>
```

### CSS Customization

```jsx
// With Tailwind CSS
<ReactiveImage
  variant="tiltOnHover"
  className="w-64 h-64 mx-auto"
  imgClassName="rounded-xl shadow-lg"
  tiltClassName="shadow-2xl" // Added during tilt
/>;

// With Styled Components
const StyledImage = styled(ReactiveImage)`
  border-radius: 16px;
  overflow: hidden;

  &:hover {
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  }
`;
```

### Event Callbacks

```jsx
<ReactiveImage
  variant="hoverSwitch"
  onAnimationStart={() => {
    console.log('Animation started');
    // Analytics tracking
    gtag('event', 'image_hover', { image_id: 'hero-image' });
  }}
  onAnimationEnd={() => {
    console.log('Animation completed');
  }}
/>

// Custom callbacks for tilt
<ReactiveImage
  variant="tiltOnHover"
  onTiltStart={({ tiltX, tiltY }) => {
    console.log('Tilt started:', { tiltX, tiltY });
  }}
  onTiltMove={({ mouseX, mouseY, tiltX, tiltY }) => {
    // Real-time mouse tracking
    updateParallaxLayers(mouseX, mouseY);
  }}
/>
```

## Mobile and Touch Support

```jsx
// Optimization for touch devices
<ReactiveImage
  variant="zoomOnHover"
  enableTouch={true}        // Enable touch events
  zoomScale={1.15}         // Smaller scale for mobile
  timing={{ duration: 200 }} // Fast response
/>

// Gyroscope support
<ReactiveImage
  variant="tiltOnHover"
  gyroscope={true}         // Use device orientation
  tiltMax={25}            // Higher angle for gyroscope
  axis="both"             // Movement on both axes
/>
```

## Framework Integrations

### Next.js App Router

```jsx
// app/components/Gallery.tsx
import { ReactiveImage } from "reactive-image";

export default function Gallery() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <ReactiveImage
        variant="clickExpand"
        src="/images/photo1.jpg"
        alt="Gallery photo"
        modalAnimation="springPop"
      />
    </div>
  );
}
```

### Vite + React

```jsx
// src/components/ProductShowcase.jsx
import { ReactiveImage } from "reactive-image";

export function ProductShowcase({ products }) {
  return (
    <section className="product-grid">
      {products.map((product) => (
        <ReactiveImage
          key={product.id}
          variant="hoverSwitch"
          src={product.image}
          hoverSrc={product.hoverImage}
          alt={product.name}
          animation="zoom"
        />
      ))}
    </section>
  );
}
```

## Performance Tips

### 1. **Image Optimization**

```jsx
// Use WebP and modern formats
<ReactiveImage
  variant="zoomOnHover"
  src="/optimized.webp"
  alt="Optimized image"
  loading="lazy" // Lazy loading
  decoding="async" // Async decode
/>
```

### 2. **Preloading Strategies**

```jsx
// Preload for critical images
<ReactiveImage
  variant="hoverSwitch"
  src="/hero.jpg"
  hoverSrc="/hero-alt.jpg"
  preloadHover={true} // Preload hover image
  disableLazy={true} // Disable lazy loading for critical images
/>
```

### 3. **Animation Optimization**

```jsx
// Optimal settings for performance
<ReactiveImage
  variant="tiltOnHover"
  tiltMax={10} // Avoid excessively high angles
  timing={{
    duration: 150, // Short duration for fast response
    reset: 300, // Fast reset
  }}
  containZoom={true} // Prevent layout shift
/>
```

## Browser Compatibility

| Browser              | Minimum Version | Feature Support                    |
| -------------------- | --------------- | ---------------------------------- |
| **Chrome**           | 80+             | Full support (including gyroscope) |
| **Firefox**          | 75+             | Full support (limited gyroscope)   |
| **Safari**           | 13+             | iOS gyroscope support              |
| **Edge**             | 80+             | Full support                       |
| **Samsung Internet** | 13+             | Mobile optimization                |

### Progressive Enhancement

```jsx
// Fallback for older browsers
<ReactiveImage
  variant="zoomOnHover"
  src="/image.jpg"
  alt="Description"
  // Animation in modern browsers, normal img in older ones
  style={{
    transition: "transform 0.2s ease", // Fallback CSS
  }}
/>
```

## API Reference

### General Props

| Prop           | Type                          | Default  | Description                            |
| -------------- | ----------------------------- | -------- | -------------------------------------- |
| `src`          | `string`                      | -        | **Required.** Image URL                |
| `alt`          | `string`                      | -        | **Required.** Alt text (accessibility) |
| `variant`      | `VariantName`                 | -        | Animation type                         |
| `className`    | `string`                      | -        | Container CSS class                    |
| `imgClassName` | `string`                      | -        | Image CSS class                        |
| `style`        | `CSSProperties`               | -        | Inline styles                          |
| `loading`      | `"eager" \| "lazy"`           | `"lazy"` | Loading strategy                       |
| `decoding`     | `"auto" \| "sync" \| "async"` | `"auto"` | Decode strategy                        |

### HoverSwitch Props

| Prop             | Type                                  | Default       | Description               |
| ---------------- | ------------------------------------- | ------------- | ------------------------- |
| `hoverSrc`       | `string`                              | -             | Image to show on hover    |
| `animation`      | `HoverSwitchAnimation`                | `"crossfade"` | Transition animation type |
| `slideDirection` | `"left" \| "right" \| "up" \| "down"` | `"right"`     | Slide direction           |
| `timing`         | `TimingConfig`                        | `{}`          | Animation timing          |
| `preloadHover`   | `boolean`                             | `true`        | Preload hover image       |
| `enableTouch`    | `boolean`                             | `false`       | Touch support             |

### ZoomOnHover Props

| Prop           | Type            | Default    | Description            |
| -------------- | --------------- | ---------- | ---------------------- |
| `zoomScale`    | `number`        | `1.15`     | Zoom ratio             |
| `animation`    | `ZoomAnimation` | `"scale"`  | Zoom animation type    |
| `origin`       | `ZoomOrigin`    | `"center"` | Transform origin point |
| `followCursor` | `boolean`       | `false`    | Follow mouse cursor    |
| `containZoom`  | `boolean`       | `false`    | Prevent overflow       |

### TiltOnHover Props

| Prop        | Type                   | Default   | Description                  |
| ----------- | ---------------------- | --------- | ---------------------------- |
| `tiltMax`   | `number`               | `10`      | Maximum tilt angle (degrees) |
| `animation` | `TiltAnimation`        | `"basic"` | Tilt animation type          |
| `axis`      | `"both" \| "x" \| "y"` | `"both"`  | Tilt axis                    |
| `glare`     | `GlareConfig`          | `{}`      | Light reflection settings    |
| `gyroscope` | `boolean`              | `false`   | Gyroscope support            |

### ClickExpand Props

| Prop              | Type             | Default       | Description              |
| ----------------- | ---------------- | ------------- | ------------------------ |
| `modalAnimation`  | `ModalAnimation` | `"scaleFade"` | Modal entrance animation |
| `backdrop`        | `BackdropType`   | `"dim"`       | Background effect        |
| `modalSize`       | `ModalSize`      | `"auto"`      | Modal size               |
| `caption`         | `string`         | -             | Image caption            |
| `closeOnEsc`      | `boolean`        | `true`        | Close on ESC key         |
| `closeOnBackdrop` | `boolean`        | `true`        | Close on backdrop click  |

## Development and Contributing

### Local Development Environment

```bash
# Clone the repository
git clone https://github.com/poyrazavsever/reactive-image.git
cd reactive-image

# Install dependencies
npm install

# Start development server
npm run dev

# Build package
npm run build:package

# Build entire project
npm run build
```

### Project Structure

```
reactive-image/
├── packages/
│   └── reactive-image/           # Main library
│       ├── src/
│       │   ├── variants/         # Animation variants
│       │   │   ├── HoverSwitch/
│       │   │   ├── ZoomOnHover/
│       │   │   ├── TiltOnHover/
│       │   │   └── ClickExpand/
│       │   ├── types.ts          # TypeScript types
│       │   └── index.ts
│       └── package.json
├── apps/
│   └── docs/                     # Documentation site
└── app/                          # Demo application
```

### Adding New Variants

1. **Create new folder:** `packages/reactive-image/src/variants/NewVariant/`
2. **Required files:**
   ```
   NewVariant/
   ├── index.ts           # Exports
   ├── types.ts           # TypeScript types
   ├── NewVariant.tsx     # Main component
   ├── hooks.ts           # React hooks
   ├── animations.ts      # CSS animations
   └── README.md          # Documentation
   ```
3. **Add to main files:** `ReactiveImage.tsx` and `types.ts`

### Testing

```bash
# Run all tests
npm test

# Type checking
npm run tsc:check

# Linting
npm run lint
```

### Contributing Guidelines

- **Clean Code:** Follow ESLint and Prettier rules
- **TypeScript:** Ensure full type safety
- **Performance:** Animations should run at 60fps
- **Accessibility:** Include ARIA labels and keyboard support
- **Documentation:** Add documentation for new features
- **Tests:** Write tests for critical functions

## Community and Support

### Bug Reports

Report bugs through [GitHub Issues](https://github.com/poyrazavsever/reactive-image/issues).

### Feature Requests

Use [Discussions](https://github.com/poyrazavsever/reactive-image/discussions) for new feature suggestions.

### Documentation

Visit the [documentation site](https://reactive-image-docs.vercel.app) for detailed API reference and examples.

### Showcase

If you're using Reactive Image in your project, share it in the [showcase](https://github.com/poyrazavsever/reactive-image/discussions/categories/showcase) section!

## License

This project is licensed under **ISC License**. See [LICENSE](LICENSE) file for details.

## Acknowledgments

- **Framer Motion** - For animation inspiration
- **React Spring** - For physics-based animations
- **Tailwind CSS** - For styling system examples
- **React Community** - For continuous growth and support

---

<div align="center">

**If you like this project, don't forget to star it on GitHub!**

[Star on GitHub](https://github.com/poyrazavsever/reactive-image) • [Documentation](https://reactive-image-docs.vercel.app) • [Demo](https://reactive-image-demo.vercel.app)

**Developer:** [Poyraz Avsever](https://github.com/poyrazavsever)  
**License:** ISC • **Version:** 1.0.0

</div>
