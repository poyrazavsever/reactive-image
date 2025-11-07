# ClickExpand Variant

Advanced click-to-expand modal functionality with multiple animation types, backdrop effects, and accessibility features.

## Features

### 🎬 Animation Types

- **scaleFade**: Smooth scale and fade transition
- **slideUp**: Slide from bottom with fade
- **slideDown**: Slide from top with fade
- **slideLeft**: Slide from right with fade
- **slideRight**: Slide from left with fade
- **springPop**: Bouncy spring animation
- **zoomBounce**: Zoom with bounce effect
- **rotateIn**: Rotate and scale entrance
- **flipIn**: 3D flip entrance effect

### 🎨 Backdrop Effects

- **dim**: Standard dark overlay
- **blur**: Blurred background with transparency
- **glass**: Glassmorphism effect with blur and saturation
- **dark**: Heavy dark overlay
- **none**: Transparent (no backdrop)

### 📏 Modal Sizes

- **sm**: 400x300px max
- **md**: 600x450px max
- **lg**: 800x600px max
- **xl**: 1200x800px max
- **full**: 95% viewport coverage
- **auto**: Responsive sizing (default)

### ♿ Accessibility Features

- ARIA modal attributes
- Keyboard navigation (ESC, Tab, Enter, Space)
- Focus trapping within modal
- Screen reader announcements
- Proper role and labeling

### 🎯 Performance Features

- Automatic scroll locking
- Animation frame optimization
- CSS custom properties for timing
- Lazy loading support
- Memory leak prevention

## Basic Usage

```tsx
import { ReactiveImage } from "reactive-image";

function Gallery() {
  return (
    <ReactiveImage
      variant="clickExpand"
      src="/image.jpg"
      alt="Gallery image"
      modalAnimation="springPop"
      backdrop="blur"
      caption="Beautiful landscape photo"
    />
  );
}
```

## Advanced Configuration

```tsx
import { ReactiveImage } from "reactive-image";

function AdvancedGallery() {
  const handleOpen = () => console.log("Modal opened");
  const handleClose = () => console.log("Modal closed");

  return (
    <ReactiveImage
      variant="clickExpand"
      src="/high-res-image.jpg"
      alt="High resolution artwork"
      // Animation settings
      modalAnimation="rotateIn"
      animationDuration={350}
      // Backdrop configuration
      backdrop="glass"
      customBackdrop={{
        backgroundColor: "rgba(100, 50, 150, 0.2)",
      }}
      // Modal settings
      modalSize="lg"
      caption="Detailed artwork description"
      // Interaction settings
      closeOnEsc={true}
      closeOnBackdrop={true}
      enableKeyboard={true}
      preventScroll={true}
      // Styling
      className="gallery-item"
      modalClassName="custom-modal"
      captionClassName="custom-caption"
      // Event handlers
      onOpen={handleOpen}
      onClose={handleClose}
      onAnimationStart={() => console.log("Animation started")}
      onAnimationEnd={() => console.log("Animation completed")}
    />
  );
}
```

## Custom Hooks Usage

```tsx
import { useClickExpand } from "reactive-image/ClickExpand";

function CustomModalComponent() {
  const { state, handlers, modalProps } = useClickExpand({
    closeOnEsc: true,
    closeOnBackdrop: true,
    onOpen: () => console.log("Opened"),
    onClose: () => console.log("Closed"),
  });

  return (
    <div>
      <button onClick={handlers.open}>Open Custom Modal</button>

      {state.isOpen && (
        <div {...modalProps}>
          <div onClick={(e) => e.stopPropagation()}>
            <h2>Custom Modal Content</h2>
            <button onClick={handlers.close}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
```

## Animation Examples

```tsx
// Spring bounce effect
<ReactiveImage
  variant="clickExpand"
  modalAnimation="springPop"
  animationDuration={300}
/>

// Smooth slide up
<ReactiveImage
  variant="clickExpand"
  modalAnimation="slideUp"
  animationDuration={250}
/>

// 3D flip entrance
<ReactiveImage
  variant="clickExpand"
  modalAnimation="flipIn"
  animationDuration={400}
/>
```

## Backdrop Customization

```tsx
// Glassmorphism effect
<ReactiveImage
  variant="clickExpand"
  backdrop="glass"
  customBackdrop={{
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(20px) saturate(200%)',
  }}
/>

// Custom colored overlay
<ReactiveImage
  variant="clickExpand"
  backdrop="dim"
  customBackdrop={{
    backgroundColor: 'rgba(139, 69, 19, 0.8)', // Brown tint
  }}
/>
```

## Keyboard Shortcuts

- **ESC**: Close modal (if `closeOnEsc` enabled)
- **Enter/Space**: Open modal when image focused
- **Tab**: Navigate within modal (focus trapped)

## Props Reference

| Prop                | Type                 | Default       | Description                       |
| ------------------- | -------------------- | ------------- | --------------------------------- |
| `modalAnimation`    | `ModalAnimationType` | `"scaleFade"` | Animation type for modal entrance |
| `backdrop`          | `BackdropType`       | `"dim"`       | Backdrop effect style             |
| `caption`           | `string`             | `undefined`   | Caption text below image          |
| `closeOnEsc`        | `boolean`            | `true`        | Close modal on ESC key            |
| `closeOnBackdrop`   | `boolean`            | `true`        | Close modal on backdrop click     |
| `modalSize`         | `ModalSize`          | `"auto"`      | Maximum modal dimensions          |
| `animationDuration` | `number`             | `200`         | Animation duration in ms          |
| `enableKeyboard`    | `boolean`            | `true`        | Enable keyboard navigation        |
| `preventScroll`     | `boolean`            | `true`        | Lock body scroll when open        |
| `customBackdrop`    | `CSSProperties`      | `undefined`   | Custom backdrop styles            |
| `modalClassName`    | `string`             | `undefined`   | CSS class for modal container     |
| `captionClassName`  | `string`             | `undefined`   | CSS class for caption             |
| `onOpen`            | `() => void`         | `undefined`   | Modal open callback               |
| `onClose`           | `() => void`         | `undefined`   | Modal close callback              |
| `onAnimationStart`  | `() => void`         | `undefined`   | Animation start callback          |
| `onAnimationEnd`    | `() => void`         | `undefined`   | Animation end callback            |

## TypeScript Support

Full TypeScript support with comprehensive type definitions:

```tsx
import type {
  ClickExpandProps,
  ModalAnimationType,
  BackdropType,
  ModalSize,
} from "reactive-image/ClickExpand";

const config: ClickExpandProps = {
  modalAnimation: "springPop",
  backdrop: "blur",
  modalSize: "lg",
  animationDuration: 300,
};
```
