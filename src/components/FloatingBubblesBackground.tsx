import React, { useEffect, useRef } from "react";

function randomRange(a: number, b: number) {
  return a + Math.floor(Math.random() * (b - a));
}

function randomFromArray(arr: any[]) {
  return arr[randomRange(0, arr.length)];
}

function getRandomThematicColor() {
  return randomFromArray(["#66ff22"]);
}

const bubbleCount = 8;
const velocityRange = [2, 5];
const sizeRange = [20, 100];

export default function FloatingBubblesBackground() {
  const canvas = useRef() as React.MutableRefObject<HTMLCanvasElement>;

  useEffect(() => {
    let ctx = canvas.current.getContext("2d") as CanvasRenderingContext2D;
    canvas.current.width = canvas.current.offsetWidth;
    canvas.current.height = canvas.current.offsetHeight;

    let raf;

    let bubbles: Bubble[] = [];

    const [canvasWidth, canvasHeight] = [
      canvas.current.width,
      canvas.current.height,
    ];

    class Bubble {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;

      constructor(
        x = 0,
        y = 0,
        vx = velocityRange[0],
        vy = velocityRange[0],
        size = sizeRange[0],
        color = "#aaff33"
      ) {
        this.x = x;
        this.y = y;
        this.vx = 0;
        this.vy = 0;
        this.size = 100;
        this.color = color;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(
          this.x - this.size / 2,
          this.y - this.size / 2,
          this.size / 2,
          0,
          2 * Math.PI
        );
        ctx.fillStyle = `#ff0000`;
        ctx.stroke();
      }
    }

    function init() {
      for (let i = 0; i < bubbleCount; i++) {
        const newBubble = new Bubble(
          randomRange(0, canvasWidth),
          randomRange(0, canvasHeight),
          randomRange(velocityRange[0], velocityRange[1]),
          randomRange(velocityRange[0], velocityRange[1]),
          randomRange(sizeRange[0], sizeRange[1]),
          getRandomThematicColor()
        );

        bubbles.push(newBubble);
      }
    }

    function draw() {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      for (let b of bubbles) {
        b.draw();
        if (b.x <= 0 && b.vx <= 0) {
          b.vx = Math.abs(b.vx);
        }
        if (b.x >= canvasWidth && b.vx >= 0) {
          b.vx = -1 * Math.abs(b.vx);
        }
        if (b.y <= 0 && b.vy <= 0) {
          b.vy = Math.abs(b.vy);
        }
        if (b.y >= canvasHeight && b.vy >= 0) {
          b.vy = -1 * Math.abs(b.vy);
        }
      }

      raf = window.requestAnimationFrame(draw);
    }

    init();
    draw();
  }, []);

  return <canvas ref={canvas} className="w-full h-full" />;
}
