"use client";
import { ReactiveImage } from "reactive-image";

export default function Page() {
  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Reactive Image Demo
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div>
          <h3 className="text-lg font-medium mb-2">Slide Right</h3>
          <ReactiveImage
            variant="hoverSwitch"
            src="https://picsum.photos/300/300?random=3"
            hoverSrc="https://picsum.photos/300/300?random=4"
            alt="Slide right effect"
            animation="slide"
            slideDirection="right"
            timing={{ duration: 400, easing: "ease-out" }}
            className="w-full h-64"
            imgClassName="rounded-lg object-cover"
          />
        </div>

        <div>
          <h3 className="text-lg font-medium mb-2">Zoom Animation</h3>
          <ReactiveImage
            variant="hoverSwitch"
            src="https://picsum.photos/300/300?random=5"
            hoverSrc="https://picsum.photos/300/300?random=6"
            alt="Zoom effect"
            animation="zoom"
            timing={{ duration: 500 }}
            className="w-full h-64"
            imgClassName="rounded-lg object-cover"
          />
        </div>

        <div>
          <h3 className="text-lg font-medium mb-2">Rotate Y Animation</h3>
          <ReactiveImage
            variant="hoverSwitch"
            src="https://picsum.photos/300/300?random=7"
            hoverSrc="https://picsum.photos/300/300?random=8"
            alt="Rotate effect"
            animation="rotateY"
            timing={{ duration: 600, easing: "ease-in-out" }}
            className="w-full h-64"
            imgClassName="rounded-lg object-cover"
          />
        </div>

        <div>
          <h3 className="text-lg font-medium mb-2">Scale Rotate Animation</h3>
          <ReactiveImage
            variant="hoverSwitch"
            src="https://picsum.photos/300/300?random=9"
            hoverSrc="https://picsum.photos/300/300?random=10"
            alt="Scale rotate effect"
            animation="scaleRotate"
            enableTouch={true}
            onAnimationStart={() => console.log("Animation started")}
            className="w-full h-64"
            imgClassName="rounded-lg object-cover"
          />
        </div>

        <div>
          <h3 className="text-lg font-medium mb-2">Slide Left</h3>
          <ReactiveImage
            variant="hoverSwitch"
            src="https://picsum.photos/300/300?random=11"
            hoverSrc="https://picsum.photos/300/300?random=12"
            alt="Slide left effect"
            animation="slide"
            slideDirection="left"
            timing={{ duration: 350 }}
            className="w-full h-64"
            imgClassName="rounded-lg object-cover"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div>
          <h3 className="text-lg font-medium mb-2">Slide Up</h3>
          <ReactiveImage
            variant="hoverSwitch"
            src="https://picsum.photos/300/300?random=13"
            hoverSrc="https://picsum.photos/300/300?random=14"
            alt="Slide up effect"
            animation="slide"
            slideDirection="up"
            timing={{ duration: 300, easing: "ease-in-out" }}
            className="w-full h-64"
            imgClassName="rounded-lg object-cover"
          />
        </div>

        <div>
          <h3 className="text-lg font-medium mb-2">Slide Down</h3>
          <ReactiveImage
            variant="hoverSwitch"
            src="https://picsum.photos/300/300?random=15"
            hoverSrc="https://picsum.photos/300/300?random=16"
            alt="Slide down effect"
            animation="slide"
            slideDirection="down"
            timing={{ duration: 300, easing: "ease-in-out" }}
            className="w-full h-64"
            imgClassName="rounded-lg object-cover"
          />
        </div>

        <div>
          <h3 className="text-lg font-medium mb-2">Blur Animation</h3>
          <ReactiveImage
            variant="hoverSwitch"
            src="https://picsum.photos/300/300?random=17"
            hoverSrc="https://picsum.photos/300/300?random=18"
            alt="Blur effect"
            animation="blur"
            preloadHover={true}
            className="w-full h-64"
            imgClassName="rounded-lg object-cover"
          />
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4 mt-8">zoomOnHover</h2>
      <ReactiveImage
        variant="zoomOnHover"
        src="/img/b.jpg"
        alt="Zoom"
        zoomScale={1.2}
      />

      <h2 className="text-2xl font-semibold mb-4 mt-8">tiltOnHover</h2>
      <ReactiveImage
        variant="tiltOnHover"
        src="/img/c.jpg"
        alt="Tilt"
        tiltMax={12}
      />

      <h2 className="text-2xl font-semibold mb-4 mt-8">clickExpand</h2>
      <ReactiveImage
        variant="clickExpand"
        src="/img/d.jpg"
        alt="Modal"
        caption="Sample caption"
        modalAnimation="springPop"
        backdrop="blur"
      />
    </main>
  );
}
