export default async function getColorPaletteFromImage(
  img: HTMLImageElement
): Promise<string[]> {
  // Load the image
  await new Promise((resolve) => {
    img.onload = resolve;
  });

  // Create a canvas and draw the image on it
  let canvas = document.createElement("canvas") as HTMLCanvasElement;
  let context = canvas.getContext("2d") as CanvasRenderingContext2D;
  context.drawImage(img, 0, 0);

  // Get the image data and count the occurrence of each color
  const imageData = context.getImageData(
    0,
    0,
    canvas.width,
    canvas.height
  ).data;
  const colorCounts: { [color: string]: number } = {};
  for (let i = 0; i < imageData.length; i += 4) {
    const color = `rgb(${imageData[i]}, ${imageData[i + 1]}, ${
      imageData[i + 2]
    })`;
    colorCounts[color] = (colorCounts[color] || 0) + 1;
  }

  // Sort the colors by their occurrence and return the top 6
  const sortedColors = Object.keys(colorCounts).sort(
    (a, b) => colorCounts[b] - colorCounts[a]
  );
  return sortedColors.slice(0, 6);
}
